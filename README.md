# hapiwalkthrough
Initial walk through of hapijs (node.js) tutorial.

Using pm2, hapi, good to experiment with a node servicce, running locally and in heroku.

# Required
```
npm install pm2 -g
npm install
```

# Dev Commands
```
// Starting
// We are using an npm script to handle this.
// pm2 start server.js --watch
npm run-script dev

// Production Start
node start

// Working in the dev enviornment we make use of pm2.
pm2 status
pm2 log
```

