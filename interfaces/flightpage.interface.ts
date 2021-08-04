interface FlightForm{
    modal: {
        container: string,
        input: string,
        existingList: {
            parent: string,
            child: string
        },
        searchedItem: string,
        resultsList: {
            parent: string,
            child: string,
            subChild: string
        },
        destinationResult: {
            parent: string,
            child: string,
            subChild: string
        },
        calendar: {
            wrapper: {
                parent: string,
                child: string
            },
            controls: {
                back: {
                    parent: string,
                    child: string
                }
            },
            month: {
                wrapper: string,
                departure: {
                    parent: string,
                    child: string
                },
                dateElement: {
                    parent: string,
                    child: string
                }
            }
        }
    }
}

interface TripForm {
    body: string,
    container: string,
    type: {
        selected: {
            parent: string,
            child: string
        },
        list: {
            parent: string,
            child: string
        }
    },
    traveller: {
        container: string,
        count: string,
        modal: {
            container: string,
            errorMessage: {
                parent: string,
                child: string,
                subChild: string
            },
            option: {
                container: string,
                element: string
            }
        }
    }
}

export {FlightForm, TripForm}