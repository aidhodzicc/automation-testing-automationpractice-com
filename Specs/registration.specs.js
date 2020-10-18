'use strict';
let number = Date.now().toString();
var firstname = 'Aid'; var lastname = 'Hodzic'; var password = 'Aa123456'; var day = 13; var month = 2; var year = 1997; var company = 'Atlantbh';
var address1 = 'Adresa 1'; var address2 = 'Adresa 2'; var city = 'Sarajevo'; var state = 13; /*id for Illinois state */ var zipcode = '71000';
var additionalInformation = 'Additional information'; var phone = 123456789; var mobilePhone = 123456789; var alias = 'My new address'
var email = 'aidhodzic+' + number + '@gmail.com'
var Page = require('../Pages/registration.page.js');

describe('automationpractice.com registration page', function () {
    var page;
    beforeEach(function () {
        page = new Page();
    });
    describe('Register user account', function () {
        it('Should do a successful registration', function () {
            page.goToRegistration();
            page.waitForElement(page.emailRegistrationPlaceholder);
            page.registerAccount(email, firstname, lastname, password, day, month, year, company, address1, address2, city, state, zipcode, additionalInformation, phone, mobilePhone, alias);
            expect(page.signOutButton.getText()).toEqual('Sign out').then(function () {
                page.signOutButton.click();
            })
        })
    })
});
