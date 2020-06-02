import express from 'express';

const app = express();

app.use(express.json())

const users = [
  'Hiago',
  'Diego',
  'Robson'
]

app.get('/users', (req, res) => {
  const search = String(req.query.search);

  const filteredSearch = search ? users.filter(user => user.includes(search)) : users;

  return res.json(filteredSearch);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = users[id]; 

  return res.json(user);
})

app.post('/users', (req, res) => {
  const data = req.body;
  
  const user = {
    name: data.name,
    email: data.email,
  };

  return res.json(user);
})

app.listen(3333);