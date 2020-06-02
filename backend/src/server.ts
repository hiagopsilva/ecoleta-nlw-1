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

app.post('/users', (req, res) => {
  const user = {
    name: 'Hiago',
    email: 'hiago@gmail.com'
  };

  return res.json(user);
})

app.listen(3333);