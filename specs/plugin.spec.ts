import { browser } from "protractor";
import { expect } from "chai";
import { HomePageObject } from "../pages/home.page";
import { FlightsPageObject } from "../pages/flights.page";

/**
 * this test case validates
 */

let flightsPage:FlightsPageObject;

describe("Flight Search Form Fields", () => {
  const homepage: HomePageObject = new HomePageObject();

  before(() => {
    browser.get(homepage.getUrl());
  });

  it("should navigate to flights page", async () => {
    homepage.getFlightsLink().click();
    expect(await browser.getCurrentUrl()).to.contains("flights");
  });

  flightsPage= new FlightsPageObject();

  areFormFieldsPresent();

  it("should display return field", async () => {
    const isReturnFieldPresent = await flightsPage.isReturnFieldPresent();
    expect(isReturnFieldPresent).to.equal(true);
  });

  it("should display round trip as trip type", async () => {
    const tripType = await flightsPage.getSelectedTripType().getText();
    expect(tripType).to.equal("Round-trip");
  });
});

describe('Step 2', () => {
    const flightsPage = new FlightsPageObject();
    it('should switch to one-way trip',() => {
        flightsPage.getTripDropDownButton().click();
        let oneWayItem = flightsPage.getTripTypeItem(0);
        oneWayItem.click();
        browser.sleep(5000);
    })
    areFormFieldsPresent();
})


const areFormFieldsPresent= () => {
  it("should display origin field", async () => {
    const isOriginFieldPresent = await flightsPage.isOriginFieldPresent();
    expect(isOriginFieldPresent).to.equal(true);
  });

  it("should display destination field", async () => {
    const isDestinationFieldPresent = await flightsPage.isDestinationFieldPresent()
    expect(isDestinationFieldPresent).to.equal(true);
  });

  it("should display departure field", async () => {
    const isDepartureFieldPresent = await flightsPage.isDepartureFieldPresent()
    expect(isDepartureFieldPresent).to.equal(true);
  });
}