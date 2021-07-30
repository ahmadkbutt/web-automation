import { $, ElementFinder } from "protractor";

export class HomePageObject {
    public url:string;
    public flightsNavItem: ElementFinder;

    constructor() {
        this.url = 'https://www.kayak.com';
        this.flightsNavItem = $("a[aria-label='Search for flights']");
    }
    getUrl = () => {
        return this.url;
    }
    getFlightsLink = () => {
        return this.flightsNavItem
    }
}