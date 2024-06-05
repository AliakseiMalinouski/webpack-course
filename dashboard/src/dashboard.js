import('FirstApp/ItemFromFirstApp')
    .then(FirstAppItem => {
        const Item = FirstAppItem.default;
        const instanceItem = new Item();
        instanceItem.render();
    })