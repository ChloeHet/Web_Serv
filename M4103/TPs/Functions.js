

function defTitre1(){
    document.title = document.getElementById("titre").innerText;
}

function defTitre2(){
    document.title = document.querySelector("h2").innerText;
}

function defTitre3(){
    h2Var = document.querySelectorAll("h2");
    if(h2Var.length == 0){
        document.title = "Chloe HETYEI";
    }
    else{
        document.title = h2Var[h2Var.length-1].innerText;
    }
}

function defTitre4(){
    hVar = document.getElementsByClassName("firstOrLast");
    if(hVar.length == 0){
        document.title = "Chloe HETYEI";
    }
    else if((hVar.length % 2) == 0){
        document.title = hVar[0].innerText;
    }
    else{
        document.title = hVar[hVar.length-1].innerText;
    }
}

function inverseTexte(){
    allP = document.querySelectorAll("p");
    p1 = allP[0];
    p2 = allP[1];

    tmp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = tmp;
}

function datemodif(){
    name = document.querySelector("meta[name=author]").getAttribute("content");
    j = new Array( "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche" );
    m = new Array("janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre");
    date = new Date();
    jour = j[date.getDay()-1];
    chiffre = date.getDate();
    mois = m[date.getMonth()];
    annee = date.getFullYear();
    document.getElementById("date_modif").innerText = ("Dernière modification : le " + jour + " " + chiffre + " " + mois + " " + annee + " par " + name);
}

function majNbJours(){
    Date1 = new Date();
    Date2 = new Date(2018,06,19);
    diffdate = Math.round((Date2 - Date1)/(1000*60*60*24))

    jour = document.getElementById("nb_jours").innerHTML = "Il reste " + diffdate + " jours avant le 19 juillet 2018";
}

function majHorloge1(){
    h = document.getElementById('horloge');
    new_h = new Date();
    h.innerHTML = new_h.getHours()+':'+new_h.getMinutes()+':'+new_h.getSeconds();
}
//window.setInterval('majHorloge1()',10000);

function majHorloge2(){
    h = document.getElementById('horloge');
    new_h = new Date();
    h.innerHTML = new_h.getHours()+':'+new_h.getMinutes()+':'+new_h.getSeconds();
}
//window.setTimeout('majHorloge2()',2000);

function majGrafH() {
    var currHour;
    const node = document.getElementById("grafHorloge");
    currHour = hour();
    const chars = currHour.split('');

    node.innerHTML = '';
    for (const c in chars) {
        if (chars[c] === ':') {
            node.innerHTML += ':';
        } else node.innerHTML = node.innerHTML
            .concat('<img src="images/' + chars[c] + '.gif" />');
    }
}

function nbInput(){
    valueInput = document.getElementById("myInput").value;
    if(isNaN(valueInput)) {
        document.getElementById("myInput").className = "rouge";
    }
    else if (valueInput == "") {
        document.getElementById("myInput").className = "blanc";
    }
    else {
        document.getElementById("myInput").className = "vert";
    }
}

function menuHoverPlus() {


    document.getElementById("title").onmouseover = document.getElementById("PlusOuMoins").src = "http://users.polytech.unice.fr/~rey/images/minus.gif";
    document.getElementById("title").onmouseout = document.getElementById("PlusOuMoins").src = "http://users.polytech.unice.fr/~rey/images/plus.gif";
}

sfHover = function() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    var img0 = document.getElementsByClassName("PlusOuMinus")[0];
    var img1 = document.getElementsByClassName("PlusOuMinus")[1];
    var img2 = document.getElementsByClassName("PlusOuMinus")[2];
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=" sfhover";
            img0.src = "http://users.polytech.unice.fr/~rey/images/minus.gif";
            img1.src = "http://users.polytech.unice.fr/~rey/images/minus.gif";
            img2.src = "http://users.polytech.unice.fr/~rey/images/minus.gif";
        }
        sfEls[i].onmouseout=function() {
            this.classList.remove("sfhover");
            img0.src = "http://users.polytech.unice.fr/~rey/images/plus.gif";
            img1.src = "http://users.polytech.unice.fr/~rey/images/plus.gif";
            img2.src = "http://users.polytech.unice.fr/~rey/images/plus.gif";
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);