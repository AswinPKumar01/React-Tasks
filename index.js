document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll(".rr");

    tableRows.forEach((row) => {
        row.addEventListener("mouseover", function () {
            document.body.style.background = generateRandomGradient();
        });

        row.addEventListener("mouseout", function () {
            document.body.style.background = "linear-gradient(to right, #f0f0f0, #ffffff)"; // Restore the initial gradient background
        });
    });
});

function generateRandomGradient() {
    // Generate a random gradient color
    const startColor = `hsl(${Math.random() * 360}, 80%, 90%)`;
    const endColor = `hsl(${Math.random() * 360}, 80%, 90%)`;
    return `linear-gradient(to right, ${startColor}, ${endColor})`;
}
