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
  app.get('/hello/:id', (req, res) => {
    var ID = req.params.id;
    res.status(200).json({ status: 200, message: `Hello, ${ID}` });
});

app.get("/search", (req, res) => {
    var search = req.query.search
    if (search) {
        res.status(200).json({ status: 200, message: "ok", data: search })
    } else {
        res.status(500).json({ status: 500, error: true, message: "you have to provide a search" })
    }
})

 app.listen(3000, () => {
    console.log('Server on port 3000');
  });

