# total.js-scoket.io-angular2

## Sample integration socket.io with Total.js and Angular 2

## Installation

1. Install the total.js in project directory
  
  ```
npm install total.js
  ```

2. Install Angular2, socket.io and another modules the dependencies in /client 

  ```
npm install
  ```

4. run build for Angular2 and Auth0 in /client. Bundled files will be copied to /client/dist directory 

  ```
  npm run build
    ```
5. run deploy to copy /client/dist directory to /public in total.js 

  ```
  npm run deploy
    ```

6. Start the server from the root directory of project

  ```
  node server
    ```

6. Visit http://localhost:8000