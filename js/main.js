var bladwijzer = document.querySelectorAll("section article button")


for (var i = 0; i < bladwijzer.length; i++) {
    bladwijzer[i].addEventListener('click', bladwijzerFunctie)
}

function bladwijzerFunctie(e) {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')

    } else {
        e.target.classList.add('active')

    }
    console.log(e.target);

}
