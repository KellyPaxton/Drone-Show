const drone = document.getElementById('drone');
let angle = 0;
const radius = 200; // Radius of the circular path
const centerX = window.innerWidth / 2; // Center X position
const centerY = window.innerHeight / 2; // Center Y position

function moveInCircle() {
    // Update the angle to move the circle
    angle += 0.01; // Adjust the speed by changing this value

    // Calculate new x and y positions
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // Update the position of the circle
    drone.style.left = `${x}px`;
    drone.style.top = `${y}px`;

    // Call the function again using requestAnimationFrame
    requestAnimationFrame(moveInCircle);
}

moveInCircle();

