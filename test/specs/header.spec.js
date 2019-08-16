const expect = require("chai").expect;
const HomePageClass = require("../utils/page_objects/home_page");
const HomePage = new HomePageClass();

describe("Home page header", function () {

    it("should have 6 menu items", async function () {
        await HomePage.open();
        const countOfNavigationButtons = await HomePage.Header.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(6);
    });

});