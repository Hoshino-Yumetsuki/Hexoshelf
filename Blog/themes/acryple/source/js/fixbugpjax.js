var evt = new CustomEvent("pjax:complete", {
    bubbles: false,
    cancelable: false
});
window.dispatchEvent(evt);
document.addEventListener('pjax:complete', (e) => {
    $("#setting-buttons").show();
})