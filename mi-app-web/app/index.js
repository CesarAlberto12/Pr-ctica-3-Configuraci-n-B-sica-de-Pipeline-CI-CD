const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

if (require.main === module) {
  app.listen(port, () => console.log(`Servidor en puerto ${port}`));
}

module.exports = app;
