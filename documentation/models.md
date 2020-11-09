# Models
## Image model
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

## Json Web Token
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

## User model
```json
{
  "_id": {
    "$oid": "5fa30454aca4f7272c0f0506"
  },
  "username": "kenobi",
  "name": "Obi-Wan Kenobi",
  "roles": [
    "REBEL",
    "JEDI"
  ],
  "profile_image": "https://api-psum.herokuapp.com/images/profile/kenobi.jpg"
}
```
### Users
#### Obi-wan Kenobi
```json
{
  "_id": {
    "$oid": "5fa30454aca4f7272c0f0506"
  },
  "username": "kenobi",
  "name": "Obi-Wan Kenobi",
  "roles": [
    "REBEL",
    "JEDI"
  ],
  "profile_image": "https://api-psum.herokuapp.com/images/profile/kenobi.jpg"
}
```

#### Emperor Palpatine
```json
{
  "_id": {
    "$oid": "5fa580f1aca4f7272c0f0507"
  },
  "username": "palpatine",
  "name": "Emperor Palpatine",
  "roles": [
    "SITH",
    "LORD"
  ],
  "profile_image": "http://api-psum.herokuapp.com/images/profile/palpatine.jpg"
}
```
#### Jar Jar Binks
```json
{
  "_id": {
    "$oid": "5fa58371aca4f7272c0f0508"
  },
  "username": "jarjar",
  "name": "Jar Jar Binks",
  "roles": [
    "GUNGAN",
    "SENATOR"
  ],
  "profile_image": "http://api-psum.herokuapp.com/images/profile/jarjar.jpg"
}
```

#### Count Dooku
```json
{
  "_id": {
    "$oid": "5fa584feaca4f7272c0f0509"
  },
  "username": "dooku",
  "name": "Count Dooku",
  "roles": [
    "SITH",
    "COUNT"
  ],
  "profile_image": "http://api-psum.herokuapp.com/images/profile/dooku.jpg"
}
```

####  Han Solo
```json
{
  "_id": {
    "$oid": "5fa585c9aca4f7272c0f050a"
  },
  "username": "solo",
  "name": "Han Solo",
  "roles": [
    "REBEL",
    "BOUNTY HUNTER"
  ],
  "profile_image": "http://api-psum.herokuapp.com/images/profile/solo.jpg"
}
```

#### Luke Skywalker
```json
{
  "_id": {
    "$oid": "5fa58635aca4f7272c0f050b"
  },
  "username": "skywalker",
  "name": "Luke Skywalker",
  "roles": [
    "REBEL",
    "JEDI"
  ],
  "profile_image": "http://api-psum.herokuapp.com/images/profile/skywalker.jpg"
}
```