import {$, $$, ElementFinder} from "protractor";
import {FlightForm, TripForm} from "../interfaces/flightpage.interface";

export class FlightsPageObject {
    public flightForm: FlightForm
    public tripDropDownForm: TripForm;
    flightFormBody: ElementFinder;
    tripDropDownBody: ElementFinder;
   searchContainer: ElementFinder;

    constructor() {
        this.flightFormBody = $$('div.q-kF-formBody').get(0);
        this.searchContainer = $('div.c8GSD-content');
        this.flightForm = {
            body: this.flightFormBody,
            origin: this.flightFormBody.$('div.q-kF-origin'),
            destination: this.flightFormBody.$('div.q-kF-destination'),
            multiDate: this.flightFormBody.$('div.q-kF-dates'),
            singleDate: this.flightFormBody.$('div.q-kF-date'),
            cabin: this.flightFormBody.$('div.q-kF-cabin'),
            search: {
                container: this.searchContainer,
                input: this.searchContainer.$("input.k_my-input"),
                existingList: $$("div.vvTc[role='list']").get(0).$$("div[role='listitem']"),
                resultsList: this.searchContainer.$('div.c8GSD-overlay-dropdown').$("ul[role='tablist']").$$('li'),
            }
        }
        this.tripDropDownBody = $$('div.zcIg').get(0);
        this.tripDropDownForm = {
            body: this.tripDropDownBody,
            type: {
                container: this.tripDropDownBody.$$("div[role='button']").get(0),
                selectedType: this.tripDropDownBody.$$('div.wIIH-handle').get(0).$$('span').get(0),
            },
            traveller: {
                container: this.tripDropDownBody.$$("div[role='button']").get(1),
                modal: {
                    errorMessage: $('div.UKFa-errorMessage').$('div.cAWq-mod-error').$('span')
                }
            }
        }
    }

    getTripTypeButton() {
        return this.tripDropDownForm.type.container;
    }

    getTravellersDropDownButton() {
        return this.tripDropDownForm.traveller.container;
    }

    getTravellerOptionButton(itemNumber: number, buttonType: string) {
        this.setTravellersModalOptions();
        const travellerOption = this.tripDropDownForm.traveller.modal.container.$$('div.u9Xa').get(itemNumber);
        return buttonType === 'increment' ? travellerOption.$$("button").get(1) : travellerOption.$$("button").get(0);
    }

    setTravellersModalOptions() {
        this.tripDropDownForm.traveller.modal.container = $('div.UKFa-dropdownOptions');
    }

    getTravellerOptionErrorMessage() {
        return this.tripDropDownForm.traveller.modal.errorMessage;
    }

    getSelectedTripType() {
        return this.tripDropDownForm.type.selectedType;
    }

    //sets trip type list from trip type dialog
    setTripTypeList() {
        this.tripDropDownForm.type.typeList = $('div.xvRy-content').$$("li[role='tab']");
    }

    getTripTypeItem(item: number) {
        this.setTripTypeList();
        return this.tripDropDownForm.type.typeList.get(item);
    }

    isOriginFieldPresent() {
        return this.flightForm.origin.isPresent();
    }

    isDestinationFieldPresent() {
        return this.flightForm.destination.isPresent();
    }

    isMultiDateFieldPresent() {
        return this.flightForm.multiDate.isPresent();
    }

    isSingleDateFieldPresent() {
        return this.flightForm.singleDate.isPresent();
    }

    isCabinFieldPresent() {
        return this.flightForm.cabin.isPresent();
    }

    getOrigin(){
        return this.flightForm.origin;
    }
    getExistingItemsFromSearch(){
        return this.flightForm.search.existingList;
    }
    getSearchInput(){
        return this.flightForm.search.input;
    }
    getSearchResultItem(itemNumber: number){
        return this.flightForm.search.resultsList.get(itemNumber);
    }
    getSearchedItem(){
        return this.flightForm.search.existingList.get(0).$('div.vvTc-item-value')
    }

}
