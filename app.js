document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector(".menu .open");
    const closeBtn = document.querySelector(".menu .close");
    const nav = document.querySelector(".header .nav");

    console.log({ openBtn, closeBtn, nav }); // Check if the elements are found

    openBtn.addEventListener("click", () => {
        console.log("Opening nav...");
        nav.style.display = "block";
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        console.log("Closing nav...");
        nav.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    });
});
