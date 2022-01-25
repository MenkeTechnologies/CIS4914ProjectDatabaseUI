## CIS4914 University of Florida Spring 2022

Just a Simple React and Material UI App

## To Run Locally

- Install `node` and `npm` with OS package manager

- Clone down this repository.
    - `git clone https://github.com/MenkeTechnologies/CIS4914ProjectDatabaseUI`
    - `cd frontend`

- Install local libraries
    - `npm install`

- Start Server:
    - `npm start`

Browser will open automatically to `localhost:3000`

By default UI points at API running at https://cis4914projectdatabase-api.herokuapp.com/.

Change `API_REMOTE_HOST` from remote API hostname to localhost if running API locally.
> src/Util/util.js

```js
const API_REMOTE_HOST = 'https://cis4914projectdatabase-api.herokuapp.com';
```
