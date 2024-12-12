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
const servicesPath = join(__dirname, "views/services.ejs");
// Sample data for services (you can retrieve this from a database)
const services = [
  { name: "Commercial Law", description: "Comprehensive support for business litigation, corporate governance, and legal compliance." },
  { name: "Family Law", description: "Handling divorce, custody, and estate matters with professional legal expertise." },
  { name: "Property Law", description: "Ensuring smooth property transactions, including conveyancing services." },
  { name: "Business Restructuring & Insolvency", description: "Strategic advice for companies facing financial difficulties or restructuring needs." }
];


// Render index page
app.get("/", (req, res) => {
  res.render(servicesPath, { services: services });
});

// Render about page
app.get("/contact_us", (req, res) => {
  res.render(indexPath);
});

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 10000);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  
});
