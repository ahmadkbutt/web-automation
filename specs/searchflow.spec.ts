import {browser, protractor} from "protractor";
import {expect} from "chai";
import {HomePageObject} from "../pages/home.page";
import {FlightResultsPageObject} from "../pages/flight-results.page";
import {convertDollarToInt, formatDate, getMonthDiff, getShortestTime} from "../helper/helper";
import {FlightsPage} from "../pages/flights.page";
import scenarios from '../data/data.json';

let flightsPage: FlightsPage;
const EC = protractor.ExpectedConditions;

for (let scenario in scenarios) {
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
        const {'Origin Input': originInput, 'Origin Selection': originSelection} = scenarios[scenario];
        it(`should enter ${originInput} in the field`, async () => {
            flightsPage = new FlightsPage();
            flightsPage.getOrigin().click();

            let existingSearchItems = flightsPage.getExistingItemsFromSearch();

            existingSearchItems.each(async item => {
                let closeButton = item.$('div.vvTc-item-button');
                browser.actions().mouseMove(closeButton).click().perform();
            })

            flightsPage.getSearchInput().sendKeys(originInput);
            browser.sleep(2000);

            flightsPage = new FlightsPage();
            let searchResult = flightsPage.getSearchResultItem(0);
            searchResult.click();

            browser.sleep(2000);
            flightsPage = new FlightsPage();
            let searchedItem = await flightsPage.getSearchedItem().getText();
            expect(searchedItem).to.equal(originSelection)
        })
    });

    describe('Step 3', () => {

        const {
            'Destination Input': destinationInput,
            'Destination Selection': destinationSelection
        } = scenarios[scenario];

        it(`should enter ${destinationInput} in the destination field`, async () => {
            flightsPage = new FlightsPage();
            flightsPage.getDestination().click();
            browser.sleep(3000);

            flightsPage.getSearchInput().sendKeys(destinationInput);
            browser.sleep(2000);

            flightsPage = new FlightsPage();
            let searchResult = flightsPage.getSearchResultItem(0)
            searchResult.click();

            browser.sleep(2000);
            flightsPage = new FlightsPage();
            let searchedItem = await flightsPage.getDestinationResult().getText();
            expect(searchedItem).to.equal(destinationSelection)
        })
    })

    describe('Step 4', () => {
        flightsPage = new FlightsPage();
        const {'Passengers': passengers} = scenarios[scenario];
        it(`should display correct number of travellers `, async () => {
            let count: number = 0;
            flightsPage.getTravellersDropDownButton().click();
            browser.sleep(2000);
            Object.keys(passengers).map(((key, index) => {
                if (passengers[key]) {
                    count += passengers[key];
                    const travellerType = flightsPage.getTravellerOptionButton(index, 'increment');
                    let i;
                    index ? i = 0 : i = 1;
                    for (i; i < passengers[key]; i++) {
                        travellerType.click()
                    }
                }
            }))
            flightsPage = new FlightsPage();
            const noOfTravellers = await flightsPage.getNoOfTravellers().getText();
            expect(noOfTravellers).to.be.equal(`${count} travelers`);
            browser.sleep(4000);
        })
    })

    describe('Step 6', () => {
        flightsPage = new FlightsPage();
        const {'Departure': departure} = scenarios[scenario];
        it('Set ‘departure date’', async () => {
            const departureDate = formatDate(departure);
            const currentDate = new Date();

            if (departureDate > currentDate || departureDate === currentDate) {
                const departureField = flightsPage.getDepartureField();
                departureField.click();
                const expectedDepartureDate = departureDate.getDate();
                const expectedDepartureMonth = departureDate.getMonth() + 1;

                flightsPage = new FlightsPage();
                let currentDepartureDate = await flightsPage.getDepartureCalendar().getAttribute('data-month');
                let currentDepartureMonth = parseInt(currentDepartureDate.split('-')[1]);
                if (currentDepartureMonth > expectedDepartureMonth) {
                    let backButton = flightsPage.getControlButton('back');
                    backButton.click();
                } else {
                    for (let i = 0; i < (expectedDepartureMonth - currentDepartureMonth); i++) {
                        let forwardButton = flightsPage.getControlButton('forward');
                        forwardButton.click();
                    }
                }
                browser.sleep(5000);
                flightsPage = new FlightsPage();
                let selectedDate = flightsPage.getDateElementFromCalender(departureDate);
                await browser.wait(EC.elementToBeClickable(selectedDate));
                await selectedDate.click();
                browser.sleep(5000);

                flightsPage = new FlightsPage();
                const departureText = await flightsPage.getDate('departure').getText();
                const newDepartureDate = departureText.split(' ')[1];
                expect(newDepartureDate).to.equal(`${expectedDepartureMonth}/${expectedDepartureDate}`);
                browser.sleep(5000);
            }
        })
    })

    describe('Step 7', () => {
        flightsPage = new FlightsPage();
        const {'Departure': departure, 'Arrival': arrival} = scenarios[scenario];

        it('Set ‘return date’ as ‘current date +6’.', async () => {

            const arrivalDate = formatDate(arrival);
            const departureDate = formatDate(departure);
            const tripDurationInMonths = getMonthDiff(departureDate, arrivalDate);


            const expectedArrivalDate = arrivalDate.getDate();
            const expectedArrivalMonth = arrivalDate.getMonth() + 1;

            if (tripDurationInMonths < 10) {
                for (let i = 0; i < tripDurationInMonths; i++) {
                    let forwardButton = flightsPage.getControlButton('forward');
                    forwardButton.click();
                }
            }
            browser.sleep(5000);
            let selectedArrivalDate = flightsPage.getDateElementFromCalender(arrivalDate);

            await browser.wait(EC.elementToBeClickable(selectedArrivalDate));
            await selectedArrivalDate.click();
            browser.sleep(5000);


            flightsPage = new FlightsPage();
            const arrivalText = await flightsPage.getDate('arrival').getText();
            const newArrivalDate = arrivalText.split(' ')[1];
            expect(newArrivalDate).to.equal(`${expectedArrivalMonth}/${expectedArrivalDate}`);
            browser.sleep(5000);
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
            const isResultPagePresent = await flightsResults.getFlightsResultPage().isPresent();
            expect(isResultPagePresent).to.be.equal(true)
        })

        it('should display correct results in search form', async () => {
            const {
                'Origin Selection': originSelection, 'Destination Selection': destinationSelection,
                'Departure': departure, 'Arrival': arrival
            } = scenarios[scenario];
            const formattedDepartureDate = formatDate(departure);
            const formattedArrivalDate = formatDate(arrival);

            const searchedOrigin = await flightsResults.getSearchedOrigin().getText();
            const searchedDestination = await flightsResults.getSearchedDestination().getText();
            const searchedDepartureDate = await flightsResults.getSearchedDepartureDate().getText();
            const searchedReturnDate = await flightsResults.getSearchedReturnDate().getText();
            const expectedDepartureDate = formattedDepartureDate.getDate();
            const expectedDepartureMonth = formattedDepartureDate.getMonth() + 1;
            const departureDate = searchedDepartureDate.split(' ')[1];
            const expectedArrivalDate = formattedArrivalDate.getDate();
            const expectedArrivalMonth = formattedArrivalDate.getMonth() + 1;
            const returnDate = searchedReturnDate.split(' ')[1];

            expect(departureDate).to.equal(`${expectedDepartureMonth}/${expectedDepartureDate}`);
            expect(returnDate).to.equal(`${expectedArrivalMonth}/${expectedArrivalDate}`);

            expect(searchedOrigin).to.be.equal(originSelection);
            expect(searchedDestination).to.equal(destinationSelection);

        })

        it('should display least price in cheapest', async () => {
            const cheapestPrice = convertDollarToInt(await flightsResults.getPrice('price').getText());
            const bestPrice = convertDollarToInt(await flightsResults.getPrice('bestflight').getText());
            const quickestPrice = convertDollarToInt(await flightsResults.getPrice('duration').getText());
            expect(cheapestPrice).to.be.lessThanOrEqual(bestPrice);
            expect(cheapestPrice).to.be.lessThanOrEqual(quickestPrice);
        })


        it('should display shortest time in quickest', async () => {
            const cheapestTime = await flightsResults.getTime('price').getText();
            const bestTime = await flightsResults.getTime('bestflight').getText();
            const quickestTime = await flightsResults.getTime('duration').getText();
            expect(getShortestTime(quickestTime, cheapestTime)).to.be.equal(true);
            expect(getShortestTime(quickestTime, bestTime)).to.be.equal(true);
        })

    })
}