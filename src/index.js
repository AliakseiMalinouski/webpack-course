import { createItem } from "./components/item/item";
import { Heading } from "./components/heading/heading";
(function() {
    const heading = new Heading();
    heading.render();
    createItem();
})();