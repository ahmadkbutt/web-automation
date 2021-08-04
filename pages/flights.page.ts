import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {FlightsearchClass} from "../common/flightsearch.class";
import {FlightForm, TripForm} from "../interfaces/flightpage.interface";

export class FlightsPage extends FlightsearchClass {
    private flightForm: FlightForm;
    private tripForm: TripForm;

    constructor() {
        super();
        const flightForm = {
            modal: {
                container: 'div.c8GSD-content',
                input: "input.k_my-input",
                existingList: {
                    parent: "div.vvTc[role='list']",
                    child: "div[role='listitem']"
                },
                searchedItem: 'div.vvTc-item-value',
                resultsList: {
                    parent: 'div.c8GSD-overlay-dropdown',
                    child: "ul[role='tablist']",
                    subChild: 'li'
                },
                destinationResult: {
                    parent: 'div.d_E3',
                    child: "div.vvTc[role='list']",
                    subChild: "div[role='listitem']"
                },
                calendar: {
                    wrapper: {
                        parent: 'div.jjvn-calendarWrapper',
                        child: "div[role='tab']"
                    },
                    controls: {
                        back: {
                            parent: 'div.Fj7W',
                            child: "div[role='button']"
                        }
                    },
                    month: {
                        wrapper: 'div.ATGJ-monthWrapper',
                        departure: {
                            parent: 'div.ATGJ-monthWrapper',
                            child: 'div.onx_'
                        },
                        dateElement: {
                            parent: 'div.onx_-days',
                            child: 'div'
                        }
                    }
                }
            }
        }
        this.flightForm = flightForm;
        const tripForm = {
            body: 'div.zcIg',
            container: "div[role='button']",
            type: {
                selected: {
                    parent: 'div.wIIH-handle',
                    child: 'span'
                },
                list: {
                    parent: 'div.xvRy-content',
                    child: "li[role='tab']"
                }
            },
            traveller: {
                container: "div[role='button']",
                count: 'span',
                modal: {
                    container: 'div.UKFa-dropdownOptions',
                    errorMessage: {
                        parent: 'div.UKFa-errorMessage',
                        child: 'div.cAWq-mod-error',
                        subChild: 'span'
                    },
                    option: {
                        container: 'div.u9Xa',
                        element: "button"
                    }
                }
            }
        }
        this.tripForm = tripForm
    }

    getFlightFormModalContainer() : ElementFinder {
        return $(this.flightForm.modal.container)
    }

    getSearchInput() : ElementFinder {
        const {input} = this.flightForm.modal;
        return this.getFlightFormModalContainer().$(input)
    }

    getExistingItemsFromSearch() : ElementArrayFinder{
        const {existingList} = this.flightForm.modal;
        return $$(existingList.parent).get(0).$$(existingList.child);
    }

    getSearchedItem() : ElementFinder{
        const {searchedItem} = this.flightForm.modal
        return this.getExistingItemsFromSearch().get(0).$(searchedItem)
    }

    getResultsList() : ElementArrayFinder{
        const {resultsList} = this.flightForm.modal
        return this.getFlightFormModalContainer().$(resultsList.parent).$(resultsList.child)
            .$$(resultsList.subChild);
    }

    getSearchResultItem(itemNumber: number) : ElementFinder {
        return this.getResultsList().get(itemNumber);
    }

    getDestinationResult() : ElementFinder{
        const {destinationResult} = this.flightForm.modal;
        return $$(destinationResult.parent).get(1)
            .$(destinationResult.child)
            .$(destinationResult.subChild)
    }

    getCalendarWrapper() : ElementFinder{
        const {wrapper} = this.flightForm.modal.calendar;
        return this.getFlightFormModalContainer().$(wrapper.parent).$(wrapper.child);
    }

    getBackButton() : ElementFinder{
        const {wrapper, controls} = this.flightForm.modal.calendar;
        const {back} = controls;
        return this.getFlightFormModalContainer().$(wrapper.parent).$(back.parent).$$(back.child).get(0);
    }

    getDepartureCalendar() : ElementFinder{
        const {departure} = this.flightForm.modal.calendar.month;
        return this.getCalendarWrapper().$(departure.parent).$$(departure.child).get(0);
    }

    getDateElementFromCalender(date: number) : ElementFinder{
        const {calendar} = this.flightForm.modal;
        const {wrapper, month} = calendar;
        const {departure, dateElement} = month;

        return this.getFlightFormModalContainer().$(wrapper.parent).$$(departure.child).get(0).$(dateElement.parent)
            .$$(dateElement.child).get(date - 1);
    }

    getTripFormBody() : ElementFinder{
        return $$(this.tripForm.body).get(0);
    }

    getTravellerContainer() : ElementFinder{
        const {container} = this.tripForm.traveller
        return this.getTripFormBody().$$(container).get(1)
    }

    getTripTypeButton() : ElementFinder{
        return this.getTripFormBody().$$(this.tripForm.container).get(0);
    }

    getTravellersDropDownButton() : ElementFinder{
        return this.getTripFormBody().$$(this.tripForm.traveller.container).get(1);
    }

    getTravellerOptionButton(itemNumber: number, buttonType: string) : ElementFinder{
        const {modal} = this.tripForm.traveller;
        const {option} = modal;
        const travellerOption = $(modal.container).$$(option.container).get(itemNumber);
        return buttonType === 'increment' ? travellerOption.$$(option.element).get(1) : travellerOption.$$(option.element).get(0);
    }

    getTravellerOptionErrorMessage() : ElementFinder{
        const {errorMessage} = this.tripForm.traveller.modal;
        return $(errorMessage.parent).$(errorMessage.child).$(errorMessage.subChild)
    }

    getNoOfTravellers() : ElementFinder{
        const {count} = this.tripForm.traveller;
        return this.getTravellerContainer().$$(count).get(0);
    }

    getSelectedTripType() : ElementFinder{
        const {selected} = this.tripForm.type
        return this.getTripFormBody().$$(selected.parent).get(0).$$(selected.child).get(0)
    }

    getTripTypeItem(item: number) : ElementFinder{
        const {list} = this.tripForm.type
        return $(list.parent).$$(list.child).get(item);
    }
}