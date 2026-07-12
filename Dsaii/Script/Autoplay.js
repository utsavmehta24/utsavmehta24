// Get the video element
const video = document.getElementById('autoplay-video');

// Function to play the video when it comes into view
function playVideo(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
            observer.unobserve(entry.target);
        } else {
            video.pause();
        }
    });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(playVideo, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Play video when 50% of it is visible
});

// Observe the video element
observer.observe(video);
