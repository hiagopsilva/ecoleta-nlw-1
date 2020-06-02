import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Listagem de usuários');

  res.json([
    'Hiago',
    'Diego',
    'Robson'
  ]);
});

app.listen(3333);