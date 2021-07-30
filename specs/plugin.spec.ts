import {browser, element, ExpectedConditions, by} from 'protractor';
import {expect} from 'chai';
import {HomePageObject} from "../pages/home.page";
import {FlightsPageObject} from "../pages/flights.page";

// spec.js
describe('kayak flight booking', () => {
    const homepage:HomePageObject = new HomePageObject();
    before(() => {
        browser.get(homepage.getUrl());
    });
    it('should navigate to flights page', async () => {
        homepage.getFlightsLink().click();
        expect(await browser.getCurrentUrl()).to.contains('flights');
    });
    const flightsPage:FlightsPageObject = new FlightsPageObject();
    it('should display origin field',  async () => {
        const isOriginPresent = await flightsPage.getOrigin().isPresent();
        expect(isOriginPresent).to.equal(true);
    })
    it('should display destination field',  async () => {
        const isDestinationPresent = await flightsPage.getDestination().isPresent();
        expect(isDestinationPresent).to.equal(true);
    })
});
