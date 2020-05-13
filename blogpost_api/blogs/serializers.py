from rest_framework import serializers
from .models import blogpost

class blogSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = blogpost
        fields = ["id", "Title",
        "Date",
        "Image",
        "Content"]