//express
const express = require('express')
const app = express()
const router = express.Router()
const path = require('path');

// will handle any request that ends in /
// depends on where the router is "use()'d"
router.get('/', (req, res) => {
    res.send('hello world')
})

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));
app.use('/js', express.static(path.join(__dirname, 'js')));
router.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.use(router)
app.listen(PORT,3000)