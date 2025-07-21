const express = require('express');
const path = require('path'); // Import the path module

const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 8000;
=======
const port = process.env.PORT||8000;
>>>>>>> 6f682d9397976fc8f3d14becb67752ac97fc1daa

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
<<<<<<< HEAD
  res.write( 'Application is deployed using codepipline and this is the first version.');
=======
  res.write( 'HELLO, how are you. I am fine thank u');
>>>>>>> 6f682d9397976fc8f3d14becb67752ac97fc1daa
  res.end();
});
app.listen(port)

/*app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});*/
