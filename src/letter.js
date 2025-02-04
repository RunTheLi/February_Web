import "./letter/letter.css"
export default function letter() {
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("Next-Page")) {
            // Hide existing elements
            const container = document.getElementById("container");
            if (container) container.style.display = "none";

            const loveLetter = document.querySelector(".love-letter");
            if (loveLetter) loveLetter.style.display = "none";

            // Create the new Valentine's card
            let valentineCard = document.createElement("div");
            valentineCard.classList.add("happy-valentines");
            valentineCard.innerHTML = `
                <div class="valentines-day-card">
                    <div class="clouds"></div>
                    <div class="heartpop">
                        <div class="heartpopOne">
                            <div class="popleft"></div>
                            <div class="popright"></div>
                        </div>
                        <div class="heartpopTwo">
                            <div class="popleft"></div>
                            <div class="popright"></div>
                        </div>
                        <div class="heartpopThree">
                            <div class="popleft"></div>
                            <div class="popright"></div>
                        </div>
                        <div class="heartpopFour">
                            <div class="popleft"></div>
                            <div class="popright"></div>
                        </div>
                        <div class="heartpopFive">
                            <div class="popleft"></div>
                            <div class="popright"></div>
                        </div>
                    </div>
                    <div class="text"><span>I’m really glad I met you,
                    </br> and I feel lucky that our paths crossed.</span>
                    <div class="hearts">
                            <div class="one"></div>
                            <div class="two"></div>
                            <div class="three"></div>
                            <div class="four"></div>
                            <div class="five"></div>
                        </div>
                        </div>
                </div>
                <p class="hover"></p>
                
            `;

            // Append the new Valentine's card to the body
            document.body.appendChild(valentineCard);
        }
    });
}
