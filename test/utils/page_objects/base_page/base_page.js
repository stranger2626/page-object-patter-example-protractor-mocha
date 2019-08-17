const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };
    getCurrenUrl() {
        return browser.getCurrentUrl();
    };
};

module.exports = BasePage;