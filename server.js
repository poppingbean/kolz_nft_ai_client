const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8082;

// Serve static HTML
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "services")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Kolz UI running at http://localhost:${PORT}`);
});
