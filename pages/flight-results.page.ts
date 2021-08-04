import {$, $$, ElementFinder} from "protractor";
import {FlightsearchClass} from "../common/flightsearch.class";
import {FlightresultsInterface} from "../interfaces/flightresults.interface";

export class FlightResultsPageObject extends FlightsearchClass {
    searchResults:FlightresultsInterface
    constructor() {
        super();
        const searchResults = {
            cheapest : 'a#qyu7-price_aTab',
            best : 'a#qyu7-bestflight_aTab',
            quickest : 'a#qyu7-duration_aTab',
            resultsDiv : 'div._id7 _igI',
            resultsHeader : 'div.resultsHeaderContent',
            searchPageParent : 'html.Flights-Search-FlightSearchPage-Html',
            searchedCities : 'div.vvTc-item-value',
            searchedDates : 'span.cQtq-value',
        }
        this.searchResults = searchResults
    }

    /**
     * following functions get elements from the flight search results
     * @param type
     */

    getPrice(type: string = 'price' || 'bestflight' || 'duration') : ElementFinder {
        return $(this.searchResults.resultsHeader).$$(`a[data-code='${type}'`).get(0).$('div._id7._igI').$$('span').get(0)
    }

    getTime(type) : ElementFinder{
        return $(this.searchResults.resultsHeader).$$(`a[data-code='${type}'`).get(0).$('div._id7._igI').$$('span').get(1)
    }

    getFlightsResultPage() : ElementFinder{
        return $(this.searchResults.searchPageParent)
    }

    getSearchedOrigin() : ElementFinder{
        return $(this.searchForm.origin).$$(this.searchResults.searchedCities).get(0)
    }

    getSearchedDestination() : ElementFinder{
        return $(this.searchForm.destination).$$(this.searchResults.searchedCities).get(0)
    }

    getSearchedDepartureDate() : ElementFinder{
        return $$(this.searchResults.searchedDates).get(0);
    }

    getSearchedReturnDate(): ElementFinder {
        return $$(this.searchResults.searchedDates).get(1);
    }
}