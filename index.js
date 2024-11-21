import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 3333 || 300000;

// Configure Express middleware
app.use(express.static("public"));

// Define paths to view files
const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "index.ejs");
const aboutPath = join(__dirname, "views/about.ejs");


// Render index page
app.get("/", (req, res) => {
  res.render(indexPath);
});

// Render about page
app.get("/about", (req, res) => {
  res.render(aboutPath);
});

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 10000);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  
});