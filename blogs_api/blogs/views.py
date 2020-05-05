from django.shortcuts import render
from rest_framework import viewsets
from .models import blogpost
from .serializers import blogSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class blogView(APIView):
    def get(self, request, format=None):
        blogs = blogpost.objects.all()
        serializer = blogSerializer(blogs, many=True)
        return Response(serializer.data)
