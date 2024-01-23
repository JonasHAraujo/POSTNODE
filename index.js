const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo da requisição
app.use(bodyParser.json());

// Array para armazenar as tarefas
const tasks = [];

app.get('/', (req,res) => {
    
    if (tasks.length == 0 ){
        return res.status(400).json({error: 'Nenhuma tarefa encontrada'})
    }
    res.json(tasks)
})

// Rota POST para adicionar novas tarefas

app.post('/tasks', (req, res) => {
  const newTask = req.body;

  if (!newTask || !newTask.description) {
    return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
  }
  

  tasks.push(newTask);
  res.status(201).json({ Mensagem: 'Tarefa adicionada com sucesso.', Tarefa: newTask });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
