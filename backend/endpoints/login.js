const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const session = req.body.session;
        console.log(session)
        const connection = require("../config/db").get();
        const result = await connection.execute(
            `SELECT *
            FROM usuario
            WHERE username = '${session.username}' AND password = '${session.password}' AND rol = '${session.rol}'`
        );
        console.log(result.rows);
        if (result.lenght > 0) {
            res.status(200).send(true);
        }
        else {
            res.status(401).send(false);
        }
    } catch (error) {
        console.log("ERROR: ", error);
        res.sendStatus(500);
    }
})

module.exports = router;