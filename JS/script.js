const gridContainer = document.querySelector('section.container')

// ? <article class="cell"></article>

for (let index = 0; index < 64; index++) {

    const cellElement = document.createElement('article');
    cellElement.classList.add('cell')

    gridContainer.appendChild(cellElement)
}