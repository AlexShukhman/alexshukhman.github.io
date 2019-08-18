// Import
var title;
$.getJSON('/src/json/title.json').done((data) => {title=data;});

var foot;
$.getJSON('/src/json/contact.json').done((data) => {foot=data;});

$(document).ready(()=>{
    writeIn('#typeIn' ,0,0,0, 'title');
    writeIn('#typeIn_foot', 0,0,0, 'foot')
});

var timeout = 100; // ms

function writeIn(e, index, wd, wdI, t) {
    if (!title && !foot) setTimeout(()=>{writeIn(e, 0,0,0, t);}, 200); // try again in 200 ms
    else {
        if (wd == 0 && wdI == 0) setTimeout(()=>{
            if (t == 'title') $(e).html('&#10003; '); // starting condition
            else $(e).html('');
            _writeIn(e, index, wd, wdI, t);
        }, timeout+100);
        else _writeIn(e, index, wd, wdI, t);
    }
}

function _writeIn(e, index, wd, wdI, type) {
    if(type == "title") var t = title.extras;
    else var t = foot.build_tools;

    if (index == t.length) {
        writeIn(e, 0,0,0, type); // term. condition: restart (wait a bit for reader)
    }
    else if (wd == t[index].split(" ").length) writeIn(e, index+1, 0,0, type); // term. condition: next phrase
    else if (wdI == t[index].split(" ")[wd].length) {
        $(e).append(' ');
        writeIn(e, index, wd+1, 0, type); // term. condition: next word
    }

    else {
        $(e).append(t[index].split(" ")[wd].split("")[wdI]); // next letter

        setTimeout(()=>{writeIn(e, index, wd, wdI+1, type);}, timeout); // move on
    }
}