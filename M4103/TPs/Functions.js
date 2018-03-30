

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