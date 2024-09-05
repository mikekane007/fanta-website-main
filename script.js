// Timeline 1 for Animations Triggered on Scrolling to '.two'
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",    // Animation starts when '.two' reaches 95% from the top
        end: "70% 50%",     // Animation ends when '.two' is at 50%
        scrub: true,        // Smooth scrubbing
        markers: false,     // Remove markers for cleaner UI
    }
});

// Animations for elements related to the Fanta section
tl.to("#fanta", {
    top: "120%",
    left: "0%"
}, 'orange');

tl.to("#orange-cut", {
    top: "160%",
    left: "23%"
}, 'orange');

tl.to("#orange", {
    width: "15%",
    top: "160%",
    right: "10%"
}, 'orange');

tl.to("#leaf", {
    top: "110%",
    rotate: "130deg",
    left: "70%"
}, 'orange');

tl.to("#leaf2", {
    top: "110%",
    rotate: "130deg",
    left: "0%"
}, 'orange');

// Timeline 2 for Animations Triggered on Scrolling to '.three'
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",   // Animation starts when '.three' reaches 95% from the top
        end: "20% 50%",    // Animation ends when '.three' reaches 50%
        scrub: true,       // Smooth scrubbing
    }
});

// Animations for elements in the product card section
tl2.from(".lemon1", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca');

tl2.from("#cocacola", {
    rotate: "-90deg",
    top: "110%",
    left: "-100%"
}, 'ca');

tl2.from(".lemon2", {
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca');

tl2.from("#pepsi", {
    rotate: "90deg",
    top: "110%",
    left: "100%"
}, 'ca');

// Further animation on the Fanta section when '.three' is in view
tl2.to("#orange-cut", {
    width: "18%",
    left: "42%",
    top: "204%"
}, 'ca');

tl2.to("#fanta", {
    width: "35%",
    top: "210%",
    left: "33%"
}, 'ca');


