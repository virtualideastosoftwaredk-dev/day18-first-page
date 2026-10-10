const button = document.getElementById("proofBtn");
const evidence = document.getElementById("evidence");

button.addEventListener("click", () => {
    evidence.textContent = "Day 18 evidence: I built, published and traced this page!";
});