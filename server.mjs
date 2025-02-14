import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    req.send('/')
  res.send('Hello World!' + new Date().getDate().toString());
});

// 192.168.228.64:3000

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
