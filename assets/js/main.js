document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);
