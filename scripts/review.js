let count = localStorage.getItem("reviewCount");

if (count === null) {
    count = 0;
} else {
    count = parseInt(count);
}

count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").innerHTML = count;

let currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
