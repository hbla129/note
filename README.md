# note
Test project for trying out technologies. This has the functionality of creating and editing notes. This is powered by the ME~~A~~N stack (MongoDB, Express.js, ~~Angular~~, Node.js).

## Set up of the application
1. Donwload/install MongoDB (https://www.mongodb.com/download-center/community)
2. Download/install Node.js (https://nodejs.org/en/)
3. Install project depedencies - in the root of this project run the command `npm install`

## Run application
1. Run MongoDB daemon to start MongoDB - This will depend on if you've installed it as a service or not. [See the MongoDB documentation](https://docs.mongodb.com/manual/administration/install-community/)
2. Run this application - in root directory of project run the command `node app.js`
3. Once started in a browser view a endpoint:
* http://localhost:8888/send-example?data=test
* http://localhost:8888/note