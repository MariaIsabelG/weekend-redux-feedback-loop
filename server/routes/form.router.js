const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POSTS request
router.post('/', (req, res) => {
    const feedback = req.body;

    const queryText = `
            INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
            VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback[0], feedback[1], feedback[2], feedback[3]])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error posting data', error);
        res.sendStatus(500);
    })
});

module.exports = router;
