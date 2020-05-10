const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')
const userPage = require('../pages/user.page')
const action = require('../actions/elementUtil')
const fetch = require("node-fetch");
const data = require('../config')

describe("Verify login page test cases", function(){

   
    it("fetch all links on homepage", function(){
        action.navigateTo(data.url)
        homePage.getAllLinks()
        .then(res=>{
            console.log(res.length)
            res.forEach(element => {
                element.getAttribute("href").then(endpoint=>{
                    fetch(endpoint)
                    .then(result=>{
                        console.log(`status of ${endpoint} is ${result.status}`)
                    })
                })
                
            });
        })
        

    })

    it("User navigate to login page", function(){
        homePage.closeBanner();
        homePage.clickLoginLink()
    })

    it("Enter credentials on login Page", function(){
        loginPage.doLogin(data.username, data.password)        
    })

    it("Verify that user successfully logged in", function(){
        expect(userPage.getTextOfTheHeader()).toEqual(data.headerLoginPage)
    })

})



