const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

// Register routes
app.use("/", routes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
