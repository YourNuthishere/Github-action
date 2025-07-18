import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
