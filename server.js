const express = require('express');
const path = require('path'); // Import the path module

const app = express();
const port = process.env.PORT||8000;

// Define the directory where your static HTML files are located
const publicPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
//app.use(express.static(publicPath));

// Route to serve a specific HTML file
app.get('/bhavini', (req, res) => {
  app.use(express.static(publicPath));
  res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/', (req, res) => {
  res.write( 'HELLO, how are you. I am fine thank you');
  res.end();
});
app.listen(port)

/*app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});*/
