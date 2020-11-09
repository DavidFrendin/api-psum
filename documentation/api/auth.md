# Authentication
Endpoint: [POST] /api/auth/

The auth endpoint creates a [JWT Token](https://jwt.io/). A valid username is required, but any password is successful. A list of users is available in the [models](documentation/models.md) section.

The JWT token can be verified using the secret "```api-psum```".

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