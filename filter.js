/**
 * Created by Artem on 19.05.2016.
 */


function checkSum(ss) {
    var doty = document.getElementById("sta").value;
    return ss.sum > doty;
}

function myFunction() {
    var rr = dd.filter(checkSum);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].sum;
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[3].innerHTML)) {
                tab.rows[j].cells[3].style.backgroundColor = "green";
            }

        }
    }


}
function checkSums(ss) {
    var doty = document.getElementById("staT").value;
    return ss.sum < doty;
}

function myFunctionLess() {
    var rr = dd.filter(checkSums);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].sum;
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[3].innerHTML)) {
                tab.rows[j].cells[3].style.backgroundColor = "red";
            }

        }
    }


}


function checkDaysGreater(ss) {
    var doty = document.getElementById("daysFilter").value;
    return getDays(ss) > doty;
}

function daysGreater() {
    var rr = dd.filter(checkDaysGreater);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = getDays(rr[i]);
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[4].innerHTML)) {
                tab.rows[j].cells[4].style.backgroundColor = "yellow";
            }

        }
    }


}

function checkDaysLess(ss) {
    var doty = document.getElementById("daysFilterL").value;
    return getDays(ss) < doty;
}

function daysLess() {
    var rr = dd.filter(checkDaysLess);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = getDays(rr[i]);
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[4].innerHTML)) {
                tab.rows[j].cells[4].style.backgroundColor = "blue";
            }

        }
    }


}
function checkRateG(ss) {
    var doty = document.getElementById("rateG").value;
    return ss.rate > doty;
}

function rateGr() {
    var rr = dd.filter(checkRateG);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].rate;
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[2].innerHTML)) {
                tab.rows[j].cells[2].style.backgroundColor = "blue";
            }

        }
    }


}

function checkRateL(ss) {
    var doty = document.getElementById("rateL").value;
    return ss.rate < doty;
}

function rateLe() {
    var rr = dd.filter(checkRateL);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].rate;
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[2].innerHTML)) {
                tab.rows[j].cells[2].style.backgroundColor = "blue";
            }

        }
    }


}

function filtDateStartGr(ss) {
    var doty = new Date(document.getElementById("startDateGr").value).getTime();
    return ss.start.getTime() > doty;
}

function dateStartG() {
    var rr = dd.filter(filtDateStartGr);
    var tab = document.getElementById("keks");

    console.log(rr[0].start.getTime());
    var si = (new Date(tab.rows[1].cells[0].innerHTML)).getTime();
    console.log(si == rr[0].start.getTime());
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].start.getTime();
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (new Date(tab.rows[j].cells[0].innerHTML)).getTime()) {
                tab.rows[j].cells[0].style.backgroundColor = "green";
            }

        }
    }


}

function filtDateStartL(ss) {
    var doty = new Date(document.getElementById("startDateLs").value).getTime();
    return ss.start.getTime() < doty;
}

function dateStartL() {
    var rr = dd.filter(filtDateStartL);
    var tab = document.getElementById("keks");

    console.log(rr[0].start.getTime());
    var si = (new Date(tab.rows[1].cells[0].innerHTML)).getTime();
    console.log(si == rr[0].start.getTime());
    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].start.getTime();
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (new Date(tab.rows[j].cells[0].innerHTML)).getTime()) {
                tab.rows[j].cells[0].style.backgroundColor = "green";
            }

        }
    }


}
function filtDateMatG(ss) {
    var doty = new Date(document.getElementById("maturityDateG").value).getTime();
    return ss.maturity.getTime() > doty;
}

function dateMatG() {
    var rr = dd.filter(filtDateMatG);
    var tab = document.getElementById("keks");


    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].maturity.getTime();
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (new Date(tab.rows[j].cells[1].innerHTML)).getTime()) {
                tab.rows[j].cells[1].style.backgroundColor = "yellow";
            }

        }
    }


}

function filtDateMatL(ss) {
    var doty = new Date(document.getElementById("maturityDateL").value).getTime();
    return ss.maturity.getTime() < doty;
}

function dateMatL() {
    var rr = dd.filter(filtDateMatL);
    var tab = document.getElementById("keks");


    for(var i = 0; i <rr.length;i++ ) {
        var compare = rr[i].maturity.getTime();
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (new Date(tab.rows[j].cells[1].innerHTML)).getTime()) {
                tab.rows[j].cells[1].style.backgroundColor = "coral";
            }

        }
    }


}
function filterInterestRateGreater(ss) {
    var doty = document.getElementById("greaterInt").value;
    return getIntersest(ss) > doty;
}

function interestGr() {
    var rr = dd.filter(filterInterestRateGreater);
    var tab = document.getElementById("keks");
    for(var i = 0; i <rr.length;i++ ) {
        var compare = getIntersest(rr[i]);
        console.log(compare);
        for(var j=0; j<tab.rows.length;j++) {
            if (compare === (+tab.rows[j].cells[5].innerHTML)) {
                tab.rows[j].cells[5].style.backgroundColor = "yellow";
            }

        }
    }


}


