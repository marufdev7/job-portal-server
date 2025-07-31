const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//middle ware
app.use(cors());
app.use(express());

app.get('/', (req, res) => {
    res.send('Job portal is running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})