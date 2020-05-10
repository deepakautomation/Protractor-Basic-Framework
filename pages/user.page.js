const action = require('../actions/elementUtil')

class UserPage{

    get popupCloseBtn(){
        return by.xpath("//div[@class='container']/preceding-sibling::div");
    }

    get header(){
        return by.xpath("//h2[contains(text(),'Select')]");
    }

    get frame(){
        return by.xpath("//iframe[contains(@id,'container')]");
    }

    closeBanner(){        
        action.switchToFrame(this.frame)
        action.click(this.popupCloseBtn);
        action.switchToParentFrame();
    }

    getTextOfTheHeader(){
         return action.getElementText(this.header);
    }

}

module.exports = new UserPage();