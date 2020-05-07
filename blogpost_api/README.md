# Blog page's API Framework

The purpose of this is so that I can update my blog on any device as long as I am connected to the internet, so I can upload blog posts on my phone and such.

This uses the django rest framework, and the API is uploaded to blogpostseha.herokuapp.com. The API is set so that only someone with adminstrator access can make requests to change the JSON data, but anyone can do GET requests. 

If running locally, make sure python3 is downloaded. Then download django and djangorestframework using pip.

```bash 
$ pip install django
#
$ pip install djangorestframework 
#
```

In order to make the environment suitable for images, also install Pillow.

```bash 
$ pip install Pillow
#
```

Download the  project folder here and then using terminal move into the folder. A few changes need to be made in order to run the application. Open up blogs_api/settings.py and find the fields "ALLOWED_HOSTS, MEDIA_ROOT, and MEDIA_URL". Allowed hosts should be empty since it is local, media root should be set to where you would like the uploaded image files to be downloaded to, and media url should be set to whatever url you would like to help see the image in broswer.

Run these commands now in local directory.

```bash 
$ python3 manage.py makemigrations
#
$ python3 manage.py migrate
#
$ python3 manage.py runserver
#
```

The application should now be available at http://127.0.0.1:8000/. If you want to be able to upload JSON objects, create a superuser account and access http://127.0.0.1:8000/admin to start adding objects.

The main four fields in this API is the blog's Title, Date, Image, and Content. The max length of the title is 255 characters, the date is automatically generated to the date of the posting of the original JSON object, the image field is optional, and the content is a text field with no limit on how many characters can be in it. 

