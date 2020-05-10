const action = require('../actions/elementUtil')

class LoginPage{

    get username(){
        return by.id("username_login_2");
    }

    get password(){
        return by.id("password_login_2");
    }

    get loginBtn(){
        return by.id("loginBtn_2");
    }

    doLogin(username, password){
        action.type(this.username, username);
        action.type(this.password, password);
        action.click(this.loginBtn);
    }

}

module.exports = new LoginPage();