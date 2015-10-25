# hapiwalkthrough
Initial walk through of hapijs (node.js) tutorial.

Using pm2, hapi, good to experiment with a node servicce, running locally and in heroku.

# Required
* If your running on ubuntu 15.04 - I followed http://theholmesoffice.com/node-js-fundamentals-how-to-upgrade-the-node-js-version/
 * Instead of dealing with debian package hijinks http://stackoverflow.com/questions/21168141/can-not-install-packages-using-node-package-manager-in-ubuntu
```
sudo npm install pm2 -g
npm install
```

# Dev Commands
```
// Starting
// We are using an npm script to handle this.
// pm2 start server.js --watch
npm run-script dev

// Production Start
node server

// Working in the dev enviornment we make use of pm2.
pm2 status
pm2 logs
```
