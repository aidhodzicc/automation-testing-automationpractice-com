'use strict';
var Page = require('../Pages/search.page.js');
var searchString = 'Dress'
var unsuccessfulSearch = 'wqjpodoppojasdpjoad'
describe('automationpractice.com search', function () {
    var page;
    beforeEach(function () {
        page = new Page();
    });
    /* Search for an existing item and search with some random letters to check search functionality */
    describe('Search the items in the shop', function () {
        it('Should do a successfull search', function () {
            page.searchForItem(searchString)
            page.waitForElement(page.productName)
            expect(page.productName.getText()).toContain(searchString)
        })
        it('Should not show any results on search results', function () {
            page.searchForItem(unsuccessfulSearch)
            page.waitForElement(page.alertWarningSearch)
            expect(page.alertWarningSearch.getText()).toContain('No results were found')
        })
    })
});