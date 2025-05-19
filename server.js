const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8082;

// Serve static HTML
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "services")));
app.use(express.static(path.join(__dirname, "styles")));

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "views/info.html"));
});

app.get("/manage", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contributionManage.html"));
});

app.get("/contribute", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contribute.html"));
});

app.get("/create", (req, res) => {
  res.sendFile(path.join(__dirname, "views/create.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "views/chat.html"));
});

app.get("/train", (req, res) => {
  res.sendFile(path.join(__dirname, "views/train.html"));
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Kolz UI running at http://localhost:${PORT}`);
});
