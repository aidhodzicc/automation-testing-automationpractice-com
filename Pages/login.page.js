'use strict';
var EC = protractor.ExpectedConditions;
var defaultTimeout = 10000
var Page = function () {
    browser.get('http://automationpractice.com/index.php');

    this.goToLogin = function () { this.signIn.click() }
    /* Waiting for element to be visible, using expected conditions */ 
    this.waitForElement = function (element) {
        browser.wait(EC.visibilityOf(element), defaultTimeout)
    }
    /* Sign in function - will use it in other tests */
    this.signInToShop = function (email, password) {
        this.waitForElement(this.signIn)
        this.emailPlaceholder.sendKeys(email)
        this.passwordPlaceholder.sendKeys(password)
        this.signInButton.click()
    }
};
/* Defining page elements */
Page.prototype = Object.create({},
    {
        signIn: { get: function () { return element(by.className("login")); } },
        emailPlaceholder: { get: function () { return element(by.id("email")); } },
        passwordPlaceholder: { get: function () { return element(by.id("passwd")); } },
        signInButton: { get: function () { return element(by.id("SubmitLogin")); } },
        signOutButton: { get: function () { return element(by.className("logout")); } },
        usernameButton: { get: function () { return element(by.className("account")); } }
    })

module.exports = Page;