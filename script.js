const el1 = document.getElementById('first-elm');
const el2 = document.querySelector('.next-elm');

el1.addEventListener('click', () => {
    el1.classList.toggle('highlight-1');
});

el2.addEventListener('click', () => {
    el2.classList.toggle('highlight-2');
});


const imageContainer = document.getElementById('img-link');
const btnAdd = document.getElementById('btn-add');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnDelete = document.getElementById('btn-delete');

const imgSrc = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrueua.info%2Fsites%2Fdefault%2Ffiles%2Fimages%2F09-2026%2Fnextvoyage-buildings-7120297.jpg&f=1&nofb=1&ipt=83a4b856c398c43fdb5f378921d10f13e4b937941d1e163b9b1b4c03b811c973";

btnAdd.addEventListener('click', () => {
    if (!document.getElementById('image')) {
        const newImg = document.createElement('img');
        newImg.id = 'image';
        newImg.src = imgSrc;
        newImg.alt = 'Краєвид міста Київ';
        newImg.width = 600;
        imageContainer.appendChild(newImg);
    }
});

btnIncrease.addEventListener('click', () => {
    const img = document.getElementById('image');
    if (img) {
        img.width += 100;
    }
});

btnDecrease.addEventListener('click', () => {
    const img = document.getElementById('image');
    if (img) {
        img.width -= 100;
    }
});

btnDelete.addEventListener('click', () => {
    const img = document.getElementById('image');
    if (img) {
        img.remove();
    }
});