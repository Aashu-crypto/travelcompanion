import express, { Application } from 'express';


// Load environment variables

const app: Application = express();
const port = process.env.PORT || 3000;

// Basic middleware 
app.use(express.json()); // For parsing JSON request bodies

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from your Express TypeScript boilerplate!');
});

// Start the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
