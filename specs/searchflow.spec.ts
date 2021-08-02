import { browser } from "protractor";
import { expect } from "chai";
import { HomePageObject } from "../pages/home.page";
import { FlightsPageObject } from "../pages/flights.page";

let flightsPage:FlightsPageObject;

describe("Search Flow", () => {
    const homepage: HomePageObject = new HomePageObject();

    before(() => {
        browser.get(homepage.getUrl());
    });

    it("should navigate to flights page", async () => {
        homepage.getFlightsLink().click();
        expect(await browser.getCurrentUrl()).to.contains("flights");
        browser.sleep(5000);
    });
    it('should enter PAR in the field', async () => {
        flightsPage = new FlightsPageObject();
        flightsPage.getOrigin().click();

        let existingSearchItems = flightsPage.getExistingItemsFromSearch();

        existingSearchItems.each(async item => {
            let closeButton = item.$('div.vvTc-item-button');
            browser.actions().mouseMove(closeButton).click().perform();
        })

        flightsPage.getSearchInput().sendKeys('PAR');
        browser.sleep(2000);

        flightsPage = new FlightsPageObject();
        let searchResult = flightsPage.getSearchResultItem(0)
        searchResult.click();

        browser.sleep(2000);
        flightsPage = new FlightsPageObject();
        let searchedItem = await flightsPage.getSearchedItem().getText();
        expect(searchedItem).to.equal('Paris (PAR)')
    })

    it('should enter NYC in the destination field', async () => {
        flightsPage = new FlightsPageObject();
        flightsPage.getDestination().click();
        browser.sleep(3000);

        flightsPage.getSearchInput().sendKeys('NYC');
        browser.sleep(2000);

        flightsPage = new FlightsPageObject();
        let searchResult = flightsPage.getSearchResultItem(0)
        searchResult.click();

        browser.sleep(2000);
        flightsPage = new FlightsPageObject();
        let searchedItem = await flightsPage.getDestinationResult().getText();
        expect(searchedItem).to.equal('New York (NYC)')
    })

    it('should display 4 travellers ', async () => {
        flightsPage.getTravellersDropDownButton().click();
        browser.sleep(2000);
        const adultTravelers = flightsPage.getTravellerOptionButton(0 , 'increment');
        for(let i = 0 ; i<3 ; i++){
            adultTravelers.click()
        }
        flightsPage = new FlightsPageObject();
        const noOfTravellers = await flightsPage.getNoOfTravellers().getText();
        expect(noOfTravellers).to.be.equal('4 travelers')
        browser.sleep(4000);
    })
});