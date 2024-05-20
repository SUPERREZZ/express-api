const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5600;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
