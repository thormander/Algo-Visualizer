const visualizer = document.getElementById('visualizer');
let array = [];

// Generate random array
function generateArray(size) {
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    displayArray();
}

// Display array as bars
function displayArray() {
    visualizer.innerHTML = ''; // Clear previous bars
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value * 3}px`;
        bar.className = 'bar';
        visualizer.appendChild(bar);
    });
}

// Bubble Sort
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap in array
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // Update bar heights
                bars[j].style.height = `${array[j] * 3}px`;
                bars[j + 1].style.height = `${array[j + 1] * 3}px`;

                // Pause for animation
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
    }
}

// Start sorting
function startSort(type) {
    if (type === 'bubble') {
        bubbleSort();
    }
}

// Update array size on slider input
document.getElementById('sizeSlider').addEventListener('input', (e) => {
    generateArray(e.target.value);
});

// Initial setup
generateArray(50);
