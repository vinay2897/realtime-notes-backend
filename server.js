const express = require("express");
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./db");


app.use(cors({ origin: ["http://localhost:4200", "http://localhost", "http://192.168.31.189"], credentials: true }));
app.use(express.json())
app.use(cookieParser())

app.post("/api/signup", (req, res) => {
    console.log(req.cookies)
    if (!req.cookies.uid) {
        db.any('SELECT EXISTS( SELECT * FROM users WHERE email = $1);', [req.body.email])
            .then((data) => {
                if (data[0].exists === false) {
                    db.one('INSERT INTO users(email, password) VALUES($1, $2) RETURNING uid;', [req.body.email, req.body.password])
                        .then((data) => {
                            res.status(200).json({
                                msg: "Successfully Registered"
                            })
                        })
                        .catch(error => {
                            console.log(error)
                            res.status(500).json({
                                error
                            })
                        });
                }
                else {
                    res.status(500).json({
                        error: "Account exists",
                        code: 2
                    })
                }
            })
            .catch((error) => {
                // error;
                console.log(error)
                res.status(500).json({
                    error
                })
            });
    }
    else {
        res.json({
            code: 0,
            error: "Already Logged in"
        })
    }
})


app.post("/api/login", (req, res) => {
    // console.log(req.cookies)
    if (!req.cookies.uid) {
        db.any(' SELECT * FROM users WHERE email = $1 AND password=$2;', [req.body.email, req.body.password])
            .then((data) => {
                if (data.length === 1) {
                    res.cookie("uid", data[0].uid, { maxAge: 3600000, expires: new Date(Date.now() + 3600000), sameSite: false, domain: "192.168.31.160" });
                    res.status(200).json({
                        msg: "Successfully Logged in"
                    })
                }
                else {
                    res.status(500).json({
                        error: "Incorrect Details",
                        code: 2
                    })
                }
            })
            .catch((error) => {
                // error;
                console.log(error)
                res.status(500).json({
                    error
                })
            });
    }
    else {
        res.json({
            code: 0,
            error: "Already Logged in"
        })
    }
})

app.post("/api/create-note", checkAuthorization, (req, res) => {
    db.one('INSERT INTO resources(content) VALUES($1) RETURNING rid;', [''])
        .then((data1) => {
            db.one('INSERT INTO user_resource(uid, rid) VALUES($1, $2) RETURNING urid;', [req.cookies.uid, data1.rid])
                .then((data2) => {

                    res.status(200).json({
                        msg: "Created Note",
                        rid: data1.rid
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        error
                    })
                });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error
            })
        });
})

app.post("/api/access-notes", checkAuthorization, (req, res) => {
    db.any('SELECT EXISTS (SELECT * FROM user_resource WHERE uid=$1 AND rid=$2);', [req.cookies.uid, req.body.rid])
        .then((data) => {
            if (data[0].exists === false) {
                res.status(500).json({
                    error: "No Access"
                })
            }
            else {
                res.cookie("rid", req.body.rid, { maxAge: 3600000, expires: new Date(Date.now() + 3600000), sameSite: false, domain: "192.168.31.160" });
                res.status(200).json({
                    msg: "Granted Access",
                    rid: req.body.rid
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error
            })
        });
})

app.post("/api/share-note", checkAuthorization, (req, res) => {
    db.one('SELECT uid FROM users WHERE email=$1', [req.body.shareWith])
        .then((data1) => {
            console.log(data1)
            db.one('INSERT INTO user_resource(uid, rid) VALUES($1, $2) RETURNING urid;', [data1.uid, req.cookies.rid])
                .then((data2) => {
                    res.status(200).json({
                        msg: "Shared Note",
                        rid: data1.rid
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        error
                    })
                });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error
            })
        });
})

app.post("/api/all-notes", checkAuthorization, (req, res) => {
    db.any('SELECT rid FROM user_resource WHERE uid=$1', [req.cookies.uid])
        .then((data1) => {
            res.status(200).json({
                my_notes: data1
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error
            })
        });
})

app.post("/api/shared-notes", checkAuthorization, (req, res) => {
    db.one('SELECT uid FROM users WHERE email=$1', [req.body.shareWith])
        .then((data1) => {
            console.log(data1)
            db.one('INSERT INTO user_resource(uid, rid) VALUES($1, $2) RETURNING urid;', [data1.uid, req.cookies.rid])
                .then((data2) => {
                    res.status(200).json({
                        msg: "Shared Note",
                        rid: data1.rid
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        error
                    })
                });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error
            })
        });
})

app.post("/api/logout", (req, res) => {
    res.cookie("uid", "", { maxAge: 0, expires: new Date(Date.now()), domain: "192.168.31.160" });
    res.cookie("rid", "", { maxAge: 0, expires: new Date(Date.now()), domain: "192.168.31.160" });
    res.end();
})

app.use(express.static(__dirname + "/dist"))
app.use('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

function checkAuthorization(req, res, next) {
    if (req.cookies.uid) {
        db.any('SELECT EXISTS( SELECT * FROM users WHERE uid = $1);', [req.cookies.uid])
            .then((data) => {
                if (data[0].exists === false) {
                    res.status(500).json({
                        code: 0,
                        error: "error"
                    })
                }
                else {
                    next()
                }
            })
            .catch((error) => {
                // error;
                console.log(error)
                res.status(500).json({
                    error
                })
            });
    }
}

app.listen(3001, () => {
    console.log("Listening")
})
