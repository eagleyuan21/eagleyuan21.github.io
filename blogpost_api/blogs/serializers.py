from rest_framework import serializers
from .models import blogpost

class blogSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    class Meta:
        model = blogpost
        fields = ('Title', 'Date', 'photo_url', 'Content')
        
    def get_photo_url(self, blog):
        request = self.context.get('request')
        photo_url = blog.Image.url
        return request.build_absolute_uri(photo_url)