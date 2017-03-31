var img = document.getElementById('img');
var button = document.getElementById('button');

button.addEventListener('click', function(){
    this.style.border = "5px solid";
    balacalat(400, 200, 1000, boyut);
    
});

function balacalat(w, h, saniye, callback) {
    var timeout = setTimeout(function() {
        img.style.width = w;
        img.style.height = h;
        img.style.transition = 'all 0.5s ease';
        callback(600, 350, saniye);
    }, saniye);
}

function boyut(w, h, prm_saniye) {
    var set = setTimeout(function() {
        img.style.width = w;
        img.style.height = h;
        img.style.transition = 'all 0.5s ease';
        button.style.border = "0px";
        button.style.outline = "none";
    }, prm_saniye);
}
