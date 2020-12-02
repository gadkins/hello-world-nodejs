const express = require('express');
const appRouter = express.Router();

appRouter.get('/*', function (req, res) {
  res.send(`<h1>BradCerasuolo.com \n
  A site dedicated to how lame Brad is. </h1>
  `);
});

module.exports = appRouter;
