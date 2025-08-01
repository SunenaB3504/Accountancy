const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = 3000;

// Set up livereload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);

app.use(connectLivereload());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Optionally, serve livereload.js if needed
app.use('/livereload.js', express.static(path.join(__dirname, 'node_modules', 'livereload-js', 'dist', 'livereload.js')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
