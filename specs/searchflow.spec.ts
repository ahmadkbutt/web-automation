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
});