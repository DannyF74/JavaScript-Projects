var ages = [8,26,35,1,9,11,54,36];

checkage = (age) => age >= 18;

function checkages() {
    document.getElementById("checkages").innerHTML = ages.some(checkage);
}