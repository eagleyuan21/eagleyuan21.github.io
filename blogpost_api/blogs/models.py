from django.db import models

# Create your models here.
class blogpost(models.Model):
    Title = models.CharField(max_length = 255)
    Date = models.DateField(auto_now=True)
    Image = models.ImageField(blank=True)
    Content = models.TextField()