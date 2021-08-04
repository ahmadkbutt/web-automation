import {FlightsearchInterface} from "../interfaces/flightsearch.interface";
import {$, $$, ElementFinder, promise} from "protractor";

export class FlightsearchClass{
    searchForm: FlightsearchInterface
    constructor() {
        const searchForm = {
            body: 'div.q-kF-formBody',
            origin: 'div.q-kF-origin',
            destination: 'div.q-kF-destination',
            cabin: 'div.q-kF-cabin',
            multiDate: 'div.q-kF-dates',
            singleDate: 'div.q-kF-date',
            submit: 'div.q-kF-submit'
        }
       this.searchForm = searchForm;
    }

    /**
     * following function get elements from flight search form body
     */
    getSearchFormBody(): ElementFinder{
        return $$(this.searchForm.body).get(0)
    };
    getOrigin(): ElementFinder{
        return this.getSearchFormBody().$(this.searchForm.origin)
    }
    getDestination(): ElementFinder{
        return this.getSearchFormBody().$(this.searchForm.destination)
    }
    getCabin(): ElementFinder{
        return this.getSearchFormBody().$(this.searchForm.destination)
    }
    getDate(type:string = 'departure' || 'return'): ElementFinder{
        let divIndex = type === 'departure' ? 0 : 1;
        return this.getSearchFormBody().$$(this.searchForm.multiDate).get(0).$$('div.cQtq-input').get(divIndex).$('span.cQtq-value');
    }
    getDepartureField(): ElementFinder{
        return $(this.searchForm.multiDate).$$('div.cQtq-input').get(0);
    }
    getSearchButton(): ElementFinder{
        return $(this.searchForm.submit).$('button');
    }

    /**
     * following functions validate the presence of elements in flight search form
     */
    isOriginFieldPresent() : promise.Promise<boolean> {
        return $(this.searchForm.origin).isPresent();
    }

    isDestinationFieldPresent() : promise.Promise<boolean>{
        return $(this.searchForm.destination).isPresent();
    }

    isMultiDateFieldPresent() : promise.Promise<boolean>{
        return $(this.searchForm.multiDate).isPresent();
    }

    isSingleDateFieldPresent() : promise.Promise<boolean>{
        return $(this.searchForm.singleDate).isPresent();
    }

    isCabinFieldPresent() : promise.Promise<boolean>{
        return $(this.searchForm.cabin).isPresent();
    }

}