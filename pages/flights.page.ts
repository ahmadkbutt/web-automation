import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class FlightsPageObject {
    public originField: ElementFinder;
    public destinationField:ElementFinder;
    private readonly departureAndReturnFields:ElementArrayFinder;
    public departureField:ElementFinder;
    public returnField:ElementFinder;
    private tripDropdownForm: ElementFinder;
    public tripDropDownButton:ElementFinder;
    public selectedTripType:ElementFinder;
    public tripTypeList:ElementArrayFinder;

    constructor() {
        this.originField = $("div[aria-label='Flight origin input']");
        this.destinationField = $("div[aria-label='Flight destination input']");
        this.departureAndReturnFields = $$("div[aria-label='Departure and return dates input']").get(0).$$('.cQtq-input');
        this.tripDropdownForm = $('div.zcIg');
        this.tripDropDownButton=this.tripDropdownForm.$$("div[role='button']").get(0);
        this.selectedTripType = this.tripDropDownButton.$$('div.wIIH-handle').get(0).$$('span').get(0);
        if(this.departureAndReturnFields){
            this.setDepartureField();
            this.setReturnField();
        }
    }

    //sets the departure element from departure and return date container
    setDepartureField(){
        this.departureField = this.departureAndReturnFields.get(0);
    }

    //sets the return element from departure and return date container
    setReturnField(){
        this.returnField = this.departureAndReturnFields.get(1)
    }
    getTripDropDownButton(){
        return this.tripDropDownButton;
    }
    getSelectedTripType(){
        return this.selectedTripType;
    }

    //sets trip type list from trip type dialog
    setTripTypeList(){
        this.tripTypeList = $('div.xvRy-content').$$("li[role='tab']");
    }

    getTripTypeItem(item){
        this.setTripTypeList();
        return this.tripTypeList.get(item);
    }

    isOriginFieldPresent(){
        return this.originField.isPresent();
    }

    isDestinationFieldPresent(){
        return this.destinationField.isPresent();
    }

    isDepartureFieldPresent(){
        return this.departureField.isPresent();
    }

    isReturnFieldPresent(){
        return this.returnField.isPresent();
    }
}
