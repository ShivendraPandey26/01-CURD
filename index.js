import express from "express";
import { connectionDB } from "./config/db.js";
import router from "./routes/userRoutes.js"; // Note the default import
import homeRouter from "./routes/homeRoutes.js";

const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectionDB("mongodb://127.0.0.1:27017/userContacts");

// Middleware to use the router
app.use("/", homeRouter);
app.use("/api/users/", router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
