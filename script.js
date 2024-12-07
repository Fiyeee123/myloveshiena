let flowers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Black background
    noLoop();
    noStroke();
    
    // Initialize flower positions and colors
    flowers.push({x: 155, y: 115, petalColor: color('Tomato'), centerColor: color('Orange')});
    flowers.push({x: 60, y: 170, petalColor: color('SteelBlue'), centerColor: color('DarkTurquoise')});
    flowers.push({x: -45, y: 120, petalColor: color('IndianRed'), centerColor: color('LightSalmon')});
    flowers.push({x: -12, y: 41, petalColor: color('MediumOrchid'), centerColor: color('Violet')});
    flowers.push({x: 65, y: 85, petalColor: color('DarkGray'), centerColor: color('White')});
}

function draw() {
    // Set background with some transparency for layering effect
    background(0, 10);
    
    // Draw all flowers
    for (let flower of flowers) {
        drawFlower(flower.x, flower.y, flower.petalColor, flower.centerColor);
    }

    // Writing the message
    fill('Chocolate');
    textSize(40);
    textFont('Georgia');
    textAlign(CENTER, CENTER);
    text('I Love You', width / 2, height - 50);
}

function drawFlower(x, y, petalColor, centerColor) {
    push();
    translate(width / 2 + x, height / 2 + y);
    fill(petalColor);
    for (let i = 0; i < 5; i++) {
        ellipse(0, 22, 50, 100);
        rotate(PI / 2.5); // Rotate for the next petal
    }
    fill(centerColor);
    ellipse(0, 0, 40, 40); // Flower center
    pop();
}

// Function to handle window resizing
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}

// Download functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Create a temporary link element
    let link = document.createElement('a');
    link.download = 'I_Love_You_Artwork.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
