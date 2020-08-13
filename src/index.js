const express = require('express');
const app = express();

// Settings
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/pruducts'));

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});