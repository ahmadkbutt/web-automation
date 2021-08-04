import {$, $$, ElementFinder} from "protractor";

export class FlightResultsPageObject {
    public resultsHeader:string;
    private cheapest: string;
    private best: string;
    private quickest: string;
    private priceSelector: ElementFinder;
    private timeSelector: any;
    private resultsDiv: string;
    private searchPageParent: string;
    private searchedCities: string;
    private searchedDates: string;
    private origin: ElementFinder;
    private destination: ElementFinder;
    private multiDate: ElementFinder;
    private singleDate: ElementFinder;
    

    constructor() {
        this.cheapest = 'a#qyu7-price_aTab'
        this.best = 'a#qyu7-bestflight_aTab'
        this.quickest = 'a#qyu7-duration_aTab'
        this.resultsDiv = 'div._id7 _igI'
        this.resultsHeader =  'div.resultsHeaderContent'
        this.searchPageParent = 'html.Flights-Search-FlightSearchPage-Html';
        this.searchedCities = 'div.vvTc-item-value';
        this.searchedDates = 'span.cQtq-value';
        this.origin =  $('div.q-kF-origin');
            this.destination =  $('div.q-kF-destination');
            this.multiDate =  $('div.q-kF-dates');
            this.singleDate= $('div.q-kF-date');
        }

        getPrice(type:string = 'price' || 'bestflight' || 'duration'){
            return $(this.resultsHeader).$$(`a[data-code='${type}'`).get(0).$('div._id7._igI').$$('span').get(0)
        }

        getTime(type){
            return $(this.resultsHeader).$$(`a[data-code='${type}'`).get(0).$('div._id7._igI').$$('span').get(1)
        }
        getFlightsResultPage(){
            return $(this.searchPageParent)
        }
        getSearchFormFields(){
            return this.origin.$$(this.searchedCities).get(0)
        }
        getSearchedOrigin(){
            return this.origin.$$(this.searchedCities).get(0)
        }
        getSearchedDestination(){
            return this.destination.$$(this.searchedCities).get(0)
        }
        getSearchedDepartureDate(){
            return $$(this.searchedDates).get(0);
        }
        getSearchedReturnDate(){
            return $$(this.searchedDates).get(1);
        }
    getDepartureDate(){
        return this.multiDate.$$('div.cQtq-input').get(0).$('span.cQtq-value');
    }
    getReturnDate(){
        return this.multiDate.$$('div.cQtq-input').get(1).$('span.cQtq-value');
    }
}