class Body {
    body = document.querySelector('body');
    render () {
        const div = document.createElement('div');
        div.style.width = '300px';
        div.style.height = '300px';
        div.style.background = 'green';
        this.body.appendChild(div);
    }
}

export { Body };