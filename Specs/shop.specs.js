'use strict';
var email = 'aidhodzic@yahoo.com'
var password = 'aA123456'
var orderMessage = 'Your order on My Store is complete.'
var Page = require('../Pages/shop.page.js');
var loginPage = require('../Pages/login.page.js');
var loginPage = new loginPage();
describe('automationpractice.com order from shop and search', function () {
    var page;
    beforeEach(function () {
        page = new Page();
    });
    describe('Order item from shop', function () {
        it('Should order one item', function () {
            page.orderItem(email, password);
            expect(page.orderCompleted.getText()).toContain(orderMessage).then(function () {
                loginPage.signOutButton.click();
            });
        })
        it('Should order two items', function () {
            page.orderTwoItems(email, password);
            expect(page.orderCompletedCheck.getText()).toContain(orderMessage).then(function () {
                loginPage.signOutButton.click();
            });
        })
    })
});