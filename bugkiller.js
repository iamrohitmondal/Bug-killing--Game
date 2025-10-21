let bugbox = document.getElementById("bug")
let bugimage = document.getElementById("bugimage");
let Scorecount = 0;
let clickcount = 0;
let score = document.getElementById("score")
let legendary = document.getElementById("legendary-gaming")
let topvalue = 0;
let leftvalue = 0;
const smash = document.getElementById("smash");
const clickme = document.getElementById("click-me");
function opacity() {
    return new Promise((resolve) => {
        Object.assign(document.getElementById("screen").style, {
            transition: "opacity 1s linear 0s",
            opacity: "0",

        })
        resolve(200)
    })
}
function hidedisplay() {
    return new Promise((resolve) => {
        document.getElementById("screen").style.display = "none"
        resolve(200)
    })
}
document.getElementById("startbutton").addEventListener("click", () => {
    async function hidetitlepage() {
        await opacity();
        await hidedisplay();

    }
    hidetitlepage();

})

function bugproducer(animduration, timeout, timeinterval) {
    clickme.style.display = "none";
    bugbox.style.display = "none";
    bugimage.style.animationDuration = `${animduration}s`
    const interval = setInterval(() => {
        bugbox.style.display = "flex"
        setTimeout(() => {
            topvalue = 10 + Math.floor(Math.random() * 40);
            leftvalue = 0 + Math.floor(Math.random() * 40);
            let transformxvalue = (Math.random() < 0.5 ? -1 : 1) * (50 + Math.floor(Math.random() * 200));
            let transformyvalue = (Math.random() < 0.5 ? -1 : 1) * (50 + Math.floor(Math.random() * 200));
            Object.assign(bugbox.style, {
                top: `${topvalue}%`,
                left: `${leftvalue}%`
            })
            Object.assign(bugimage.style, {

                transform: `translate(${transformxvalue}px,${transformyvalue}px) rotate(30deg)`


            })

            bugbox.style.display = "none"
        }, timeout)
    }, timeinterval)
    return interval
};
let buginterval;
function startbug(animduration, timeout, timeinterval) {
    clearInterval(buginterval);
    buginterval = bugproducer(animduration, timeout, timeinterval);
}

clickme.addEventListener("click", () => {

    if (true) {
        startbug(1.5, 1450, 3000);

    }
})


bugimage.addEventListener("click", () => {
    clickcount++;
    smash.play();
    bugbox.style.display = "none";
    Scorecount = clickcount;
    console.log(Scorecount)
    score.textContent = Scorecount; //i stored score here
    if (Scorecount) {
        const newdiv1 = document.createElement("div");
        Object.assign(newdiv1.style, {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: `${5 + Math.floor(Math.random() * 35)}%`,
            left: `${Math.floor(Math.random() * 40)}%`,
            height: "7em",
            width: "7em",
            fontSize: "3em",
            color: "#01d901",
            zIndex: "100",
            transition: "transform .8s linear 0s",
            transform: `translateY(0.5em)`


        })
        newdiv1.textContent = "+ 1"
        document.body.appendChild(newdiv1)
        setTimeout(() => {
            newdiv1.style.display = "none"
        }, 800);

        if (Scorecount > 10) {
            document.getElementById("header").style.background = "radial-gradient(circle,rgba(235, 152, 28, 1) 0%, rgba(105, 92, 92, 1) 100%)"
        }

        if (Scorecount >= 20) {
            document.body.style.background = "linear-gradient(91deg,rgba(237, 158, 0, 1) 0%,  rgba(245, 242, 242, 1) 52%, rgba(214, 4, 64, 1) 100%)"
            startbug(1.2, 1200, 2700);

        }

        if (Scorecount >= 30) {

            Object.assign(document.getElementById("header").style, {
                background: "linear-gradient(90deg,rgba(137, 121, 145, 1) 0%, rgba(244, 30, 37, 1) 47%, rgba(253, 29, 29, 1) 50%, rgba(204, 138, 45, 1) 77%)",
                color: "white"
            })
            startbug(1.0, 600, 1100);
        }

        if (Scorecount >= 50) {
            Object.assign(legendary.style, {
                display: "flex"
            })
            document.body.style.background = "radial-gradient(circle,rgba(255, 247, 247, 1) 42%, rgba(252, 199, 5, 1) 100%)"
            document.getElementById("header").style.background = "linear-gradient(90deg,rgba(255, 148, 82, 1) 0%, rgba(255, 56, 63, 1) 45%, rgba(255, 20, 20, 1) 64%, rgba(255, 209, 3, 1) 88%)";
            startbug(.9, 700, 1000);
        }
        if (Scorecount >= 100) {
            Object.assign(legendary.style, {
                display: "flex",
                color: "black"
            })

            document.getElementById("header").style.background = "linear-gradient(90deg,rgba(255, 133, 46, 1) 0%, rgba(255, 56, 56, 1) 51%, rgba(255, 170, 0, 1) 100%)"
            document.getElementById("header").style.color = "white";
            startbug(0.8, 600, 900);

        }
        if (Scorecount >= 200) {
            Object.assign(legendary.style, {
                display: "flex",
                color: "red",
                background: "radial-gradient(circle,rgba(245, 245, 255, 1) 15%, rgba(132, 132, 137, 1) 40%, rgba(115, 115, 120, 1) 63%, rgba(39, 39, 41, 1) 74%, rgba(0, 0, 0, 1) 79%)"
            })
            legendary.textContent = "UnStopable"
            document.body.style.background = "radial-gradient(circle,rgba(245, 245, 255, 1) 0%, rgba(0, 0, 0, 1) 79%)"
            document.getElementById("header").style.background = "linear-gradient(90deg,rgba(255, 133, 46, 1) 0%, rgba(255, 56, 56, 1) 51%, rgba(255, 170, 0, 1) 100%)"
            document.getElementById("header").style.color = "white"
            startbug(0.7, 500, 800);
        }
    }
})
