import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5001, () => {
  console.log('Server started on port 443');
});