//hamburger menu toggle
document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

//sliding Detail box in how it works 
document.querySelectorAll('.toggle-details').forEach(item => {
    item.addEventListener('click', function() {
        const details = this.nextElementSibling;
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            details.style.maxHeight = details.scrollHeight + "px";
        } else {
            details.style.display = "none";
            details.style.maxHeight = "0px";
        }
    });
});

//Arrow Rotation in the how it works
document.querySelectorAll('.toggle-details').forEach(item => {
    item.addEventListener('click', function() {
        const arrowIcon = this.querySelector('.rotate');
        const details = this.nextElementSibling;
        
        arrowIcon.classList.toggle('active'); // Toggle the rotation
        details.classList.toggle('active'); // Toggle the visibility
        
        // To make sure the animation works correctly, we can trigger reflow
        details.style.maxHeight = details.classList.contains('active') ? details.scrollHeight + "px" : "0px";

    });
});
