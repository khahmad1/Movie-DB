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
var movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
app.get('/movies/create', (req, res) => {

});

app.get('/movies/read', (req, res) => {
  res.json({status: 200, data: movies});
});

app.get('/movies/update', (req, res) => {
  
});

app.get('/movies/delete', (req, res) => {
  
});

app.get('/movies/read/by-date', (req, res) => {
  var ByDate = movies.sort((x, y) => x.date - y.date);
  res.json({ status: 200, data:ByDate });
});

app.get('/movies/read/by-rating', (req, res) => {
  var ByRating = movies.sort((x, y) => y.rating - x.rating);
  res.json({ status: 200, data:ByRating });
});

app.get('/movies/read/by-title', (req, res) => {
  var ByTitle = movies.sort((x, y) => {
    if (x.title < y.title) return -1;
    if (x.title > y.title) return 1;
    return 0;
  });
  res.json({ status: 200, data: ByTitle });
});
app.get('/movies/get/id/:id', (req, res) => {
  var id = parseInt(req.params.id);
  var movie = movies[id - 1];
  if (movie) {
      res.status(200).json({ status: 200, data: movie })
  } else {
      res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` })
  }
});
app.get('/movies/add', (req, res) => {
  var title = req.query.title;
  var year = req.query.year;
  var rating = req.query.rating;

  if (!title || !year || year.length !== 4 || isNaN(year)) {
    res.status(403).json({status: 403, error: true, message: 'you cannot create a movie without providing a title and a year'});
  } else {
    if (!rating) {
      rating = 4;
    }
    var newMovie = {title, year, rating};
    movies.push(newMovie);
    res.json({status: 200, data: movies});
  }
});
app.get("/movies/delete/:id", (req, res) => {
  var id = parseInt(req.params.id)
  if (id > movies.length) {
      res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` })
  } else {
      movies.splice(id, 1)
      res.status(200).json({ status: 200, data: movies })
  }
})

 app.listen(3000, () => {
    console.log('Server on port 3000');
  });

