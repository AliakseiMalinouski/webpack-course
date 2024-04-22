import './item.css';

const createItem = () => {
    const body = document.querySelector('body');
    const image = document.createElement('div');
    image.classList.add('item');
    body.appendChild(image);
}

export {
    createItem,
}