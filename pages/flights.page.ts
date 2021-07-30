import {$,ElementArrayFinder, ElementFinder} from "protractor";

export class FlightsPageObject {
    public originField: ElementFinder;
    public destinationField:ElementFinder;
    private readonly departureAndReturnFields:ElementArrayFinder;
    public departureField:ElementFinder;
    public returnField:ElementFinder;
    public tripTypeField:ElementFinder;

    constructor() {
        this.originField = $("div[aria-label='Flight origin input']");
        this.destinationField = $("div[aria-label='Flight destination input']");
        this.departureAndReturnFields = $("div[aria-label='Departure and return dates input']").$$('.cQtq-input');
        this.tripTypeField = $('div.zcIg').$$('div.wIIH-handle').get(0).$$('span').get(0);
        if(this.departureAndReturnFields){
            this.setDepartureField();
            this.setReturnField();
        }
    }
    setDepartureField(){
        this.departureField = this.departureAndReturnFields.get(0);
    }
    setReturnField(){
        this.returnField = this.departureAndReturnFields.get(1)
    }
    getOriginField(){
        return this.originField;
    }
    getDestinationField(){
        return this.destinationField;
    }
    getDepartureField(){
        return this.departureField;
    }
    getReturnField(){
        return this.returnField;
    }
    getTripTypeField(){
        return this.tripTypeField;
    }
}
