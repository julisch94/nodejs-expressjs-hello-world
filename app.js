const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>
  res.send(
    `Hello World!\nEnvironment variable 'MY_VARIABLE' is: ${process.env.MY_VARIABLE}`
  )
);

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
