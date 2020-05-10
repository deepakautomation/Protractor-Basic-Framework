class ElementUtil {

    waitForElement(loc){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(loc)), 30000);
    }
    click(loc) {
        this.waitForElement(loc);
        element(loc).click();

    };

    getAllElements(loc){
        return element.all(loc)
    }

    type(loc, text) {
        this.waitForElement(loc)
        element(loc).clear();
        element(loc).sendKeys(text);
    }

    getTitle() {
        browser.getTitle().then((title)=>{
            return title;
        });
    }

    isTextEqualTo(loc, text) {
        this.waitForElement(loc)
        return expect(element(loc).getText()).equals(text);
    }

    navigateTo(url) {
        browser.get(url);
    }

    getElementText(loc) {
        this.waitForElement(loc);
        return element(loc).getText();
    }

    switchToFrame(loc) {
        browser.switchTo().frame(element(loc).getWebElement());
    }

    switchToParentFrame() {
        browser.switchTo().defaultContent();
    }


}

module.exports = new ElementUtil();