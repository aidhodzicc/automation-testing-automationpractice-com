'use strict';
var EC = protractor.ExpectedConditions;
var defaultTimeout = 10000
var Page = function () {
    browser.get('http://automationpractice.com/index.php');

    this.waitForElement = function (element) {
        browser.wait(EC.visibilityOf(element), defaultTimeout)
    }
};

Page.prototype = Object.create({},
    {
        searchPlaceholder: { get: function () { return element(by.id('search_query_top')); } },
        serachButton: { get: function () { return element(by.name('submit_search')); } },
        alertWarningSearch: { get: function () { return element(by.xpath("//p[contains(text(),'No results were found')]")); } },
        productName: { get: function () { return element(by.xpath("//li[1]//div[1]//div[2]//h5[1]")); } },
        /* Function for search - gets a string and search by it */
        searchForItem: {
            value: function (searchString) {
                this.searchPlaceholder.sendKeys(searchString)
                this.serachButton.click()
            }
        }
    })

module.exports = Page;