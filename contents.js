// Function to remove YouTube Shorts from the homepage and video watch page
function removeShorts() {
    // Remove Shorts section from homepage
    document.querySelectorAll('ytd-rich-section-renderer').forEach(el => {
        if (el.innerText.toLowerCase().includes("shorts")) {
            el.remove();
        }
    });

    // Remove Shorts section from video watch page (side recommendations)
    document.querySelectorAll('ytd-reel-shelf-renderer').forEach(el => {
        el.remove();
    });

    // Remove Shorts from search results and other places (if applicable)
    document.querySelectorAll('ytd-rich-grid-renderer ytd-video-renderer').forEach(el => {
        if (el.innerText.toLowerCase().includes("shorts")) {
            el.remove();
        }
    });
}

// Run the function initially and keep checking periodically
removeShorts();
setInterval(removeShorts, 2000);
