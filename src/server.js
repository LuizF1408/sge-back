const express = require('express');
const app = express();
require ('./db/dbConnect');
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server on')
})
