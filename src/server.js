const express = require('express');

const app = express();
app.use(express.json())

require('./db/dbConnect');

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server on')
})
