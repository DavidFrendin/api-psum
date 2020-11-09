# Images


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