import {browser, element} from "protractor";
import {expect} from "chai";
import {HomePageObject} from "../pages/home.page";
import {FlightsPageObject} from "../pages/flights.page";
import {FlightResultsPageObject} from "../pages/flight-results.page";
import {convertDollarToInt, formatMonth, getShortestTime} from "../helper/helper";

let flightsPage: FlightsPageObject;

describe("Search Flow", () => {
    const homepage: HomePageObject = new HomePageObject();

    before(() => {
        browser.get(homepage.getUrl());
    });

    it("should navigate to flights page", async () => {
        homepage.getFlightsLink().click();
        expect(await browser.getCurrentUrl()).to.contains("flights");
    });

});

describe('Step 2', () => {
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

describe('Step 3', () => {

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
        expect(searchedItem).to.equal('New York, NY (NYC)')
    })
})

describe('Step 4', () => {
    it('should display 4 travellers ', async () => {
        flightsPage.getTravellersDropDownButton().click();
        browser.sleep(2000);
        const adultTravelers = flightsPage.getTravellerOptionButton(0 , 'increment');
        for(let i = 0 ; i<3 ; i++){
            adultTravelers.click()
        }
        flightsPage = new FlightsPageObject();
        const noOfTravellers = await flightsPage.getNoOfTravellers().getText();
        expect(noOfTravellers).to.be.equal('4 travelers');
        browser.sleep(4000);
    })
})

describe('Step 5', () => {

    it('should display 6 travellers ', async () => {
        const childTravellers = flightsPage.getTravellerOptionButton(4 , 'increment');
        for(let i = 0 ; i<2 ; i++){
            childTravellers.click()
        }
        flightsPage = new FlightsPageObject();
        const noOfTravellers = await flightsPage.getNoOfTravellers().getText();
        expect(noOfTravellers).to.be.equal('6 travelers');
        browser.sleep(4000);
    })
})

describe('Step 6', () => {
    flightsPage = new FlightsPageObject();
    it('Set ‘departure date’ as ‘current date +3’.', async () => {

        const departureField = flightsPage.getDepartureField();
        departureField.click();
        const expectedDepartureDate = new Date().getDate() + 3;
        const expectedDepartureMonth = new Date().getMonth() + 1;

        flightsPage = new FlightsPageObject();
        const currentDepartureDate = await flightsPage.getDepartureCalendar().getAttribute('data-month');
        const currentDepartureMonth = currentDepartureDate.split('-')[1];
        if (currentDepartureMonth !== formatMonth(expectedDepartureMonth)) {
            let backButton = flightsPage.getBackButton();
            backButton.click();
        }

        browser.sleep(5000);

        flightsPage = new FlightsPageObject();
        const selectedDate = flightsPage.getDateElementFromCalender(expectedDepartureDate);
        selectedDate.click();
        browser.sleep(5000);

        flightsPage = new FlightsPageObject();
        const departureText = await flightsPage.getDepartureDate().getText();
        const departureDate = departureText.split(' ')[1];
        expect(departureDate).to.equal(`${expectedDepartureMonth}/${expectedDepartureDate}`);
        browser.sleep(5000);
    })
})

describe('Step 7', () => {
    flightsPage = new FlightsPageObject();
    it('Set ‘return date’ as ‘current date +6’.', async () => {

        const expectedReturnDate = new Date().getDate() + 6;
        const expectedReturnMonth = new Date().getMonth() + 1;
        browser.sleep(5000);

        flightsPage = new FlightsPageObject();
        const selectedDate = flightsPage.getDateElementFromCalender(expectedReturnDate);
        selectedDate.click();
        browser.sleep(5000);

        flightsPage = new FlightsPageObject();
        const returnText = await flightsPage.getReturnDate().getText();
        const returnDate = returnText.split(' ')[1];
        expect(returnDate).to.equal(`${expectedReturnMonth}/${expectedReturnDate}`);
    })
})

describe('Step 8', () => {
    it('should click search', () => {
        const searchButton = flightsPage.getSearchButton();
        searchButton.click();
        browser.sleep(20000);
    })
    const flightsResults = new FlightResultsPageObject();

    it('should display flights result page', async () => {
        const isResultPagePresent = await flightsResults.getFlightsResultPage().isPresent();;
        expect(isResultPagePresent).to.be.equal(true)
    })

    it('should display correct results in search form', async () => {
        const searchedOrigin = await flightsResults.getSearchedOrigin().getText();
        const searchedDestination = await flightsResults.getSearchedDestination().getText();
        const searchedDepartureDate = await flightsResults.getSearchedDepartureDate().getText();
        const searchedReturnDate = await flightsResults.getSearchedReturnDate().getText();
        const expectedDepartureDate = new Date().getDate() + 3;
        const expectedDepartureMonth = new Date().getMonth() + 1;
        const departureDate = searchedDepartureDate.split(' ')[1];
        const expectedReturnDate = new Date().getDate() + 6;
        const expectedReturnMonth = new Date().getMonth() + 1;
        const returnDate = searchedReturnDate.split(' ')[1];

        expect(departureDate).to.equal(`${expectedDepartureMonth}/${expectedDepartureDate}`);
        expect(returnDate).to.equal(`${expectedReturnMonth}/${expectedReturnDate}`);

        expect(searchedOrigin).to.be.equal('Paris (PAR)');
        expect(searchedDestination).to.equal('New York, NY (NYC)');

    })

    it('should display least price in cheapest', async () => {
        const cheapestPrice = await flightsResults.getPrice('price').getText();
        const bestPrice = await flightsResults.getPrice('bestflight').getText();
        const quickestPrice = await flightsResults.getPrice('duration').getText();
        expect(convertDollarToInt(cheapestPrice)).to.be.lessThan(convertDollarToInt(bestPrice));
        expect(convertDollarToInt(cheapestPrice)).to.be.lessThan(convertDollarToInt(quickestPrice));
    })



    it('should display least price in cheapest', async () => {
        const cheapestTime = await flightsResults.getTime('price').getText();
        const bestTime = await flightsResults.getTime('bestflight').getText();
        const quickestTime = await flightsResults.getTime('duration').getText();
        expect(getShortestTime(quickestTime, cheapestTime)).to.be.equal(true);
        expect(getShortestTime(quickestTime, bestTime)).to.be.equal(true);
    })

})
