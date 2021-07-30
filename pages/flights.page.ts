import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {config} from "../conf";

export class FlightsPageObject {
    public origin: ElementFinder;
    public destination:ElementFinder;

    constructor() {
        this.origin = $("div[aria-label='Flight origin input']");
        this.destination = $("div[aria-label='Flight destination input']");
    }
    getOrigin(){
        return this.origin;
    }
    getDestination(){
        return this.destination;
    }
}
