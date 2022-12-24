const OnOffSwitch = document.getElementById('OnOffSwitch')
const OnOffLabel = document.getElementById('OnOffLabel');


OnOffSwitch.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        OnOffLabel.textContent = "On"
        OnOffLabel.parentElement.style.backgroundColor = "#272727";
        OnOffLabel.style.color = "#3E91FF";
    } else {
        OnOffLabel.textContent = "Off"
        OnOffLabel.parentElement.style.backgroundColor = "";
        OnOffLabel.style.color = ""; 

    }
});