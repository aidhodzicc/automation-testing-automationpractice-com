'use strict';
var EC = protractor.ExpectedConditions;
var defaultTimeout = 10000
var Page = function () {
    browser.get('http://automationpractice.com/index.php');

    this.goToRegistration = function () { this.signIn.click() }
    this.waitForElement = function (element) {
        browser.wait(EC.visibilityOf(element), defaultTimeout)
    }
};

Page.prototype = Object.create({},
    {
        signIn: { get: function () { return element(by.className("login")); } },
        signOutButton: { get: function () { return element(by.className('logout')); } },
        emailRegistrationPlaceholder: { get: function () { return element(by.id("email_create")); } },
        createAnAccountButton: { get: function () { return element(by.id("SubmitCreate")); } },
        mrTitleButton: { get: function () { return element(by.id('id_gender1')); } },
        mrsTittleButton: { get: function () { return element(by.id('id_gender2')); } },
        firstNamePlaceholder: { get: function () { return element(by.id('customer_firstname')); } },
        lastNamePlaceholder: { get: function () { return element(by.id('customer_lastname')); } },
        emailPlaceholder: { get: function () { return element(by.id('email')); } },
        passwordPlaceholder: { get: function () { return element(by.id('passwd')); } },
        dayOfBirthDropdown: { get: function () { return element(by.id('days')); } },
        dayOfBirth: { value: function (day) { return element(by.css("#days [value='" + day + "']")); } },
        monthOfBirthDropdown: { get: function () { return element(by.id('months')); } },
        monthOfBirth: { value: function (month) { return element(by.css("#months [value='" + month + "']")); } },
        yearOfBirthDropdown: { get: function () { return element(by.id('years')); } },
        yearOfBirth: { value: function (year) { return element(by.css("#years [value='" + year + "']")); } },
        addressFirstName: { get: function () { return element(by.id('firstname')); } },
        addressLastName: { get: function () { return element(by.id('lastname')); } },
        companyNamePlaceholder: { get: function () { return element(by.id('company')); } },
        address1Placeholder: { get: function () { return element(by.id('address1')); } },
        address2Placeholder: { get: function () { return element(by.id('address2')); } },
        cityPlaceholder: { get: function () { return element(by.id('city')); } },
        stateDropdown: { get: function () { return element(by.id('id_state')); } },
        stateDropdownOption: { value: function (state) { return element(by.css("#id_state [value='" + state + "']")); } },
        postalCodePlaceHolder: { get: function () { return element(by.id('postcode')); } },
        additionalInformationPlaceHolder: { get: function () { return element(by.id('other')); } },
        homePhonePlaceholder: { get: function () { return element(by.id('phone')); } },
        mobilePhoneNumberPlaceholder: { get: function () { return element(by.id('phone_mobile')); } },
        addressAliasPlaceholder: { get: function () { return element(by.id('alias')); } },
        registrationButton: { get: function () { return element(by.id('submitAccount')); } },
        registerAccount: {
            value: function (email, firstname, lastname, password, day, month, year, company, address1, address2, city, state, zipcode, additionalInformation, phone, mobilePhone) {
                this.emailRegistrationPlaceholder.sendKeys(email);
                this.createAnAccountButton.click();
                this.waitForElement(this.mrTitleButton);
                this.mrTitleButton.click();
                this.firstNamePlaceholder.sendKeys(firstname);
                this.lastNamePlaceholder.sendKeys(lastname);
                this.passwordPlaceholder.sendKeys(password);
                this.dayOfBirthDropdown.click();
                this.dayOfBirth(day).click();
                this.monthOfBirthDropdown.click();
                this.monthOfBirth(month).click();
                this.yearOfBirthDropdown.click();
                this.yearOfBirth(year).click();
                this.companyNamePlaceholder.sendKeys(company);
                this.address1Placeholder.sendKeys(address1);
                this.address2Placeholder.sendKeys(address2);
                this.cityPlaceholder.sendKeys(city);
                this.stateDropdown.click();
                this.stateDropdownOption(state).click();
                this.postalCodePlaceHolder.sendKeys(zipcode);
                this.additionalInformationPlaceHolder.sendKeys(additionalInformation);
                this.homePhonePlaceholder.sendKeys(phone);
                this.mobilePhoneNumberPlaceholder.sendKeys(mobilePhone);
                this.registrationButton.click();
            }
        }
    })
module.exports = Page;