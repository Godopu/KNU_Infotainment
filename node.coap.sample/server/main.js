const coap = require("coap");
const app =require("coap-router")();

function main() {
    const server = coap.createServer(app);
    server.listen(() => {
        console.log("The CoAP server is now running.\n");
    });
}

app.get("/" , (req, res) =>{
    console.log(req.payload.toString("utf8"));
    res.end("Hello Client!!");
});

main();