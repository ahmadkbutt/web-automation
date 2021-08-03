import {$, $$, ElementFinder} from "protractor";

export class FlightResultsPageObject {
    public resultsHeader:string;
    private cheapest: string;
    private best: string;
    private quickest: string;
    private priceSelector: ElementFinder;
    private timeSelector: any;
    private resultsDiv: string;

    constructor() {
        this.cheapest = 'a#qyu7-price_aTab'
        this.best = 'a#qyu7-bestflight_aTab'
        this.quickest = 'a#qyu7-duration_aTab'
        this.resultsDiv = 'div._id7 _igI'
        this.resultsHeader =  'div.resultsHeaderContent'
        }

        getPrice(type:string = 'price' || 'bestflight' || 'duration'){
            return $(this.resultsHeader).$$(`a[data-code='${type}'`).get(0).$('div._id7._igI').$$('span').get(0)
        }

        getTime(type){
            return $(this[type]).$(this.resultsDiv).$$('span').get(1)
        }
}