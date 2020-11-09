## Users

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
