import {browser} from 'protractor';
import {expect} from 'chai';
import {HomePageObject} from "../pages/home.page";
import {FlightsPageObject} from "../pages/flights.page";

/**
 * this test case validates
 */
describe('Flight Search Form Fields', () => {
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
        const isOriginFieldPresent = await flightsPage.getOriginField().isPresent();
        expect(isOriginFieldPresent).to.equal(true);
    })
    it('should display destination field',  async () => {
        const isDestinationFieldPresent = await flightsPage.getDestinationField().isPresent();
        expect(isDestinationFieldPresent).to.equal(true);
    })
    it('should display departure field',  async () => {
        const isDepartureFieldPresent = await flightsPage.getDepartureField().isPresent();
        expect(isDepartureFieldPresent).to.equal(true);
    })
    it('should display return field',  async () => {
        const isReturnFieldPresent = await flightsPage.getReturnField().isPresent();
        expect(isReturnFieldPresent).to.equal(true);
    })
    it('should display round trip as trip type',  async () => {
        const tripType = await flightsPage.getTripTypeField().getText();
        expect(tripType).to.equal('Round-trip');
    })
});
