const msg = require("../messages/general.messages");

exports.search = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "SELECT * FROM " +
            req.params.tabla +
            " WHERE " +
            req.params.name +
            " = ?",
            [req.params.value],
            (err, result) => {
                console.log(
                    result.length == 0
                        ? "Err SELECT * FROM " +
                        req.params.tabla +
                        " WHERE " +
                        req.params.name +
                        " = " +
                        req.params.value +
                        " " +
                        err
                        : "SELECT * FROM " +
                        req.params.tabla +
                        " WHERE " +
                        req.params.name +
                        " = " +
                        req.params.value +
                        " results: " +
                        result.length
                );
                res.json(
                    result.length == 0
                        ? { err: msg.searchErr }
                        : { rows: result, msg: msg.searchAct }
                );
            }
        );
    });
};

exports.searchAll = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        let {
            tabla,
            nameUno,
            value1,
            value2,
            nameDos,
            value3,
            nameTres,
            value4,
            nameCuatro,
            value5,
        } = req.params;
        conn.query(
            "SELECT * FROM " +
            tabla +
            " WHERE " +
            nameUno +
            " BETWEEN " +
            value1 +
            " AND " +
            value2 +
            " AND " +
            nameDos +
            " IN (" +
            value3 +
            ") AND " +
            nameTres +
            " IN (" +
            value4 +
            ") AND " +
            nameCuatro +
            " IN (" +
            value5 +
            ")",
            (err, result) => {
                console.log(
                    result.length == 0
                        ? "Err SELECT * FROM " +
                        tabla +
                        " WHERE " +
                        nameUno +
                        " BETWEEN " +
                        value1 +
                        " AND " +
                        value2 +
                        " AND " +
                        nameDos +
                        " IN (" +
                        value3 +
                        ") AND " +
                        nameTres +
                        " IN (" +
                        value4 +
                        ") AND " +
                        nameCuatro +
                        " IN (" +
                        value5 +
                        ")" +
                        " " +
                        err
                        : "SELECT * FROM " +
                        tabla +
                        " WHERE " +
                        nameUno +
                        " BETWEEN " +
                        value1 +
                        " AND " +
                        value2 +
                        " AND " +
                        nameDos +
                        " IN (" +
                        value3 +
                        ") AND " +
                        nameTres +
                        " IN (" +
                        value4 +
                        ") AND " +
                        nameCuatro +
                        " IN (" +
                        value5 +
                        ")" +
                        " results " +
                        result.length
                );
                res.json(
                    result.length == 0
                        ? { err: msg.searchErr }
                        : { msg: msg.searchAct, rows: result }
                );
            }
        );
    });
};

// Consult by unique column value
exports.uniqueColumn = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "SELECT " +
            req.params.column +
            " FROM " +
            req.params.tabla +
            " WHERE " +
            req.params.name +
            " = ?",
            [req.params.value],
            (err, result) => {
                console.log(
                    result.length == 0
                        ? "Err SELECT " +
                        req.params.column +
                        " FROM " +
                        req.params.tabla +
                        " WHERE " +
                        req.params.name +
                        " = " +
                        req.params.value +
                        " " +
                        err
                        : "SELECT " +
                        req.params.column +
                        " FROM " +
                        req.params.tabla +
                        " WHERE " +
                        req.params.name +
                        " = " +
                        req.params.value +
                        " results: " +
                        result.length
                );
                res.json(
                    result.length == 0
                        ? { err: msg.searchErr }
                        : { rows: result, msg: msg.inicioSesionAct }
                );
            }
        );
    });
};

exports.createGeneral = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "INSERT INTO " + req.params.tabla + " set ?",
            [req.body],
            (err, rows) => {
                console.log(
                    err
                        ? "Err INSERT INTO " + req.params.tabla + " " + err
                        : req.params.tabla + " Added!"
                );
                res.json(err ? { err: msg.createErr } : { msg: msg.createAct });
            }
        );
    });
};

exports.create = (req, res) => {
    const gen_user = req.body.gen_user;
    const gen_pas = req.body.gen_pas;

    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "SELECT gen_user, gen_pas FROM gen_user WHERE gen_user = ? AND gen_pas = ?",
            [gen_user, gen_pas],
            (err, result) => {
                if (result.length > 0) {
                    console.log("Err SELECT gen_user, gen_pas FROM gen_user " + err);
                    res.json({ err: msg.createErr });
                } else {
                    conn.query(
                        "INSERT INTO " + req.params.tabla + " set ?",
                        [req.body],
                        (err, result) => {
                            console.log(result);
                            console.log(
                                err
                                    ? "Err INSERT INTO " + req.params.tabla + " " + err
                                    : req.params.tabla + " Added!"
                            );
                            res.json(err ? { err: msg.createErr2 } : { msg: msg.createAct });
                        }
                    );
                }
            }
        );
    });
};

exports.update = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "UPDATE " + req.params.tabla + " set ? WHERE " + req.params.name + " = ?",
            [req.body, req.params.value],
            (err, result) => {
                console.log(
                    err
                        ? "Err UPDATE " +
                        req.params.tabla +
                        " set ? WHERE " +
                        req.params.name +
                        " = " +
                        err
                        : req.params.tabla + " Update!"
                );
                res.json(err ? { err: msg.updateErr } : { msg: msg.updateAct });
            }
        );
    });
};

exports.delete = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query(
            "DELETE FROM " + req.params.tabla + " WHERE " + req.params.name + " = ?",
            [req.params.value],
            (err, result) => {
                console.log(
                    err
                        ? "Err DELETE FROM " +
                        req.params.tabla +
                        " WHERE " +
                        req.params.name +
                        " = " +
                        req.params.value +
                        " " +
                        err
                        : req.params.tabla + " Remove successfull!"
                );
                res.json(err ? { err: msg.deleteErr } : { msg: msg.deleteAct });
            }
        );
    });
};
