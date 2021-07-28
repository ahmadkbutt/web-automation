import {browser, element, ExpectedConditions, by} from 'protractor';
import {expect} from 'chai';

// spec.js
describe('Protractor Demo App', function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a: any, b: any) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', function () {
        add(1, 2);
        add(3, 4);

        expect(history.count()).to.equal(2);

        add(5, 6);

        expect(history.count()).to.equal(3); // This is wrong!
    });
});