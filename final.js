/**
 * Created by Artem on 18.05.2016.
 */
var data = '[{"start": "2016-9-8", "maturity": "2016-9-28", "rate": 15.0, "sum": 1000.0},';
data += '{"start": "2015-9-8", "maturity": "2015-9-28", "rate": 15.0, "sum": 1000.0},';
data += '{"start": "2016-1-12", "maturity": "2016-6-8", "rate": 18.0, "sum": 44000.0},';
data += '{"start": "2015-4-22", "maturity": "2016-2-14", "rate": 31.0, "sum": 500.0},';
data += '{"start": "2015-9-8", "maturity": "2015-10-8", "rate": 15.0, "sum": 1000.0},';
data += '{"start": "2015-9-8", "maturity": "2016-9-8", "rate": 15.0, "sum": 1000.0},';
data += '{"start": "2012-4-11", "maturity": "2013-4-11", "rate": 10.0, "sum": 125000.0},';
data += '{"start": "2015-6-10", "maturity": "2016-6-11", "rate": 9.5, "sum": 4000.0},';
data += '{"start": "2014-9-8", "maturity": "2015-9-8", "rate": 15.0, "sum": 1000.0},';
data += '{"start": "2015-2-18", "maturity": "2015-9-18", "rate": 11.0, "sum": 21000.0}]';


var dd = JSON.parse(data, function(key, value){
    if (key === 'start' || key === 'maturity') return new Date(value);
    return value;
});


var getIntersest = function(depo){
    var days= Math.round((+depo.maturity - depo.start) / 86400000);
    return (+(depo.sum *(depo.rate / 100.0)* (days/365)).toFixed(2));
}

var getDays = function (ddd) {
    var days = Math.round((+ddd.maturity - ddd.start) / 	86400000);
    return days;

}


