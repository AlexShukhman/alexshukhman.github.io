var i = {}; // filled in by the python builders, it's an object with keys "skills" and "experience"
function updateTag(type, num){
    for (var j=0; j<i[type]; j++) {
        if (num != j) {
            $('#'+type+'View'+j).hide();
            $('#'+type+'Icon'+j).removeClass('shadow');
            $('#'+type+'Icon'+j).attr('onclick', 'updateTag("' + type + '", '+ j +')');
        }
        else {
            $('#'+type+'View'+j).slideDown();
            $('#'+type+'Icon'+j).addClass('shadow');
            $('#'+type+'Icon'+j).attr('onclick', 'updateTag("' + type + '", -1)');
            $([document.documentElement, document.body]).animate({
                scrollTop: $('#'+type+'View'+j).offset().top
            }, 2000);
        }
    }
}