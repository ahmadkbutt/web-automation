"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageObject = void 0;
var protractor_1 = require("protractor");
var HomePageObject = /** @class */ (function () {
    function HomePageObject() {
        var _this = this;
        this.getUrl = function () {
            return _this.url;
        };
        this.getFlightsLink = function () {
            return _this.flightsNavItem;
        };
        this.url = 'https://www.kayak.com';
        this.flightsNavItem = protractor_1.$("a[aria-label='Search for flights']");
    }
    return HomePageObject;
}());
exports.HomePageObject = HomePageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvaG9tZS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE4QztBQUU5QztJQUlJO1FBQUEsaUJBR0M7UUFDRCxXQUFNLEdBQUc7WUFDTCxPQUFPLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBQ0QsbUJBQWMsR0FBRztZQUNiLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQTtRQUM5QixDQUFDLENBQUE7UUFSRyxJQUFJLENBQUMsR0FBRyxHQUFHLHVCQUF1QixDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQU9MLHFCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3Q0FBYyJ9