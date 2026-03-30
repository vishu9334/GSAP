// Animate nav children
gsap.from("nav .child", { 
    duration:0.5,
    y:-100,
    delay:0.5
    // stagger:0.2,
});

// Animate first-head letters
gsap.from(".box",{
    stagger:1
})
gsap.from(".box .first-head",{
    duration:0.5,
    opacity:0,
    y:200,
    delay:1
});

// Animate second-head text
gsap.from(".b-main .second-head",{
    duration:0.5,
    opacity:0,
    y:200,
    delay:1.5
})
gsap.from(".b-main .boxx",{
    duration:0.5,
    opacity:0,
    y:200,
    delay:1.9
})

