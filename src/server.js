import express from 'express';
// criação do servidor 
const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando");
});
// criação da rota
app.get('/api', (req, res) => {
  res.status(200).send('Resposta do servidor enviada');
});