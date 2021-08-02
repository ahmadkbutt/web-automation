import {ElementArrayFinder, ElementFinder} from "protractor";

interface FlightForm{
    body?: ElementFinder;
    origin: ElementFinder;
    destination: ElementFinder;
    multiDate: ElementFinder;
    singleDate: ElementFinder;
    cabin: ElementFinder;
}

interface TripForm {
    body: ElementFinder;
    type: {
        container: ElementFinder;
        selectedType: ElementFinder;
        typeList?: ElementArrayFinder;
    },
    traveller: {
        container: ElementFinder;
        modal: {
            container?: ElementFinder;
            errorMessage: ElementFinder;
        }
    }
}

export {FlightForm, TripForm}