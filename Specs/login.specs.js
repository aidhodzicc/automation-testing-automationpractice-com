'use strict';
var email = 'aidhodzic@yahoo.com'
var password = 'aA123456'
var Page = require('../Pages/login.page.js');

describe('automationpractice.com login page', function () {
    var page;
    beforeEach(function () {
        page = new Page();
    });
    describe('Sign in to the application', function () {
        it('Should do a successful sign in and sign out', function () {
            page.goToLogin();
            page.signInToShop(email, password);
            expect(page.signOutButton.getText()).toEqual('Sign out').then(function () {
                page.signOutButton.click();
                expect(page.signIn.getText()).toEqual('Sign in')
            })
        })
    })
});
