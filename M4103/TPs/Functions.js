

function defTitre1(){ //change le titre de la page avec le contenu de la balise ayant l'id "titre"
    document.title = document.getElementById("titre").innerText;
}

function defTitre2(){ //change le titre de la page avec le contenu de la première balise h2
    document.title = document.querySelector("h2").innerText;
}

function defTitre3(){ //change le titre de la page avec le contenu de la dernière balise h2
    h2Var = document.querySelectorAll("h2");
    if(h2Var.length == 0){
        document.title = "Chloe HETYEI";
    }
    else{
        document.title = h2Var[h2Var.length-1].innerText;
    }
}

function defTitre4(){ //sélectionne le premier élément ayant la classe "firstOrLast" comme titre du document
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

function inverseTexte(){ //inverse le contenu des deux balises p
    allP = document.querySelectorAll("p");
    p1 = allP[0];
    p2 = allP[1];

    tmp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = tmp;
}

function datemodif(){ //ajoute un texte ayant les infos de dernière modification (auteur et date)
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

function majNbJours(){ //calcule le nb de jours restant jusqu'au 19 juin 2018 en remplaçant le texte
    Date1 = new Date();
    Date2 = new Date(2018,06,19);
    diffdate = Math.round((Date2 - Date1)/(1000*60*60*24))

    jour = document.getElementById("nb_jours").innerHTML = "Il reste " + diffdate + " jours avant le 19 juillet 2018";
}

function majHorloge1(){ //affiche l'heure au format (hh:mm:ss) avec la méthode setInterval
    h = document.getElementById('horloge');
    new_h = new Date();
    h.innerHTML = new_h.getHours()+':'+new_h.getMinutes()+':'+new_h.getSeconds();
}
window.setInterval('majHorloge1()',100);

function majHorloge2(){ //affiche l'heure au format (hh:mm:ss) avec la méthode setTimeout
    h = document.getElementById('horloge');
    new_h = new Date();
    h.innerHTML = new_h.getHours()+':'+new_h.getMinutes()+':'+new_h.getSeconds();
}
window.setTimeout('majHorloge2()',200);

function nbInput(){ //champ texte qui se met en blanc par défaut puis en vert si c'est un nombre sinon rouge
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

function Horloge(){ //affiche l'heure au format graphique
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var hourFirst = Math.trunc(hours/10);
    var minuteFirst = Math.trunc(minutes/10);
    var secondFirst = Math.trunc(seconds/10);

    var hourSecond = hours-(hourFirst*10);
    var minuteSecond = minutes-(minuteFirst*10);
    var secondSecond = seconds-(secondFirst*10);

    var images = document.querySelectorAll("img");

    images[0].setAttribute("src", "images/"+hourFirst+".gif");
    images[1].setAttribute("src", "images/"+hourSecond+".gif");
    images[2].setAttribute("src", "images/"+minuteFirst+".gif");
    images[3].setAttribute("src", "images/"+minuteSecond+".gif");
    images[4].setAttribute("src", "images/"+secondFirst+".gif");
    images[5].setAttribute("src", "images/"+secondSecond+".gif");
}

function majGraphH(){ //Appel de la fonction Horloge graphique
    window.setInterval(Horloge, 100);
}


function menuDer(i){ //menu déroulant
    var menu = document.getElementById("menu");
    var lis = menu.children;

    //Initialisation
    for(var j=0; j<lis.length; j++){
        var listStyle = lis[j].getAttribute("style");
        if(listStyle == null){
            lis[j].setAttribute("style","list-style-image: url('images/plus.gif');");
        }
    }

    if(i!=-1){
        listStyle = lis[i].getAttribute("style");
        if(listStyle.valueOf() == "list-style-image: url('images/plus.gif');"){
            lis[i].setAttribute("style","list-style-image: url('images/minus.gif');");
            ul = lis[i].firstElementChild;
            ul.setAttribute("style","display: block;");
        }else{
            lis[i].setAttribute("style","list-style-image: url('images/plus.gif');");
            ul = lis[i].firstElementChild;
            ul.setAttribute("style","display: none;");
        }
    }
}

var global;

function sauvegarde(){ //enregistre le body par defaut
    global = document.querySelector('body').innerHTML;
}

function recherche(chaine){ //recherche un mot dans la page
    document.body.innerHTML = global;
    var tablMots = chaine.split(" ");
    for(i=0; i<tablMots.length; i++){
        if (tablMots[i]!= '' && tablMots[i]!= null) {
            regExp = new RegExp('(' + tablMots[i] + ')', 'gi');
            document.body.innerHTML = document.body.innerHTML.replace(regExp, "<span class='select'>" + tablMots[i] + "</span>");
        }
    }
}

function rechercheInteractive(chaine){ //recherche lettre après lettre
    document.body.innerHTML = global;
    var strings = string.split(" ");
    for(i=0; i<strings.length; i++){
        regExp = new RegExp('(' + strings[i] + ')', 'gi');
        document.body.innerHTML = document.body.innerHTML.replace(regExp, "<span class='select'>" + strings[i] + "</span>");
    }
}