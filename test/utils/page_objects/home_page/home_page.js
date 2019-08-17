const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class HomePage extends BasePage {
    constructor() {
      super();
      this.sections = new Element("div.section:not(.header)");  
    };
    open() {
        return browser.get("https://www.epam.com");
    };
};

module.exports = HomePage;