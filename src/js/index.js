function leaveAnimation() {
    let content = document.getElementById("content");
    let boardSkills = document.getElementById("boardSkills");
    content.onmouseleave = function() {
        boardSkills.innerHTML = "Will code for food !!";
        tl2.to(brain, 0, {
                zIndex: 4
            }, 0.001)
            .to(brain, 0.5, {
                top: "150px",
                ease: Bounce.easeOut
            })
            .to(headTop, 1, {
                top: "55px",
                ease: Bounce.easeOut,
                opacity: 1
            })
            .to(body, 0.5, {
                top: "800px"
            });

          }
    }



let tl = new TimelineLite({
    delay: 1,
    onComplete: leaveAnimation
});
let tl2 = new TimelineLite();
let headTop = document.getElementById("headTop");
let brain = document.getElementById("brain");
let body = document.getElementById("content");

tl.to(body, 0.5, {
        top: "0px"
    })
    .to(headTop, 0.5, {
        top: "-632px",
        opacity: 0
    })
    .to(brain, 1, {
        top: "4px",
        opacity: 1,
        ease: Bounce.easeOut
    })
    .to(brain, 0, {
        zIndex: 20
    });
