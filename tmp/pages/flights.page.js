"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsPageObject = void 0;
var protractor_1 = require("protractor");
var FlightsPageObject = /** @class */ (function () {
    function FlightsPageObject() {
        this.originField = protractor_1.$("div[aria-label='Flight origin input']");
        this.destinationField = protractor_1.$("div[aria-label='Flight destination input']");
        this.departureAndReturnFields = protractor_1.$("div[aria-label='Departure and return dates input']").$$('.cQtq-input');
        this.tripTypeField = protractor_1.$('div.zcIg').$$('div.wIIH-handle').get(0).$$('span').get(0);
        if (this.departureAndReturnFields) {
            this.setDepartureField();
            this.setReturnField();
        }
    }
    FlightsPageObject.prototype.setDepartureField = function () {
        this.departureField = this.departureAndReturnFields.get(0);
    };
    FlightsPageObject.prototype.setReturnField = function () {
        this.returnField = this.departureAndReturnFields.get(1);
    };
    FlightsPageObject.prototype.getOriginField = function () {
        return this.originField;
    };
    FlightsPageObject.prototype.getDestinationField = function () {
        return this.destinationField;
    };
    FlightsPageObject.prototype.getDepartureField = function () {
        return this.departureField;
    };
    FlightsPageObject.prototype.getReturnField = function () {
        return this.returnField;
    };
    FlightsPageObject.prototype.getTripTypeField = function () {
        return this.tripTypeField;
    };
    return FlightsPageObject;
}());
exports.FlightsPageObject = FlightsPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0cy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvZmxpZ2h0cy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUErRDtBQUUvRDtJQVFJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGNBQUMsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCwwQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFDRCwwQ0FBYyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDRCwrQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQ0FBYyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDRCw0Q0FBZ0IsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSw4Q0FBaUIifQ==