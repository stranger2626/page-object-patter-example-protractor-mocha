const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("div.header .top-navigation__item");
        this.contactUsButton = new Element(".cta-button-ui");
    };
};

module.exports = Header;