# Demo-octagon

This is a Demo project with the smailiar design of http://baseball.doosan.com/.

This project is built with React and init with Create react app.

The site can be viewed on Desktop, Tablet (iPad) and Mobile devices (iPhone, Galaxy S6, etc).

Page 1 (Landing):
* sticky header (logo and some navigation links)
* hero image (or video)
* a section containing text (please use “Lorem Ipsum”)
* basic footer with links
 
Page 2 (Contact form):Page containing a form. The form would have the following fields and corresponding validation:
* First name – characters only
* Last name – characters, hyphens and apostrophes only
* Email – valid email addresses
* Zip code – US zip validation
* US States – a drop down list of states

## Project preview


## Install
```
npm install
```
## Run
```
npm start
```



## React Components Diagram
![Diagram](https://github.com/YuhanLin1105/demo-octagon/blob/master/src/assets/images/readmeImg/React-Diagram.png)

## Server 
With limit information I can't figure out what kind of backend architecture you are looking for.

Here are some thought for this Demo:
* The Only business logic for this demo is to send the data of Contact form and get the data on the server and put the data to the database.
* Due to this process without any Authenticate, I prefer to Validate the data at Front End (ContactSection of the project)and send AJAX post request to the Server API end point like 'XXX/XXX/XXX/contactNoAuth'. 
* The server recieve the AJAX post request from Front End, validate the data with the Model of contact data, and put them to the Data base.

## installation



## development experience

using app.js control the page rendering. 

future thought:
    if the Project is becoming more and more complex, we could use React-Router to rending component with different url and use Redux to control the globle state.



By using SVG sprite, we can use 1 HTTP request for all svgs.( This is good for HTTP/1.1 not HTTP/2 protocol). and style all svgs.

thanks [iconMoon](https://icomoon.io/) for icon.

## License
The content of this repository is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
