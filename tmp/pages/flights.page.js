"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsPageObject = void 0;
var protractor_1 = require("protractor");
var FlightsPageObject = /** @class */ (function () {
    function FlightsPageObject() {
        this.origin = protractor_1.$("div[aria-label='Flight origin input']");
        this.destination = protractor_1.$("div[aria-label='Flight destination input']");
    }
    FlightsPageObject.prototype.getOrigin = function () {
        return this.origin;
    };
    FlightsPageObject.prototype.getDestination = function () {
        return this.destination;
    };
    return FlightsPageObject;
}());
exports.FlightsPageObject = FlightsPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0cy5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvZmxpZ2h0cy5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFpRjtBQUdqRjtJQUlJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxxQ0FBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCwwQ0FBYyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksOENBQWlCIn0=