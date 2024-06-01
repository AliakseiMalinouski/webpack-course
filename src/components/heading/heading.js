import './heading.scss';

class Heading {

    body = document.querySelector('body');

    createDomElement (tag = 'div', content = 'content for element', classNames = '') {
        const preparedElement = document.createElement(tag);
        preparedElement.classList.add(classNames);
        preparedElement.textContent = content;
        return preparedElement;
    }

    render (pageName) {
        const createdElement = this.createDomElement('h1', 'aa', 'classNames');
        this.body.appendChild(createdElement);
    }
}

export {
    Heading,
}