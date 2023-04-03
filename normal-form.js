function displayThankYouMessage() {
    document.getElementById("survey-form").classList.add("hidden");
    document.getElementById("displayContainer").classList.remove("hidden");
    document.getElementById("displayContainer").style.display = 'flex';
}

function validateForm() {
    const name = document.getElementById("name");
    const openText1 = document.getElementById("open-text-1");
    const openText2 = document.getElementById("open-text-2");
    const openText3 = document.getElementById("open-text-3");

    if (name.value && openText1.value && openText2.value && openText3.value && think.value) {
        if(think.value > 5){
            alert("Välj en siffra mellan 1 - 5")
        }else{
            displayThankYouMessage();
        }
    } else {
        alert("Var snäll och fyll i alla fält, tack.");
    }
}
