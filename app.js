const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('box');
        row.appendChild(cell);
    }
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('active');
    });
});

const button = document.getElementById('choose');

// Function that adds functionality to the button
button.addEventListener('click', () => {
    boxes.forEach(box => {
        box.classList.remove('active');
    });
    // Asks for user prompt and creates a grid based on the input
    const size = prompt('Enter the size of the grid (1-64): ');
    if (size > 0 && size < 65) {
        container.innerHTML = '';
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('box');
                cell.style.width = `${960 / size}px`;
                cell.style.height = `${960 / size}px`;
                row.appendChild(cell);
            }
        }
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                //Function that creates a random RGB value
                function getRandomRGB() {
                    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    console.log("WORKING")

                    return `rgb(${red}, ${green}, ${blue})`;
                }

                // Changes the background color of the box to a random RGB value
                box.style.backgroundColor = getRandomRGB();
            });
        });
    } else {
        alert('Invalid size!');
    }
});

