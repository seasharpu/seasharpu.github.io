const achievements = [
    { points: 50, name: "Feedback nybörjare", img: "badges/50.png"},
    { points: 100, name: "Feedback Student", img: "badges/100.png" },
    { points: 150, name: "Feedback Mästare", img: "badges/150.png" },
    { points: 200, name: "Feedback Extreme", img: "badges/200.png" },
];

function updateAchievements() {
    const openTexts = document.querySelectorAll("#survey-form textarea");
    let totalChars = 0;
    openTexts.forEach(text => {
        totalChars += text.value.length;
    });

    achievements.forEach((achievement, index) => {
        const element = document.getElementById(`achievement-${index}`);
        if (totalChars >= achievement.points) {
            element.classList.remove("locked");
            element.classList.add("unlocked");
        } else {
            element.classList.remove("unlocked");
            element.classList.add("locked");
        }
    });
}

function validateForm() {
    const name = document.getElementById("name");
    const openText1 = document.getElementById("open-text-1");
    const openText2 = document.getElementById("open-text-2");
    const openText3 = document.getElementById("open-text-3");
    const think = document.getElementById("think");
    if (name.value && openText1.value && openText2.value && openText3.value && think.value) {
        displayAchievements();
    } else {
        alert("Var snäll och fyll i alla fält, tack.");
    }
}

function displayAchievements() {
    achievements.forEach((achievement, index) => {
        const element = document.getElementById(`achievement-${index}`);
        const resultElement = document.getElementById(`result-achievement-${index}`);
        resultElement.innerHTML = `
        <p><img src="${achievement.img}"> ${achievement.name} </p>`;

        if (element.classList.contains("unlocked")) {
            resultElement.classList.add("achieved");
        } else {
            resultElement.classList.add("locked");
        }
    });

    document.getElementById("achievements").classList.add("hidden");
    document.getElementById("survey-form").classList.add("hidden");
    document.getElementById("resultsAchievements").classList.remove("hidden");
    document.getElementById("resultsBadges").classList.remove("hidden");
    document.getElementById("displayContainer").classList.remove("hidden");
    document.getElementById("displayContainer").style.display = 'flex';
}