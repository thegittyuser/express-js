// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/about", (req, res) => {
  // res.send(req.ip);
  // res.send(req.ips);
  // res.send(req.url);
  // res.send(req.originalUrl);
  // res.send(req.path);
  // res.send(req.method);
  // res.send(req.hostname);
  // res.send(req.method);
  // res.send(req.protocol);
  res.send(req.secure);
});

app.post("/users", (req, res) => {
  res.send(req.body);
});
