function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {

            // create two span parent and child
            var parent = document.createElement("span");
            var child = document.createElement("span");

            //add class name 
            parent.classList.add("parent");
            child.classList.add("child");

            //parent span gets child span and child span get elem text
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            //elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}

function valueSetter(){
    
    gsap.set("#nav a",{
        // y:"100%",
        opacity:0
    });
    gsap.set("#home h1 .parent .child", { y:"100%"})
    gsap.set("#home h5 .parent .child", { y:"100%"})
    gsap.set("#home .row img",{opacity:0})

    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character = e.childNodes[1].childNodes[1]
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function loaderAnimation()
{
    var t1 = gsap.timeline();
t1
    .from("#loader .child span", {
        x: 90,
        stagger: .2,
        duration: 1,
        ease: Power3.easeInOut
    })

    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })

    .to("#loader", {
        height:0,
        duration: 1,
        ease: Circ.easeInOut
    })

    .to("#green", {
        height:"100vh",
        top:0,
        delay:-1,
        // duration: 0.5,
        ease: Circ.easeInOut
    })

    .to("#green", {
        height:0,
        delay:-0.5,
        duration: 0.5,
        ease: Circ.easeInOut,
        onComplete: function(){
            animateHomePage();
        }
    })
}

function animateHomePage(){

    var t1=gsap.timeline();

    t1
    .to("#nav a",{
        // y:0,
        opacity:1,
        delay:-1,
        stagger:.05,
        ease: Expo.easeInOut
    })

    .to("#home h1 .parent .child",{
        y:0,
        stagger:.1,
        delay:-1,
        duration:3,
        ease: Expo.easeInOut
    })

    .to("#home .row img",{
        y:0,
        opacity:1,
        stagger:.1,
        delay:-2,
        ease: Expo.easeInOut,
        onComplete:function(){
            animateSvg();
        }
    })

    .to("#home h5 .parent .child",{
        y:0,
        stagger:.1,
        delay:-1.5,
        duration:3,
        ease: Expo.easeInOut
    })

    
}

function animateSvg(){

    //move to top in valueSetter() function
    // document.querySelectorAll("#Visual>g").forEach(function (e){
    //     var character = e.childNodes[1].childNodes[1]
    //     character.style.strokeDasharray = character.getTotalLength() + 'px';
    //     character.style.strokeDashoffset = character.getTotalLength() + 'px';
    // })

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:6,
        delay:-1,
        ease:Expo.easeInOut
    })
}

function locoInitialize()
{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect()
{
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingimage;
        cnt.addEventListener("mousemove",function(dets){
            // console.log(dets.target);               -----> it target img div
            // console.log(dets.target.dataset);        --> it give index (index-0,index-1,index-2,index-3,index-4)
            // console.log(dets.target.dataset.index);   ---> it give index value (0,1,2,3,4)
            // console.log(document.querySelector("#cursor").children); -> it give no. of div present in "cursor" div
            // console.log(document.querySelector("#cursor").children[dets.target.dataset.index]); --> it give div on cursor
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
            showingimage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
            showingimage.style.filter="grayscale(1)";

            document.querySelector("#mainwork").style.backgroundColor ="#" + showingimage.dataset.color;
        })

        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[showingimage.dataset.index].style.opacity=0;
            showingimage.style.filter="grayscale(0)";
            document.querySelector("#mainwork").style.backgroundColor="#f2f2f2";
        })
    })
}

revealToSpan();
valueSetter()
loaderAnimation();  
locoInitialize();
cardHoverEffect();


// console.log("Hello Sandeep");

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


// function undeline(){
//     document.querySelectorAll("#nav a")
//     .forEach(function (elem){

//         var s=document.createElement("span");

//         s.classList.add("line");

//         s.innerHTML=elem.innerHTML;

//         elem.innerHTML="";
//         elem.appendChild(s);
//     }) 
// }
// undeline();


// gsap.from("g path",{
//     strokeDasharray:64.68521881103516,
//     duration:1,
//     ease:Power3.easeInOut
// })


// To hide source Code

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());


// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    event.preventDefault();
  }
});




