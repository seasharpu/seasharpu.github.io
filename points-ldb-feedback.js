
function updateMeter(inputId, meterId) {
    const input = document.getElementById(inputId);
    const meter = document.getElementById(meterId);
    const span = meter.getElementsByTagName("span")[0];

    const charCount = input.value.length;
    const percentage = Math.min(charCount / 100, 1);
    span.style.width = (percentage * 100) + "%";
    span.style.backgroundColor = `rgb(${255 * (1 - percentage)}, ${255 * percentage}, 0)`;
}

function validateForm() {
    const name = document.getElementById("name");
    const bestParts = document.getElementById("best-parts");
    const worstParts = document.getElementById("worst-parts");
    const think = document.getElementById("think");
    const improve = document.getElementById("improve");
    

    if (name.value && bestParts.value && think.value && improve.value && worstParts.value) {
        if(think.value > 5){
            alert("Välj en siffra mellan 1 - 5")
        }else{
            const totalChars = bestParts.value.length + improve.value.length + worstParts.value.length;
            displayWellDone(totalChars);
        }

    } else {
        alert("Var snäll och fyll i alla fält, tack.");
    }
}

function displayWellDone(score) {
    const leaderboard = document.getElementById("leaderboard");
    const newItem = document.createElement("li");
    newItem.innerHTML = `<b>Du: ${score}</b>`;

    let added = false;
    for (let i = 0; i < leaderboard.children.length; i++) {
        const item = leaderboard.children[i];
        const itemScore = parseInt(item.innerText.split(": ")[1]);

        if (score > itemScore) {
            leaderboard.insertBefore(newItem, item);
            added = true;
            break;
        }
    }

    if (!added) {
        leaderboard.appendChild(newItem);
    }

    document.getElementById("your-score").innerText = `${score}`;
    document.getElementById("survey-form").classList.add("hidden");
    document.getElementById("well-done").classList.remove("hidden");
    document.getElementById("well-done").style.display = 'flex';
}
