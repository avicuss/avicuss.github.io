const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Table of allowed Game IDs
const allowedGameIds = [123456789, 987654321, 111222333]; // Replace with your actual game IDs

// Handle POST requests
app.post("/check-game", (req, res) => {
    const gameId = req.body.gameId;

    if (!gameId) {
        return res.status(400).send("Missing gameId in request body");
    }

    if (allowedGameIds.includes(gameId)) {
        res.set("Content-Type", "text/plain");
        return res.send(`print("hello")`);
    } else {
        return res.status(403).send("Forbidden");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
