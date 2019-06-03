// Import
var t;
$.getJSON('/src/json/title.json').done((data) => {t=data;});

$(document).ready(()=>{
    writeIn('#typeIn' ,0,0,0);
});

var timeout = 100; // ms

function writeIn(e, index, wd, wdI) {
    if (!t) setTimeout(()=>{writeIn(e, 0,0,0);}, 200); // try again in 200 ms
    else {
        if (wd == 0 && wdI == 0) setTimeout(()=>{
            $(e).html('&#10003; '); // starting condition
            _writeIn(e, index, wd, wdI);
        }, timeout+100);
        else _writeIn(e, index, wd, wdI);
    }
}

function _writeIn(e, index, wd, wdI) {
    if (index == t.extras.length) {
        writeIn(e, 0,0,0); // term. condition: restart (wait a bit for reader)
    }
    else if (wd == t.extras[index].split(" ").length) writeIn(e, index+1, 0,0); // term. condition: next phrase
    else if (wdI == t.extras[index].split(" ")[wd].length) {
        $(e).append(' ');
        writeIn(e, index, wd+1, 0); // term. condition: next word
    }

    else {
        $(e).append(t.extras[index].split(" ")[wd].split("")[wdI]); // next letter

        setTimeout(()=>{writeIn(e, index, wd, wdI+1);}, timeout); // move on
    }
}