# Text file filter
The purpose of this python code here is to gather all the names of the pictures so that it can be stored into randomgen.js.

In order to do so, the first necessary task is to generate a text file with all the names. Move into the "slideshow" folder, and then type this command into terminal.
```bash
$ls > names.txt
```

Then open up names.txt in slideshow, and scroll to the bottom and delete the line with the string "names.txt". Now in terminal move into the same folder as this README.md, and run this command.
```bash
$python3 format.py
```

Doing so should output a long string with "[" at the start and a "]" at the end. Copy the whole string including both brackets, and then move out of this folder and out of the files folder into the js folder, where you will find the file randomgen.js. Open up this file, and at the very start of the file is an array with variable name "files". Copy and paste the string into this variable, making sure to add a semicolon at the end since this indicates the end of a field in javascript. The names of all the images are now inputted, allowing for the slideshow to work.
