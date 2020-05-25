# personal-website
My personal website introducing myself, blogs, and my projects. It can be viewed at https://www.eagleyuan.com

Some features of my website include: A top fixed navigation bar that minimizes when not at the top of the page and scrolls to sections if the section is on the page, a random slideshow of 3 pictures being changed at random intervals, an about me section, a list of my technical skills, and a timeline feature that shows my experiences both education and work related. The website incorporates a wide variety of interactions between HTML, CSS, and JavaScript in order to achieve the features of this website, while still allowing for convenient access to the website for devices other than desktop. The latest version of bootstrap was downloaded to have basic CSS and JavaScript files to use for the website.

The blog implements a REST api application in Django that was built for the purpose of this blog only. That way, I can add blog posts on any device without having to modify html files. Subsequent JavaScript files are written to get the JSON data and display the data in the html file. Additionally although anyone can see the json data that I generate, only adminstrative privledges can post blog JSON data, so nobody can post to the blogs excepts me. To view both the front end and back end logic of the taking the JSON data and displaying, see the blogapi JavaScript file under assets/js/blogapi.js. The blog page api is deployed on heroku at blogpostseha.herokuapp.com and is displayed at eagleyuan.com/blogs. The code for the blog can be found in the blog-api repo.

As seen on the projects page, the project are still in development and have not been deployed to the website.

In order to view this website locally, simply just download everything in this repository, and open "index.html" in the browser of your choice.
