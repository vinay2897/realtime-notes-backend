const express = require("express")
const http = require("http");
const ws = require("ws");
const app = express();
// const db = require("./db");
// const cookieParser = require("cookie-parser");

const server = http.createServer(app);
const wss = new ws.Server({ server, clientTracking: true });

const redis = require('redis')

const client = redis.createClient()

client.on('error', (err) => {
    console.log("Error " + err)
});

wss.on('connection', function connection(ws, req) {
    console.log(wss.clients.size)
    let arr = req.headers.cookie.split(" ");
    let rid = -1;
    for (let i = 0; i < arr.length; ++i) {
        // console.log(arr[i][0])
        if(arr[i][0] === "r"){
            rid = arr[i].substring(4);
            break;
        }
    }
    if(rid === -1){
        ws.close()
    }
    setInterval( () => {
        client.get(rid, (err, idk) => {
            if(err){
                ws.send(err)
            }
            if(idk){
                ws.send(idk)
            }
        })
    }, 100)
    
    ws.on('message', function incoming(message) {
        if(rid){
            client.set(rid, message)
            client.get(rid, (err, idk) => {
                if(idk){
                    ws.send(idk)
                }
            })
        }
        else{
            ws.send("error")
        }
    });
});

// const sub = redis.createClient()
// const pub = redis.createClient()

// sub.on('error', (err) => {
//     console.log("Error " + err)
// });

// pub.on('error', (err) => {
//     console.log("Error " + err)
// });

// wss.on('connection', function connection(ws, req) {
//     console.log(wss.clients.size)
//     let arr = req.headers.cookie.split(" ");
//     let rid = -1;
//     for (let i = 0; i < arr.length; ++i) {
//         if(arr[i][0] === "r"){
//             rid = arr[i].substring(4);
//             break;
//         }
//     }
//     if(rid === -1){
//         ws.close()
//     }
//     sub.subscribe(rid);
//     sub.on("message", function (channel, message) {
//         if(channel === rid)
//             ws.send(message)
//     });
    
//     ws.on('message', function incoming(message) {
//         if(rid){
//             pub.publish(rid, message)
//         }
//         else{
//             ws.send("error")
//         }
//     });
// });

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port 3000 :)`);
});