document.addEventListener("DOMContentLoaded", function () {
    // Video Filtering Functionality
    const filterButtons = document.querySelectorAll(".btn");
    const videos = document.querySelectorAll(".video-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            videos.forEach(video => {
                video.style.display = (category === "all" || video.getAttribute("data-category") === category) ? "block" : "none";
            });
        });
    });
    const navButtons = document.querySelectorAll(".nav-links button");

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
