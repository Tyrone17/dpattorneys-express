import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
const app = express();
const PORT = 3333 || 300000;

// Configure Express middleware
app.use(express.static("public"));
app.use(
    helmet({
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                defaultSrc: ["'self'"],
                imgSrc: ["'self'", "data:"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
            },
        },
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define paths to view files
const __dirname = dirname(fileURLToPath(import.meta.url));
//const indexPath = join(__dirname, "index.ejs");
const indexPath = join(__dirname, "views/services.ejs");
const termsPage = join(__dirname, "views/terms.ejs");
const privacyPage = join(__dirname, "views/privacy.ejs");
const form = join(__dirname, "views/form.ejs");
// Sample data for services (you can retrieve this from a database)
const services = [
  { name: "Commercial Law", description: "Comprehensive support for business litigation, corporate governance, and legal compliance." },
  { name: "Family Law", description: "Handling divorce, custody, and estate matters with professional legal expertise." },
  { name: "Property Law", description: "Ensuring smooth property transactions, including conveyancing services." },
  { name: "Business Restructuring & Insolvency", description: "Strategic advice for companies facing financial difficulties or restructuring needs." }
];


// Render index page
app.get("/", (req, res) => {
  res.render(indexPath, { services: services });
});

// Render contact page
app.get("/contact_us", (req, res) => {
  res.render(indexPath,  { services: services });
});

// Render terms page
app.get("/terms", (req, res) => {
  res.render(termsPage);
});

// Render privacy page
app.get("/privacy", (req, res) => {
  res.render(privacyPage);
});

// TODO: techservit_about.json in public folder not loading 
//  Done: explicitly set the Content-Type header
app.get('/data.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/pubic/data.json');
});

// Route for the form
app.get('/form', (req, res) => {
    const reason = req.query.reason || ""; // Get the reason from the query string
    res.render(form, { reason });       // Pass the reason to the EJS template
});

// Handle form submission
app.post('/form-submitted', (req, res) => {
    console.log(req.body);
    const { name, email, request,whatsapp } = req.body;
    const { reason } = req.body; // Destructure 'reason' from req.body
    // Process the form data (e.g., save to a database or send an email)
    //console.log(`Reason: ${reason}, Name: ${name}, Email: ${email}`);

    // Respond to the user
    res.send(`Form submitted successfully!<br>Reason: ${reason}<br>Name: ${name}<br>Email: ${email}`);
});

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 10000);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  
});
