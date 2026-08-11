const destinations = [
    { name: "Punta Cana", tip: "Book resort transfers in advance during high season (Dec-Apr)." },
    { name: "Samaná", tip: "Visit between January and March for whale watching season." },
    { name: "Zona Colonial", tip: "Wear comfortable shoes for the cobblestone streets." },
    { name: "Jarabacoa", tip: "Bring a light jacket; mountain evenings can get cool." }
];

function populateSelect(selectId) {
    const selectElement = document.querySelector(`#${selectId}`);
    if (!selectElement) return;

    let placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a destination ...";
    placeholder.disabled = true;
    placeholder.selected = true;
    selectElement.appendChild(placeholder);

    destinations.forEach((destination) => {
        let option = document.createElement("option");
        option.value = destination.name;
        option.textContent = destination.name;
        selectElement.appendChild(option);
    });
}

function showTripSuggestion() {
    const select = document.querySelector("#destinationSelect");
    const output = document.querySelector("#tripSuggestion");

    if (!select || !output) return;

    select.addEventListener("change", () => {
        const chosenName = select.value;
        const found = destinations.find((destination) => destination.name === chosenName);

        if (found) {
            output.innerHTML = `<strong>${found.name}:</strong> ${found.tip}`;
        } else {
            output.innerHTML = "";
        }
    });
}

function displayFooterInfo() {
    const yearSpan = document.querySelector("#currentyear");
    const modifiedP = document.querySelector("#lastModified");
    let currentDate = new Date();

    if (yearSpan) {
        yearSpan.innerHTML = `${currentDate.getFullYear()}`;
    }
    if (modifiedP) {
        modifiedP.innerHTML = `Last Modification: ${document.lastModified}`;
    }
}

function handleThankYouPage() {
    const countSpan = document.querySelector("#inquiryCount");
    if (!countSpan) return;

    let count = localStorage.getItem("inquiryCount");
    count = count === null ? 0 : parseInt(count);
    count++;
    localStorage.setItem("inquiryCount", count);

    countSpan.innerHTML = `${count}`;
}

displayFooterInfo();
populateSelect("destinationSelect");
populateSelect("destination");
showTripSuggestion();
handleThankYouPage();