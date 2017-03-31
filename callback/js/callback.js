var img = document.getElementById('img');
var button = document.getElementById('button');

button.addEventListener('click', function(){
    this.style.border = "5px solid";
    boyut(900, 650, 2000, balacalat);
    
});

function boyut(w, h, saniye, callback) {
    var timeout = setTimeout(function() {
        img.style.width = w;
        img.style.height = h;
        img.style.transition = 'all 0.5s ease';
        img.style.transform = 'scale(1)';
        img.style.transform = 'translateX(-50%) translateY(-50%)';
        callback(600, 350, saniye);
    }, saniye);
}

function balacalat(w, h, prm_saniye) {
    var set = setTimeout(function() {
        img.style.width = w;
        img.style.height = h;
        img.style.transition = 'all 0.5s ease';
        button.style.border = "0px";
        button.style.outline = "none";
        img.style.transform = 'scale(1.5)';
        img.style.transform = 'translateX(-50%) translateY(-50%)';
    }, prm_saniye);
}
