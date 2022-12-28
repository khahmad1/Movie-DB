var  express = require('express');
var app = express();

app.get('/',  (req, res) => {
    res.send('OK');
  });

  app.get('/test',(req, res) => {
    res.json({ status:200, message:"ok" })
  });
  app.get('/time',(req, res) => {
    var  currenttime = new Date();
    var hours = curretntime.getHours();
    var minutes = curretnime.getMinutes();
    res.json({status: 200, message: `${hours}:${minutes}` })
  });

 app.listen(3000, () => {
    console.log('Server on port 3000');
  });

