"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsPageObject = void 0;
var protractor_1 = require("protractor");
var FlightsPageObject = /** @class */ (function () {
    function FlightsPageObject() {
        this.originField = protractor_1.$("div[aria-label='Flight origin input']");
        this.destinationField = protractor_1.$("div[aria-label='Flight destination input']");
        this.departureAndReturnFields = protractor_1.$$("div[aria-label='Departure and return dates input']").get(0).$$('.cQtq-input');
        this.tripDropdownForm = protractor_1.$('div.zcIg');
        this.tripDropDownButton = this.tripDropdownForm.$$("div[role='button']").get(0);
        this.selectedTripType = this.tripDropDownButton.$$('div.wIIH-handle').get(0).$$('span').get(0);
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
    FlightsPageObject.prototype.getTripDropDownButton = function () {
        return this.tripDropDownButton;
    };
    FlightsPageObject.prototype.getSelectedTripType = function () {
        return this.selectedTripType;
    };
    FlightsPageObject.prototype.setTripTypeList = function () {
        this.tripTypeList = protractor_1.$('div.xvRy-content').$$("li[role='tab']");
    };
    FlightsPageObject.prototype.getTripTypeItem = function (item) {
        this.setTripTypeList();
        return this.tripTypeList.get(item);
    };
    FlightsPageObject.prototype.isOriginFieldPresent = function () {
        return this.originField.isPresent();
    };
    FlightsPageObject.prototype.isDestinationFieldPresent = function () {
        return this.destinationField.isPresent();
    };
    FlightsPageObject.prototype.isDepartureFieldPresent = function () {
        return this.departureField.isPresent();
    };
    FlightsPageObject.prototype.isReturnFieldPresent = function () {
        return this.returnField.isPresent();
    };
    return FlightsPageObject;
}());
exports.FlightsPageObject = FlightsPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0cy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvZmxpZ2h0cy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFvRTtBQUVwRTtJQVdJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGVBQUUsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUNELGlEQUFxQixHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFDRCwrQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsMkNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELDJDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0RBQW9CLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxxREFBeUIsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbURBQXVCLEdBQXZCO1FBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxnREFBb0IsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSw4Q0FBaUIifQ==