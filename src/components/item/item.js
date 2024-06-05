import './item.css';

class Item {
    render () {
        const body = document.querySelector('body');
        const image = document.createElement('div');
        image.classList.add('item');
        body.appendChild(image)
    }
}
export default Item;