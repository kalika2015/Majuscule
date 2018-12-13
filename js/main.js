function majuscule() {

}

document.getElementById("btn").addEventListener("click", function() {
    var mess = document.getElementById("mess").value;
    var taille = mess.length;
    var rslt = '';

    var result = document.getElementById("result");

    for (var i=0; i<taille; i++){
        if (mess[i].match(/[A-Z]/, 'g')){
            rslt += mess[i];
        }
    }

    result.innerHTML = rslt;
});