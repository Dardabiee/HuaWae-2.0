var i = 0;
var tulisan = 'Muhammad Darda Fathammubienaa';
var kecepatan = 50;

function tulis(){
    if(i < tulisan.length){
        document.querySelector('.home-content').innerHTML += tulisan.charAt(i);
        i ++;
        setTimeout(tulis, kecepatan);
        
    }
}

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values:[
        {x: 100, y:-100},
        {x:300 , y:10},
        {x:500 , y:100},
        {x:750 , y:-100},
        {x:350 , y:-50},
        {x:600 , y:100},
        {x:800 , y:0},
        {x:window.innerWidth , y:50}
    ]
};

const tween = new TimelineLite(); // Perbaikan nama dari TimeLineLite ke TimelineLite

tween.add(
    TweenLite.to('.paper-plane', 1, {
       bezier: flightPath,
       ease: Power1.easeInOut
    })
);
// scroll reveal
// reset:true;
ScrollReveal({
    distance : '800px',
    duration : 2000,
    delay: 200,
});
ScrollReveal().reveal('.header,.home,.services', { origin: 'top' });
ScrollReveal().reveal('.intro-web', { origin: 'bottom' });
