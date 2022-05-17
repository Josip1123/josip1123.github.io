
// slideshow banner


let pictures = [];
pictures[0] = 'url("styles/img/shutterstock_1124727410.jpg")';
pictures[1] = 'url("styles/img/shutterstock_696840955.jpg")';
pictures[2] = 'url("styles/img/krlstad.jpg")';
let i = 0;
let interval = 4500;


function slideShow () {

    document.querySelector(".banner-grid").style.backgroundImage = pictures[i];
    if(i < pictures.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout ("slideShow()", interval);
}

window.onload = slideShow;


// intersection observer for counter section


const mainResult = document.querySelector('.resultat-main');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            

const int1 = setInterval(coun, 6.93);
let count1= 0;

const int2 = setInterval(coun2, 6.7);
let count2= 0;

const int3 = setInterval(coun3, 52);
let count3= 0;


function coun() {
    count1+=200;
    document.querySelector(".counter-number1").innerHTML = count1 + " +";

    if (count1 >= 75000) {
        clearInterval(int1);
    }
}

function coun2 () {
    count2+=20;
    document.querySelector(".counter-number2").innerHTML = count2 + ' +';

    if (count2 >= 8000) {
        clearInterval(int2);
    }
}

function coun3 () {
    count3+=1;
    document.querySelector(".counter-number3").innerHTML = count3 + ' +';

    if (count3 >= 50) {
        clearInterval(int3);
    }
}

    if (entry.isIntersecting) observer.unobserve(entry.target);
    })
    console.log(entries);
},
{
    // options
    threshold: 0.37,
}
)

observer.observe(mainResult);







