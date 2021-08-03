import {ElementArrayFinder, ElementFinder} from "protractor";

interface FlightForm{
    body?: ElementFinder;
    origin: ElementFinder;
    destination: ElementFinder;
    multiDate: ElementFinder;
    singleDate: ElementFinder;
    cabin: ElementFinder;
    search: {
        container: ElementFinder,
        existingList: ElementArrayFinder,
        input:ElementFinder,
        resultsList: ElementArrayFinder,
        destinationResult: ElementFinder,
        calendar: {
            wrapper: ElementFinder,
            controls: {
                back: ElementFinder,
                next: ElementFinder
            },
            month: {
                wrapper: ElementFinder,
                departure: ElementFinder,
                return: ElementFinder,
            }
        }
    }
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