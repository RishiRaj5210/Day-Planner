function updateProgressBar() {
    const rows = document.querySelectorAll(".table tr");
    let completedTasks = 0;
    let totalTasks = 0;

    rows.forEach((row, index) => {
        if (index === 0) return; // Skip the header row
        const statusCell = row.querySelector("td:last-child select");
        if (statusCell && statusCell.value !== "None") {
            totalTasks++;
            if (statusCell.value === "Completed") {
                completedTasks++;
            }
        }
    });

    // Avoid NaN; if totalTasks is 0, percentage is 0
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector("#progress-text");

    // Update height and text
    progressBar.style.height = `${percentage}%`;
    progressText.textContent = `${percentage}% Completed`;
}

// Add event listeners for all select elements to trigger the update
document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", updateProgressBar);
});

// Initial progress update
updateProgressBar();
