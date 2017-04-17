# fish-shop-tank

## usage

- requires .env with API url
- npm install
- npm start

## approach

- Brief designing first, created the structure of the application, integrated state and then made the AJAX calls to connect to the backend.

## improvements

The list is in rough order of what I would implement in order of importance:

- Better error handling. When getting 400 response with unknown fish types this could be pushed into state so that the same fish can't be added again as well as surfacing the exact error message better. For 500 server responses a helper function could be made to re-try the same request a few times, although ideally a focus would be on preventing the server producing 500 server errors on the backend.
- Testing with Enzyme to test the React components.
- Improve styling by integrating SASS to start using a common variables file and also making the site more visual!
