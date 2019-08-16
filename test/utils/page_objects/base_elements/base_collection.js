class Collection {
    constructor(selector) {
        this.collection = element.all(by.css(selector));
    };
    getCount() {
        return this.collection.count();
    };
    getTexts() {
        return this.collection.getText();
    };
};

module.exports = Collection;