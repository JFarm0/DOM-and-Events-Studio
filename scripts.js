// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in Flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        }
        
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
        imgObj.style.bottom = '0px';
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function() {
        let abort = window.confirm("Confirm that you want to abort the mission.");
        if (abort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
            imgObj.style.bottom = '0px';
        }
    });

    let imgObj = document.getElementById("rocket");
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';

    let right = this.document.getElementById('right');
    right.addEventListener('click', function() {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    });

    let left = this.document.getElementById('left');
    left.addEventListener('click', function () {
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });

    let down = this.document.getElementById('down');
    down.addEventListener('click', function() {
        movement = parseInt(imgObj.style.bottom) - 10 + 'px;
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });

    let up = this.document.getElementById('up');
    up.addEventListener('click', function() {
        movement = parseInt(imgObj.style.bottom) + 10 + 'px;
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    // MY ATTEMPT BEFORE REVIEW
    // const up = document.getElementById("up");
    // const down = document.getElementById("down");
    // const left = document.getElementById("left");
    // const right = document.getElementById("right");

    // up.addEventListener("click", function () {
    //     spaceShuttleHeight.innerHTML = (Number.spaceShuttleHeight.innerHTML += 10000);
    // });

    // down.addEventListener("click", function () {
    //     spaceShuttleHeight.innerHTML = (Number.spaceShuttleHeight.innerHTML -= 10000);
    // });

    // left.addEventListener("click", function () {

    // });

    // right.addEventListener("click", function () {

    // });

    // JAYDE'S ATTEMPT
// let movementLeft = 0;
// let movementRight = 0;

//     const moveRocket = (direction) => {
//         if(direction === 'up') {

//         }
//         if(direction === 'down') {
            
//         }
//         if(direction === 'left') {
//             movementLeft -= 10
//             rocket.style.marginLeft = `${movementLeft}px`;
//         }
//         if(direction === 'right') {
//             movementRight -= 10;
//             rocket.style.marginRight = `${movementRight}`;

//         }
//     }
})