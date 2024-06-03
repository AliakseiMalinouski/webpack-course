import createItem from "./components/item/item";
import { Heading } from "./components/heading/heading";

import React from 'react';

(function() {
    const heading = new Heading();
    heading.render('first');
    createItem();
    console.log('aa')
})();