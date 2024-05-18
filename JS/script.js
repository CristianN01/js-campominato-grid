const gridContainer = document.querySelector('section.container')

const playButton = document.querySelector('button.play')


// ? <article class="cell"></article>

for (let index = 0; index < 64; index++) {

    const cellElement = document.createElement('article');
    cellElement.classList.add('cell')
    cellElement.append(index + 1)
    cellElement.addEventListener('click', function(){
        cellElement.classList.toggle('active')
    });

    playButton.addEventListener('click', function(){
        cellElement.classList.remove('active')
    });


    gridContainer.appendChild(cellElement)
}