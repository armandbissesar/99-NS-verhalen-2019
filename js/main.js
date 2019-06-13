/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var bladwijzer = document.querySelectorAll("button.bladwijzer");
var duimfout = document.querySelectorAll("button.fout");
var duimgoed = document.querySelectorAll("button.goed");
var verwardeImages = document.querySelectorAll(".de-verwarde-man img");

function bladwijzerFunctie(e) {
    var img = e.target.childNodes[0]
    if (img.classList.contains('active')) {
        img.classList.remove('active');
        img.src = "images/symbolen/unfill.svg";

    } else {
        img.classList.add('active');
        img.src = "images/symbolen/filled.svg";


    }
    console.log(img);

}


function duimgoedFunctie(e) {
    var img = e.target.childNodes[0];
    if (img.classList.contains('active')) {
        img.classList.remove('active');
        img.src = "images/symbolen/duimgoed.svg";

    } else {
        img.classList.add('active');
        img.src = "images/symbolen/duimgoedfilled.svg";
    }
    console.log(img);
}

function duimfoutFunctie(e) {
    var img = e.target.childNodes[0];
    if (img.classList.contains('active')) {
        img.classList.remove('active');
        img.src = "images/symbolen/duimfout.svg";

    } else {
        img.classList.add('active');
        img.src = "images/symbolen/duimfoutFilled.svg";
    }
    console.log(img);
}

function verwardeImagesFunctie(e) {
    var img = e.target;
    if (img.classList.contains('flip')) {
        img.classList.remove('flip');

    } else {
        img.classList.add('flip');
    }
    console.log(img);
}

for (var i = 0; i < bladwijzer.length; i++) {
    bladwijzer[i].addEventListener('click', bladwijzerFunctie);
}

for (var j = 0; j < duimgoed.length; j++) {
    duimgoed[j].addEventListener('click', duimgoedFunctie);
}

for (var k = 0; k < duimfout.length; k++) {
    duimfout[k].addEventListener('click', duimfoutFunctie);
}
for (var l = 0; l < verwardeImages.length; l++) {
    verwardeImages[l].addEventListener('click', verwardeImagesFunctie);
}


var opslaan = document.querySelector('.opgeslagen');

opslaan.addEventListener('click', function () {
    document.body.classList.toggle('opslaan');
})
