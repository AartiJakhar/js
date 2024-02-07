const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));
app.use('/js', express.static(path.join(__dirname, 'js')));

router.get('/docs', async (req, res) => {
    try {
        // Read the index.html file asynchronously
        const htmlContent = await fs.promises.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8');
        // Send the HTML content in the response
        res.send(htmlContent);
    } catch (error) {
        // Handle errors
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Register router middleware
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
