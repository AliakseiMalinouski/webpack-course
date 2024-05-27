import { Heading } from "./components/heading/heading";
import { Body } from "./components/body/body";

(function() {
    const body = new Body();
    const heading = new Heading();
    heading.render();
    body.render();
})();