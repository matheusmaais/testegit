const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express ();
app.get ('/', (req, res) => {
<<<<<<< HEAD
    res.send('novoBuilddenovoo');
=======
    res.send('novoBuild222');
>>>>>>> deaeccfee1df2b50c4b0bdda0c4584b299bf2868
});

app.listen(PORT, HOST);
