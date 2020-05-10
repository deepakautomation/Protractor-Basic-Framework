const action = require('../actions/elementUtil')


class HomePage{

    get popupCloseBtn(){
        return by.xpath("//div[@class='container']/preceding-sibling::div")
    }

    get signInLink(){
        return by.xpath("//a[contains(@class,'login-btn')]/span[1]");
    }

    get frame(){
        return by.xpath("//iframe[contains(@id,'container')]");
    }

    get getAllLinksOnPage(){
        return by.xpath("//a[contains(@href,'http')]");
    }


    closeBanner(){
        action.switchToFrame(this.frame)
        action.click(this.popupCloseBtn)
        action.switchToParentFrame()
    }

    clickLoginLink(){
        action.click(this.signInLink);
    }

    getAllLinks(){
       return action.getAllElements(this.getAllLinksOnPage)
    }

}

module.exports = new HomePage();