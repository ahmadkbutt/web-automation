import { browser } from "protractor";
import { expect } from "chai";
import { HomePageObject } from "../pages/home.page";
import { FlightsPageObject } from "../pages/flights.page";

let flightsPage:FlightsPageObject; //flight page common instance

/*
checks for common flight form fields presence
 */

const areFormFieldsPresent= (multiDateField:boolean) => {
  it("should display origin field", async () => {
    const isOriginFieldPresent = await flightsPage.isOriginFieldPresent();
    expect(isOriginFieldPresent).to.equal(true);
  });

  it("should display destination field", async () => {
    const isDestinationFieldPresent = await flightsPage.isDestinationFieldPresent()
    expect(isDestinationFieldPresent).to.equal(true);
  });

  it("should display dates field", async () => {
    const isDatesFieldPresent = multiDateField ? await flightsPage.isMultiDateFieldPresent(): await flightsPage.isSingleDateFieldPresent();
    expect(isDatesFieldPresent).to.equal(true);
  });
}

describe("Step 1", () => {
  const homepage: HomePageObject = new HomePageObject();

  before(() => {
    browser.get(homepage.getUrl());
  });

  it("should navigate to flights page", async () => {
    homepage.getFlightsLink().click();
    expect(await browser.getCurrentUrl()).to.contains("flights");
  });

  flightsPage= new FlightsPageObject();

  areFormFieldsPresent(true);

  it("should display round trip as trip type", async () => {
    const tripType = await flightsPage.getSelectedTripType().getText();
    expect(tripType).to.equal("Round-trip");
  });
});

describe('Step 2', () => {
    flightsPage = new FlightsPageObject();
    it('should switch to one-way trip',() => {
        flightsPage.getTripTypeButton().click();
        let oneWayItem = flightsPage.getTripTypeItem(0);
        oneWayItem.click();
        browser.sleep(2000);
    })
    areFormFieldsPresent(false);
})

describe('Step 3', () => {
  it('should switch to multi-city trip', () => {
    flightsPage.getTripTypeButton().click();
    const multiCityItem = flightsPage.getTripTypeItem(2);
    multiCityItem.click();
    browser.sleep(2000);
  })
  flightsPage = new FlightsPageObject();
  browser.sleep(1500);
  flightsPage = new FlightsPageObject();
  areFormFieldsPresent(false);
  it('should display cabin field', async () => {
    const isCabinFieldPresent = await flightsPage.isCabinFieldPresent();
    expect(isCabinFieldPresent).to.equal(true);
  })
})

describe('Step 4', () => {
  it('should switch to round trip', () => {
    flightsPage.getTripTypeButton().click();
    const roundTripItem = flightsPage.getTripTypeItem(1);
    roundTripItem.click();
    browser.sleep(2000);
  })
  flightsPage = new FlightsPageObject();
  areFormFieldsPresent(true);
})

describe('Step 5', () => {
  flightsPage = new FlightsPageObject();
  it('should open travellers modal',() => {
    flightsPage.getTravellersDropDownButton().click();
    browser.sleep(2000);
  })
  flightsPage = new FlightsPageObject();
  it('should display "Searches cannot have more than 9 adults" error message ', async () => {
    const adultTravelers = flightsPage.getTravellerOptionButton(0 , 'increment');
    for(let i = 0 ; i<10 ; i++){
      adultTravelers.click()
    }
    const errorMessage = await flightsPage.getTravellerOptionErrorMessage().getText();
    expect(errorMessage).to.equal('Searches cannot have more than 9 adults');
    browser.sleep(2000);

  })
})