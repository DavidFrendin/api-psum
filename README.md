
# API-psum

API-psum is a Node.js based web service providing structured jabber content.

### Live demo
[https://api-psum.herokuapp.com](https://api-psum.herokuapp.com/)


## Installation

Use the package manager [npm](https://nodejs.org/en/) to install dependencies and nodemon to serve a local instance.

```bash
npm install
npm install nodemon -g
nodemon app/index.js
```

### .env
Environmental parameters such as mongodb connection string is passed through the .env file you need to create at the projects root folder:
```
PORT=80
CONNECTIONSTRING={{your connection string}}
```

### Deploy
A procfile is available in the root directory for deployment at [herku](https://www.heroku.com/).

### Database
API-psum uses mongodb and mongoose for database storage.

The database schema and data is unfortunately not available at this moment - you'll have to figure out the schema and populate the database with content on your own.



## Usage
API-psum provides a back-end with structured persistent or random data.

It's freely available live at [https://api-psum.herokuapp.com](https://api-psum.herokuapp.com/), where api details and examples are provided.

## Image list
Endpoint: [GET] /api/images/

Retrieves an array of images.

**Result:**
```json
[{
	"_id":"5fa05ea7aca4f7272c0f04a2",
	"url":"https://unsplash.com/photos/c0VRNWVEjOA",
	"author":"Agnieszka Kowalczyk",
	"width":6000,
	"height":4000,
	"download_url":"https://images.unsplash.com/photo-...",
	"preview_url":"https://images.unsplash.com/photo-..."
}]
```
**Header**
```http
Link: <http://api-psum.herokuapp.com/images/?page=1&limit=10>; rel="first", <http://api-psum.herokuapp.com/images/?page=10&limit=10>; rel="last", <http://api-psum.herokuapp.com/images/?page=2&limit=10>; rel="next"
```

**Query string parameters**
* **&page={number}**
	* Retrieve data from requested page
* **&limit={number}**
	* Specify how many documents from the collection should be retrieved per page.

## Random image
Endpoint: [GET] /api/images/random/

Retrieves a single random image.

```json
{
	"_id":"5fa05ea7aca4f7272c0f04a2",
	"url":"https://unsplash.com/photos/c0VRNWVEjOA",
	"author":"Agnieszka Kowalczyk",
	"width":6000,
	"height":4000,
	"download_url":"https://images.unsplash.com/photo-...",
	"preview_url":"https://images.unsplash.com/photo-..."
}
```

## Random image preview
Endpoint: [GET] /api/images/random/preview/

Redirects to a single random images 'preview_url' field.

```html
<img src="https://api-psum.herokuapp.com/api/images/random/" />
```

## Jabber
Endpoint: [get] /GET/jabber/

Retrieves an array of jabber paragraphs.

The first paragraph begins with "Star wars ipsum dolor sit amet", the rest of the content are randomly filled from dialogue based on star wars episode 4.

**Result:**
```json
[
	"Star wars ipsum dolor sit amet hold tight! I don't know, it ...",
	"red Six standing by. Give me regular reports. Oh, it's Han!  ...",
	"easy... you call that easy? Red Eleven standing by. Double front! ...",
	"just hold them off for a few seconds. The Jedi are extinct, their ...",
	"it's too big to be a space station. They've coming in!  Three ..."]
]
```

## Random name
Endpoint: [GET] /api/jabber/name/

Retrieves a randomly generated full name by combining random first and last names of star wars characters.

**Result:**
```
Qui-Gon Grievous
```

## Authentication
Endpoint: [POST] /api/auth/

The auth endpoint creates a [JWT Token](https://jwt.io/). A valid username is required, but any password is successful.

The JWT token can be verified using the secret ```api-psum```.

**Form fields**
```
username={valid-username}
password={any-string}
```

**Result:**
```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS1wc3VtLmhlcm9rdWFwcC5jb20vIiwic3ViIjoicHVibGljIiwiZXhwIjoxNjA0NjA3MDkzLCJpYXQiOjE2MDQ1MjA2OTMsIm5iZiI6MTYwNDUyMDY5MywianRpIjoiZWM5ODZmOGEtY2VjZS00ZTBiLWE3N2UtMjRkYWM3OTg4OGQwIiwidXNlciI6eyJyb2xlcyI6WyJSRUJFTCIsIkpFREkiXSwiX2lkIjoiNWZhMzA0NTRhY2E0ZjcyNzJjMGYwNTA2IiwidXNlcm5hbWUiOiJrZW5vYmkiLCJuYW1lIjoiT2JpLVdhbiBLZW5vYmkiLCJwcm9maWxlX2ltYWdlIjoiaHR0cHM6Ly9hcGktcHN1bS5oZXJva3VhcHAuY29tL2ltYWdlcy9wcm9maWxlL2tlbm9iaS5qcGcifX0.s_PfXuVO8Cz3Ch_0mQTrLZhJfQtVntNcUWp2ns84hvI
```

**Decoded**
```json
Header
{
  "alg": "HS256",
  "typ": "JWT"
}
Payload
{
  "iss": "https://api-psum.herokuapp.com/",
  "sub": "public",
  "exp": 1604607093,
  "iat": 1604520693,
  "nbf": 1604520693,
  "jti": "ec986f8a-cece-4e0b-a77e-24dac79888d0",
  "user": {
    "roles": [
      "REBEL",
      "JEDI"
    ],
    "_id": "5fa30454aca4f7272c0f0506",
    "username": "kenobi",
    "name": "Obi-Wan Kenobi",
    "profile_image": "https://api-psum.herokuapp.com/images/profile/kenobi.jpg"
  }
}
```
Decoded, the user field will contain the user profile information.

## Users list
Endpoint: [GET] /api/users/

Retrieves an array of users.

**Result:**
```json
[{
    "_id": "5fa30454aca4f7272c0f0506",
    "username": "kenobi",
    "name": "Obi-Wan Kenobi",
    "profile_image": "https://api-psum.herokuapp.com/images/...",
    "roles": [
      "REBEL",
      "JEDI"
    ]
}]
```
**Header**
```http
Link: <http://api-psum.herokuapp.com/users/?page=1&limit=10>; rel="first", <http://api-psum.herokuapp.com/users/?page=10&limit=10>; rel="last", <http://api-psum.herokuapp.com/users/?page=2&limit=10>; rel="next"
```

**Query string parameters**
* **&page={number}**
	* Retrieve data from requested page
* **&limit={number}**
	* Specify how many documents from the collection should be retrieved per page.

## Random user
Endpoint: [GET] /api/users/random/

Retrieves a single random user.

```json
{
    "_id": "5fa30454aca4f7272c0f0506",
    "username": "kenobi",
    "name": "Obi-Wan Kenobi",
    "profile_image": "https://api-psum.herokuapp.com/images/...",
    "roles": [
      "REBEL",
      "JEDI"
    ]
}
```

## Star wars theme
All data provided by API-psum is star wars themed; from random name generation to images served.

This should be far enough from real-world applications that you'd know it is mockup data, while having a cohesive theme not feeling random. Plus it's fun.

So happy coding and may the force be with you.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[Unlicense](https://choosealicense.com/licenses/unlicense/) - feel free to use this in any way you deem usable.