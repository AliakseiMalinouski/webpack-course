import { Heading } from "./components/heading/heading";
import { Body } from "./components/body/body";

import React from 'react';

(function() {
    const body = new Body();
    const heading = new Heading();
    heading.render('second');
    body.render();
})();