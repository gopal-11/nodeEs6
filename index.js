// backend/index.js
import express from 'express';
import bodyParserPackage from 'body-parser';
import cors from 'cors';
import router from './routes/api';

// const { json } = bodyParserPackage;
const port = 3001;

const app = express();

// Middleware
app.use(bodyParserPackage.json());
app.use(cors());

// Routes
app.use('/api', router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
