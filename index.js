var  express = require('express');
var app = express();

app.get('/',  (req, res) => {
    res.send('OK');
  });

 app.listen(3000, () => {
    console.log('Server on port 3000');
  });

