const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

// Database Connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/ok', (req, res) => {
    res.status(200).send('ok');
});

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
