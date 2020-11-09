# Jabber
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