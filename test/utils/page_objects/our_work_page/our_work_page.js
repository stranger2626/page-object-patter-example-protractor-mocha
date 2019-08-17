const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class OurWorkPage extends BasePage {
    constructor() {
      super();
      this.ourWorkTitle = new Element(".title--mixed-case.color-almost-black");  
    };
    open() {
        return browser.get("https://www.epam.com/our-work");
    };
};

module.exports = OurWorkPage;