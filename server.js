import express from 'express';
// criação do servidor 
const posts = [
  {
    id: 1,
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    description: "Aquele olhar de quem quer carinho 🐾.",
  },
  {
    id: 2,
    image: "https://cdn2.thecatapi.com/images/b1d.jpg",
    description: "Hora do cochilo 😴✨.",
  },
  {
    id: 3,
    image: "https://cdn2.thecatapi.com/images/7p.jpg",
    description: "Explorando o jardim 🪴🌸.",
  },
  {
    id: 4,
    image: "https://cdn2.thecatapi.com/images/d2.jpg",
    description: "Pronto para a próxima aventura! 🐱🌍.",
  },
  {
    id: 5,
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyMA.jpg",
    description: "Aquele momento de reflexão… ou fome? 🐾🍴.",
  },
  {
    id: 6,
    image: "https://cdn2.thecatapi.com/images/d4.jpg",
    description: "Modo preguiça ativado 😻.",
  },
];


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando");
});
// criação da rota
app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

function BuscaPostPorId(id) {
  return posts.findIndex( (post) => {
    return post.id === Number(id)
  })
}
app.get('/posts/:id', (req, res) => {
  const index = BuscaPostPorId(req.params.id)

  res.status(200).json(posts[index]);
});