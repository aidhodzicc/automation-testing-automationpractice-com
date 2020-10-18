'use strict';
var loginPage = require('./login.page.js')
var loginPage = new loginPage();
var EC = protractor.ExpectedConditions;
var defaultTimeout = 10000
var Page = function () {
    browser.get('http://automationpractice.com/index.php');

    this.waitForElement = function (element) {
        browser.wait(EC.visibilityOf(element), defaultTimeout)
    }
    this.waitAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), defaultTimeout)
        element.click();
    }
    this.hoverOverElement = function (element) {
        browser.actions().mouseMove(element).perform()
    }
    this.selectCategory = function (category) {
        this.hoverOverElement(this.menuItem);
        this.categoryItem(category).click();
    }
    this.addItemToCart = function () {
        this.waitForElement(this.itemInTheShop);
        this.hoverOverElement(this.itemInTheShop);
        this.quickViewButton.click();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement())
        this.waitAndClick(this.addToCartButton)
    }
    this.proceedToCheckout = function () {
        browser.switchTo().defaultContent()
        this.waitAndClick(this.proceedToCheckoutButton)
        this.waitAndClick(this.summaryProceedToCheckout)
    }
    this.confirmAdress = function () {
        this.waitAndClick(this.addressProceedToCheckout)
    }
    this.acceptTermsAndConditions = function () {
        this.waitAndClick(this.termsAndConditionsCheckbox)
        this.shippingProceedToCheckout.click();
    }
    this.selectPaymentOption = function (payment) {
        this.waitForElement(this.bankWireButton(payment));
        this.bankWireButton(payment).click();
    }
    this.confirmOrder = function () {
        this.waitAndClick(this.confirmOrderButton)
    }
    this.continueShopping = function () {
        browser.switchTo().defaultContent()
        this.waitAndClick(this.continueShoppingButton)
    }
};
Page.prototype = Object.create({},
    {
        signIn: { get: function () { return element(by.className("login")); } },
        menuItem: { get: function () { return element(by.xpath("//a[@class='sf-with-ul'][contains(text(),'Women')]")); } },
        categoryItem: { value: function (category) { return element(by.xpath("//li[@class='sfHover']//a[contains(text(),'" + category + "')]")); } },
        itemInTheShop: { get: function () { return element(by.xpath("//div[@id='center_column']//ul//li//div//div//div//a//img")); } },
        quickViewButton: { get: function () { return element(by.xpath("//span[contains(text(),'Quick view')]")); } },
        addToCartButton: { get: function () { return element(by.id('add_to_cart')); } },
        continueShoppingButton: { get: function () { return element(by.className('continue btn btn-default button exclusive-medium')); } },
        proceedToCheckoutButton: { get: function () { return element(by.xpath("//span[contains(text(),'Proceed to checkout')]")); } },
        summaryProceedToCheckout: { get: function () { return element(by.xpath("//a[@class='button btn btn-default standard-checkout button-medium']//span[contains(text(),'Proceed to checkout')]")); } },
        addressProceedToCheckout: { get: function () { return element(by.xpath("//button[@name='processAddress']//span[contains(text(),'Proceed to checkout')]")); } },
        shippingProceedToCheckout: { get: function () { return element(by.xpath("//button[@name='processCarrier']//span[contains(text(),'Proceed to checkout')]")); } },
        termsAndConditionsCheckbox: { get: function () { return element(by.id('uniform-cgv')); } },
        bankWireButton: { value: function (payment) { return element(by.className(payment)); } }, //bankwire
        payByCheckButton: { value: function (payment) { return element(by.className(payment)); } }, //cheque
        confirmOrderButton: { get: function () { return element(by.xpath("//span[contains(text(),'I confirm my order')]")); } },
        orderCompleted: { get: function () { return element(by.xpath("//strong[contains(text(),'Your order on My Store is complete.')]")); } },
        orderCompletedCheck: { get: function () { return element(by.xpath("//p[@class='alert alert-success']")); } },
        orderItem: {
            value: function (email, password) {
                this.selectCategory('Blouses');
                this.addItemToCart();
                this.proceedToCheckout();
                loginPage.signInToShop(email, password)
                this.confirmAdress();
                this.acceptTermsAndConditions();
                this.selectPaymentOption('bankwire');
                this.confirmOrder();
            }
        },
        orderTwoItems: {
            value: function (email, password) {
                this.selectCategory('Blouses');
                this.addItemToCart();
                this.continueShopping();
                this.selectCategory('T-shirts');
                this.addItemToCart();
                this.proceedToCheckout();
                loginPage.signInToShop(email, password)
                this.confirmAdress();
                this.acceptTermsAndConditions();
                this.selectPaymentOption('cheque');
                this.confirmOrder();
            }
        }
    })
module.exports = Page;