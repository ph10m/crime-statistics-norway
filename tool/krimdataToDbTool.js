var csv = require("fast-csv");
var fs = require("fs");
var utf8 = require("utf8");
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("db.db");



var county = ["østfold", "akershus", "oslo kommune", "hedmark", "oppland", "buskerud", "vestfold", "telemark", "aust-agder", "vest-agder", "rogaland", "hordaland", "sogn og fjordane", "møre og romsdal", "sør-trøndelag", "nord-trøndelag", "nordland", "troms", "finnmark"];

let csvstream = csv.fromPath("krimdata.csv", { headers: true , delimiter: ";"})
.on("data", function (row) {
    csvstream.pause();


    db.run("INSERT INTO Crimestat (municipacility,all_1000, all_abs, property_1000, property_abs, violence_1000, violence_abs, drugs_1000, drugs_abs, order_1000, order_abs, traffic_1000, traffic_abs, other_1000, other_abs) VALUES ('" + row.place + "', '" + row.all + "', '" + row.allAbs + "', '" + row.property + "', '" + row.propertyAbs + "', '" + row.violence + "', '" + row.violenceAbs + "', '" + row.drugs + "', '" + row.drugsAbs + "', '" + row.order + "', '" + row.orderAbs + "', '" + row.traffic + "', '" + row.trafficAbs + "', '" + row.other + "', '" + row.otherAbs + "')");

    if (county.indexOf(row.place.toLowerCase()) > -1) {
        console.log("eg fant " + row.place)
    }



    // when done resume the stream
    csvstream.resume();
})
.on("end", function () {

    var queries = [
        "UPDATE Crimestat SET all_1000='0' WHERE all_1000='..'",
        "UPDATE Crimestat SET all_abs='0' WHERE all_abs='..'",
        "UPDATE Crimestat SET property_1000='0' WHERE property_1000='..'",
        "UPDATE Crimestat SET property_abs='0' WHERE property_abs='..'",
        "UPDATE Crimestat SET violence_1000='0' WHERE violence_1000='..'",
        "UPDATE Crimestat SET violence_abs='0' WHERE violence_abs='..'",
        "UPDATE Crimestat SET drugs_1000='0' WHERE drugs_1000='..'",
        "UPDATE Crimestat SET drugs_abs='0' WHERE drugs_abs='..'",
        "UPDATE Crimestat SET order_1000='0' WHERE order_1000='..'",
        "UPDATE Crimestat SET order_abs='0' WHERE order_abs='..'",
        "UPDATE Crimestat SET traffic_1000='0' WHERE traffic_1000='..'",
        "UPDATE Crimestat SET traffic_abs='0' WHERE traffic_abs='..'",
        "UPDATE Crimestat SET other_1000='0' WHERE other_1000='..'",
        "UPDATE Crimestat SET other_abs='0' WHERE other_abs='..'",
        
        "UPDATE Crimestat SET all_1000='0' WHERE all_1000='.'",
        "UPDATE Crimestat SET all_abs='0' WHERE all_abs='.'",
        "UPDATE Crimestat SET property_1000='0' WHERE property_1000='.'",
        "UPDATE Crimestat SET property_abs='0' WHERE property_abs='.'",
        "UPDATE Crimestat SET violence_1000='0' WHERE violence_1000='.'",
        "UPDATE Crimestat SET violence_abs='0' WHERE violence_abs='.'",
        "UPDATE Crimestat SET drugs_1000='0' WHERE drugs_1000='.'",
        "UPDATE Crimestat SET drugs_abs='0' WHERE drugs_abs='.'",
        "UPDATE Crimestat SET order_1000='0' WHERE order_1000='.'",
        "UPDATE Crimestat SET order_abs='0' WHERE order_abs='.'",
        "UPDATE Crimestat SET traffic_1000='0' WHERE traffic_1000='.'",
        "UPDATE Crimestat SET traffic_abs='0' WHERE traffic_abs='.'",
        "UPDATE Crimestat SET other_1000='0' WHERE other_1000='.'",
        "UPDATE Crimestat SET other_abs='0' WHERE other_abs='.'"

    ];
    (function next() {
        if (queries.length) {
          db.run(queries.shift(), next);
        }
      }());

    console.log("We are done!")
})
.on("error", function (error) {
    console.log(error)
});


