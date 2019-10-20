let score = 0;
let highscore = 0;
let targets = 0;

let spawner = true;
let speed = 1000;
let tx;

let difficulty = 'normal';

if (!localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", 0);
}

highscore = localStorage.getItem("highscore");

function die(target) {
    target.style.top = "-64px";
    target.style.opacity = 0;
    --targets
    ++score
    setTimeout(function(){target.remove()}, 350);
}

function purge() {
    document.querySelectorAll(".target").forEach(function(element) {
        element.click();
    });
    clearInterval(tx);
    score = 0;
    targets = 0;
    tx = setInterval(() => {
        if (spawner) {
            if (difficulty !== 'extreme') {
                spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
                document.querySelector("#highscore").innerText = `${highscore} best points, 1 target per ${speed/1000} second(s)`;
            } else {
                spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
                spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
                document.querySelector("#highscore").innerText = `${highscore} best points, 2 targets per ${speed/1000} second(s)`;
            }
            if (score > highscore) {
                highscore = score;
                localStorage.setItem("highscore", highscore);
            }
            document.querySelector("#scoreboard").innerText = `${score} points, ${targets} targets`;        
        }
    }, speed);
}

function spawnNewTarget(x, y) {
    var newTarget = document.querySelector(".target").cloneNode();
    newTarget.style.left = x + "px";
    newTarget.style.top = y + "px";
    newTarget.addEventListener('click', function() { die(this) });
    document.body.appendChild(newTarget);
    ++targets;
}

function selectDifficulty(difficulty) {
    if (!difficulty) {        
        document.querySelector("#difficulties").style.opacity = 1;
        document.querySelector("#difficulties").style.top = "5px";
        document.querySelector("#menuToggler").style.opacity = 0;
        document.querySelector("#menuToggler").style.top = "-15px";
        spawner = false;
    } else if (difficulty == 'back') {
        document.querySelector("#difficulties").style.opacity = 0;
        document.querySelector("#difficulties").style.top = "50px";
        document.querySelector("#menuToggler").style.opacity = 1;
        document.querySelector("#menuToggler").style.top = "5px";
        spawner = true;
    } else if (difficulty == 'easy') {
        difficulty == 'easy';
        document.querySelector("#difficulties").style.opacity = 0;
        document.querySelector("#difficulties").style.top = "50px";
        document.querySelector("#menuToggler").style.opacity = 1;
        document.querySelector("#menuToggler").style.top = "5px";
        spawner = true;
        speed = 2500;
        purge();
    } else if (difficulty == 'normal') {
        difficulty == 'normal';
        document.querySelector("#difficulties").style.opacity = 0;
        document.querySelector("#difficulties").style.top = "50px";
        document.querySelector("#menuToggler").style.opacity = 1;
        document.querySelector("#menuToggler").style.top = "5px";
        spawner = true;
        speed = 1000;
        purge();
    } else if (difficulty == 'hard') {
        difficulty == 'hard';
        document.querySelector("#difficulties").style.opacity = 0;
        document.querySelector("#difficulties").style.top = "50px";
        document.querySelector("#menuToggler").style.opacity = 1;
        document.querySelector("#menuToggler").style.top = "5px";
        spawner = true;
        speed = 750;
        purge();
    } else if (difficulty == 'extreme') {
        difficulty == 'extreme';
        document.querySelector("#difficulties").style.opacity = 0;
        document.querySelector("#difficulties").style.top = "50px";
        document.querySelector("#menuToggler").style.opacity = 1;
        document.querySelector("#menuToggler").style.top = "5px";
        spawner = true;
        speed = 500;
        purge();
    }
}

tx = setInterval(() => {
    if (spawner) {
        if (difficulty !== 'extreme') {
            spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
            document.querySelector("#highscore").innerText = `${highscore} best points, 1 target per ${speed/1000} second(s)`;
        } else if (difficulty == 'extreme') {
            spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
            spawnNewTarget(Math.floor(Math.random() * window.innerWidth + 1), Math.floor(Math.random() * window.innerHeight + 1))
            document.querySelector("#highscore").innerText = `${highscore} best points, 2 targets per ${speed/1000} second(s)`;
        }
        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highscore", highscore);
        }
        document.querySelector("#scoreboard").innerText = `${score} points, ${targets} targets`;        
    }
}, speed);

window.onload = function() {
    document.querySelector("#highscore").innerText = `${highscore} best points`;
};
