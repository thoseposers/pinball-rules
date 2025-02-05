// Select DOM elements
const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-header");

// Global variables for tracking drag events
let isDragging = false, startY, startHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
}

const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
    // Toggles the fullscreen class to bottomSheet if the height is equal to 100
    bottomSheet.classList.toggle("fullscreen", height === 100);
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";

    ClearHighlightedFeatures();
}

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");

    ClearHighlightedFeatures();
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
    if (!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
}

// Determines whether to hide, set to fullscreen, or set to default 
// height based on the current height of the sheet content
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    //sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
    if (sheetHeight < 12) {
        hideBottomSheet();
    }
    if (sheetHeight > 75) {
        updateSheetHeight(100);
    }
}

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
// showModalBtn.addEventListener("click", showBottomSheet);

function HighlightFeature(featureName) {
    let featuresList = $("[id^=" + featureName + "-]");
    for (let featureIndex = 0; featureIndex < featuresList.length; featureIndex++) {
        const element = featuresList[featureIndex].classList.add('blink');
    }

    updateSheetHeight(12);
}

function ClearHighlightedFeatures() {
    // Remove any highlighting as well
    let blinkElements = document.querySelectorAll(".blink");
    for (let blinkIndex = 0; blinkIndex < blinkElements.length; blinkIndex++) {
        const element = blinkElements[blinkIndex].classList.remove('blink');
    }
}