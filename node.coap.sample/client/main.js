const coap = require("coap");

function main()
{
    let req = coap.request("coap://localhost");

    req.on("response", function(res){
        console.log(res.payload.toString("utf8"));

        res.on("end", function(){
            console.log("END!!");
            process.exit(0);
        });
    });

    req.end("Hello Server!!");
}

main();