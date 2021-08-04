import {$, ElementFinder} from "protractor";

export class HomePageObject {
    public url:string;
    public flightsNavItem: string;

    constructor() {
        this.url = 'https://www.kayak.com';
        this.flightsNavItem = "a[aria-label='Search for flights']"
    }
    getUrl = (): string => {
        return this.url;
    }
    getFlightsLink = (): ElementFinder => {
        return $(this.flightsNavItem)
    }
}