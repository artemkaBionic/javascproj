/**
 * Created by Artem on 19.05.2016.
 */
var sums = function (kk, ss) {
    if (kk.sum>ss.sum) return 1;
    if (kk.sum<ss.sum) return -1;


}
var sortSum = function () {
    dd.sort(sums);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };

    
    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }

}
var sortD = function () {

    dd.sort(sortbyDays)

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };


    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }
}



var sortbyDays = function (kk, ss) {

    if (getDays(kk)>getDays(ss)) return 1;
    if (getDays(kk)<getDays(ss)) return -1;


}


var sortRate = function (ll, mm) {
    if(ll.rate>mm.rate) return 1;
    if(ll.rate>mm.rate) return -1;

}

var sortR = function () {
    dd.sort(sortRate);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };


    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }

}





var startDateSort = function (ll, ss) {
    if(+ll.start>ss.start) return 1;
    if(+ll.start<ss.start) return -1;


}
var sortSt = function () {
    dd.sort(startDateSort);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };




    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }

}

var matur = function (ll, ss) {
    if(+ll.maturity>ss.maturity) return 1;
    if(+ll.maturity<ss.maturity) return -1;


}
var sortMt = function () {
    dd.sort(matur);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };




    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }

}





var sortInterest = function (kk, ss) {

    if(getIntersest(kk)>getIntersest(ss)) return 1;
    if(getIntersest(kk)<getIntersest(ss)) return -1;
}
var sortI = function () {
    dd.sort(sortInterest);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };

    var doc = document.querySelectorAll("#keks tr");
    console.log(doc.length);
    doc[0].innerHTML = "<tr><th>Start Date</th><th>Maturity Date</th><th>rate</th><th>Sum</th><th>Days</th><th>Interest Rate</th></tr>";
    for (var i = 1; i < doc.length; i++) {
        // var tr = document.createElement("tr");
        doc[i].innerHTML = "<td>" + dd[i-1].start.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].maturity.toLocaleString("en-US", options) + "</td>" + "<td>" + dd[i-1].rate + "</td>" + "<td>" + dd[i-1].sum + "</td>" + "<td>" + getDays(dd[i-1]) + "</td>" + "<td>" + getIntersest(dd[i-1]) + "</td>";



    }
}





