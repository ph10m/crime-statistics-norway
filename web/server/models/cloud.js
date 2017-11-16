var db = require("../db.js").getConnection();

exports.test = function(cb) {
        let result = ["hello world",10,'https://dagbladet.no']
        cb(result)
    }

exports.test2 = function(cb) {
        db.get('SELECT * FROM crimestat', function(err, row){
            console.log(row);
            cb(row)
        });
    }

    exports.all_1000 = function(cb) {
        db.all('SELECT municipacility AS text, all_1000 AS weight FROM crimestat', function(err, row){
            //console.log(row);
            cb(row)
            //WHERE municipacility NOT LIKE "i alt" AND municipacility NOT LIKE "Alle fylker" AND municipacility NOT LIKE "Hele landet" AND municipacility NOT LIKE "Alle kommuner" 
        });
    }

    exports.test3 = function(cb) {

        let result = new Array();
        let exceptions = ['Østfold', 'Vestfold','Akershus', 'Hedmark', 'Oppland', 'Buskerud', 'Telemark',
        'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland', 'Sogn og Fjordane', 'Møre og Romsdal',
        'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland', 'Troms', 'Finnmark', 'I alt', 'Alle fylker',
        'Hele landet', 'Alle kommuner', 'Uoppgitt kommune Østfold', 'Uoppgitt kommune Vestfold',
        'Uoppgitt kommune Akershus','Uoppgitt kommune Hedmark', 'Uoppgitt kommune Oppland', 
        'Uoppgitt kommune Buskerud', 'Uoppgitt kommune Telemark','Uoppgitt kommune Aust-Agder',
        'Uoppgitt kommune Vest-Agder', 'Uoppgitt kommune Rogaland', 'Uoppgitt kommune Hordaland',
        'Uoppgitt kommune Sogn og Fjordane', 'Uoppgitt kommune Møre og Romsdal',
        'Uoppgitt kommune Sør-Trøndelag', 'Uoppgitt kommune Nord-Trøndelag', 'Uoppgitt kommune Nordland',
        'Uoppgitt kommune Troms', 'Uoppgitt kommune Finnmark', 'Uoppgitt fylke'];

        db.each('SELECT municipacility, all_1000 FROM crimestat', function(err, row){
            if(exceptions.indexOf(row.municipacility) == -1){
                result.push({'text': row.municipacility ,'weight': parseFloat(row.all_1000)});
            }
           },function (err, rows) {
            cb(result);
        });
    }