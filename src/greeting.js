// greeting.js
export default function valentine() {
    document.addEventListener("DOMContentLoaded", () => {
        const YesButton = document.querySelector('.YesBtn');
        const NoButton = document.querySelector('.NoBtn'); // Select the No button

        // Event listener for the Yes button
        YesButton.addEventListener('click', () => {
            // Hide the container
            document.getElementById("container").style.display = "none";

            // Create the love letter element
            let letter = document.createElement("div");
            letter.classList.add("love-letter");

            letter.innerHTML = `
                <div class="container">
                    <div class="valentines">
                        <div class="envelope"></div>
                        <div class="front"></div>
                        <div class="card">
                            <div class="text">Happy</br>Valentine's</br>Day!</div>
                            <div class="heart"></div>
                        </div>
                        <div class="hearts">
                            <div class="one"></div>
                            <div class="two"></div>
                            <div class="three"></div>
                            <div class="four"></div>
                            <div class="five"></div>
                        </div>
                    </div>
                </div>
                <div class="shadow"></div>
                <button class="Next-Page">Next</button>
            `;

            // Append the letter to the body
            document.body.appendChild(letter);

            // Reinitialize the animation after adding the letter dynamically
            import("./animation.js").then(module => {
                module.default();
            });
        });

        // Variables for circular motion
        const radius = 170; // Radius of the circular path
        const centerX = YesButton.offsetLeft + YesButton.offsetWidth / 2; // X position of Yes button (center)
        const centerY = YesButton.offsetTop + YesButton.offsetHeight / 2; // Y position of Yes button (center)
        let angle = 0; // Start angle

        let isMoving = false; // Flag to check if movement should be triggered

        // Function to move the No button in a circular path
        function moveNoButtonInCircle() {
            angle += 0.05; // Increment the angle to move in a circular path

            // Calculate new position using trigonometry (cosine for X and sine for Y)
            const x = centerX + radius * Math.cos(angle) - NoButton.offsetWidth / 2;
            const y = centerY + radius * Math.sin(angle) - NoButton.offsetHeight / 2;

            // Set the new position of the No button
            NoButton.style.position = 'absolute';
            NoButton.style.left = `${x}px`;
            NoButton.style.top = `${y}px`;

            // Repeat the animation if needed
            if (isMoving) {
                requestAnimationFrame(moveNoButtonInCircle);
            }
        }

        // Start moving when the mouse or touch is near the No button
        function startMovingNoButton(event) {
            let mouseX, mouseY;

            // Check for mouse event
            if (event.clientX && event.clientY) {
                mouseX = event.clientX;
                mouseY = event.clientY;
            }
            // Check for touch event
            else if (event.touches && event.touches[0]) {
                mouseX = event.touches[0].clientX;
                mouseY = event.touches[0].clientY;
            }

            // If mouseX and mouseY are valid, continue
            if (mouseX && mouseY) {
                const noButtonRect = NoButton.getBoundingClientRect();
                const noButtonCenterX = noButtonRect.left + noButtonRect.width / 2;
                const noButtonCenterY = noButtonRect.top + noButtonRect.height / 2;

                // Check if the mouse/touch is near the No button
                const distance = Math.sqrt(Math.pow(mouseX - noButtonCenterX, 2) + Math.pow(mouseY - noButtonCenterY, 2));
                if (distance < 100) { // You can adjust this value for how far the cursor should be to trigger the move
                    if (!isMoving) {
                        isMoving = true;
                        moveNoButtonInCircle(); // Start moving in a circle
                    }
                } else {
                    isMoving = false; // Stop moving when the mouse moves far away
                }
            }
        }

        // Mouse move event listener
        document.addEventListener('mousemove', startMovingNoButton);

        // Touch move event listener
        document.addEventListener('touchmove', (event) => {
            event.preventDefault(); // Prevent the page from scrolling when touching
            startMovingNoButton(event);
        });
    });
}