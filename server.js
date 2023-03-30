import  express  from "express"

var HTTP_PORT = process.env.PORT || 8080;
var app = express();

 // setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
res.send(`App is listining on port ${HTTP_PORT}`);
});

// setup http server to listen on HTTP_POR
app.listen(HTTP_PORT);