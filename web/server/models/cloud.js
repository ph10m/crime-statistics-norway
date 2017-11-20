var db = require("../db.js").getConnection();

let exceptions = ['Østfold', 'Vestfold', 'Akershus', 'Hedmark', 'Oppland', 'Buskerud', 'Telemark',
    'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland', 'Sogn og Fjordane', 'Møre og Romsdal',
    'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland', 'Troms', 'Finnmark', 'I alt', 'Alle fylker',
    'Hele landet', 'Alle kommuner', 'Uoppgitt kommune Østfold', 'Uoppgitt kommune Vestfold',
    'Uoppgitt kommune Akershus', 'Uoppgitt kommune Hedmark', 'Uoppgitt kommune Oppland',
    'Uoppgitt kommune Buskerud', 'Uoppgitt kommune Telemark', 'Uoppgitt kommune Aust-Agder',
    'Uoppgitt kommune Vest-Agder', 'Uoppgitt kommune Rogaland', 'Uoppgitt kommune Hordaland',
    'Uoppgitt kommune Sogn og Fjordane', 'Uoppgitt kommune Møre og Romsdal',
    'Uoppgitt kommune Sør-Trøndelag', 'Uoppgitt kommune Nord-Trøndelag', 'Uoppgitt kommune Nordland',
    'Uoppgitt kommune Troms', 'Uoppgitt kommune Finnmark', 'Uoppgitt fylke'];


exports.cloudData = function (cb) {
    
        let result = new Array();
    
        db.each('SELECT municipacility, all_1000, property_1000, violence_1000, drugs_1000, order_1000, traffic_1000, other_1000 FROM crimestat', function (err, row) {
            if (exceptions.indexOf(row.municipacility) == -1) {
                result.push({ 'text': row.municipacility, 'all': parseFloat(row.all_1000),
                 'property': parseFloat(row.property_1000), 'violence': parseFloat(row.violence_1000), 
                 'drugs': parseFloat(row.drugs_1000), 'order': parseFloat(row.order_1000), 
                 'traffic': parseFloat(row.traffic_1000), 'other': parseFloat(row.other_1000)});
            }
        }, function (err, rows) {
            cb(result);
        });
    }