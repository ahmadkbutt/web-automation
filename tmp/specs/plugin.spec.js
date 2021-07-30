"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var chai_1 = require("chai");
var home_page_1 = require("../pages/home.page");
var flights_page_1 = require("../pages/flights.page");
/**
 * this test case validates
 */
var flightsPage;
describe("Flight Search Form Fields", function () {
    var homepage = new home_page_1.HomePageObject();
    before(function () {
        protractor_1.browser.get(homepage.getUrl());
    });
    it("should navigate to flights page", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    homepage.getFlightsLink().click();
                    _a = chai_1.expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.contains("flights");
                    return [2 /*return*/];
            }
        });
    }); });
    flightsPage = new flights_page_1.FlightsPageObject();
    areFormFieldsPresent();
    it("should display return field", function () { return __awaiter(void 0, void 0, void 0, function () {
        var isReturnFieldPresent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flightsPage.isReturnFieldPresent()];
                case 1:
                    isReturnFieldPresent = _a.sent();
                    chai_1.expect(isReturnFieldPresent).to.equal(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should display round trip as trip type", function () { return __awaiter(void 0, void 0, void 0, function () {
        var tripType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flightsPage.getSelectedTripType().getText()];
                case 1:
                    tripType = _a.sent();
                    chai_1.expect(tripType).to.equal("Round-trip");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Step 2', function () {
    var flightsPage = new flights_page_1.FlightsPageObject();
    it('should switch to one-way trip', function () {
        flightsPage.getTripDropDownButton().click();
        var oneWayItem = flightsPage.getTripTypeItem(0);
        oneWayItem.click();
        protractor_1.browser.sleep(5000);
    });
    areFormFieldsPresent();
});
function areFormFieldsPresent() {
    var _this = this;
    it("should display origin field", function () { return __awaiter(_this, void 0, void 0, function () {
        var isOriginFieldPresent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flightsPage.isOriginFieldPresent()];
                case 1:
                    isOriginFieldPresent = _a.sent();
                    chai_1.expect(isOriginFieldPresent).to.equal(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should display destination field", function () { return __awaiter(_this, void 0, void 0, function () {
        var isDestinationFieldPresent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flightsPage.isDestinationFieldPresent()];
                case 1:
                    isDestinationFieldPresent = _a.sent();
                    chai_1.expect(isDestinationFieldPresent).to.equal(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should display departure field", function () { return __awaiter(_this, void 0, void 0, function () {
        var isDepartureFieldPresent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flightsPage.isDepartureFieldPresent()];
                case 1:
                    isDepartureFieldPresent = _a.sent();
                    chai_1.expect(isDepartureFieldPresent).to.equal(true);
                    return [2 /*return*/];
            }
        });
    }); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9wbHVnaW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUNyQyw2QkFBOEI7QUFDOUIsZ0RBQW9EO0FBQ3BELHNEQUEwRDtBQUUxRDs7R0FFRztBQUVILElBQUksV0FBNkIsQ0FBQztBQUVsQyxRQUFRLENBQUMsMkJBQTJCLEVBQUU7SUFDcEMsSUFBTSxRQUFRLEdBQW1CLElBQUksMEJBQWMsRUFBRSxDQUFDO0lBRXRELE1BQU0sQ0FBQztRQUNMLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFOzs7OztvQkFDcEMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNsQyxLQUFBLGFBQU0sQ0FBQTtvQkFBQyxxQkFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOztvQkFBcEMsa0JBQU8sU0FBNkIsRUFBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7U0FDOUQsQ0FBQyxDQUFDO0lBRUgsV0FBVyxHQUFFLElBQUksZ0NBQWlCLEVBQUUsQ0FBQztJQUVyQyxvQkFBb0IsRUFBRSxDQUFDO0lBRXZCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTs7Ozt3QkFDSCxxQkFBTSxXQUFXLENBQUMsb0JBQW9CLEVBQUUsRUFBQTs7b0JBQS9ELG9CQUFvQixHQUFHLFNBQXdDO29CQUNyRSxhQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7O1NBQzdDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTs7Ozt3QkFDMUIscUJBQU0sV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUE1RCxRQUFRLEdBQUcsU0FBaUQ7b0JBQ2xFLGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7O1NBQ3pDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUNmLElBQU0sV0FBVyxHQUFHLElBQUksZ0NBQWlCLEVBQUUsQ0FBQztJQUM1QyxFQUFFLENBQUMsK0JBQStCLEVBQUM7UUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDSixvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFBO0FBR0YsU0FBUyxvQkFBb0I7SUFBN0IsaUJBZUM7SUFkQyxFQUFFLENBQUMsNkJBQTZCLEVBQUU7Ozs7d0JBQ0gscUJBQU0sV0FBVyxDQUFDLG9CQUFvQixFQUFFLEVBQUE7O29CQUEvRCxvQkFBb0IsR0FBRyxTQUF3QztvQkFDckUsYUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztTQUM3QyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7Ozs7d0JBQ0gscUJBQU0sV0FBVyxDQUFDLHlCQUF5QixFQUFFLEVBQUE7O29CQUF6RSx5QkFBeUIsR0FBRyxTQUE2QztvQkFDL0UsYUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztTQUNsRCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7Ozs7d0JBQ0gscUJBQU0sV0FBVyxDQUFDLHVCQUF1QixFQUFFLEVBQUE7O29CQUFyRSx1QkFBdUIsR0FBRyxTQUEyQztvQkFDM0UsYUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztTQUNoRCxDQUFDLENBQUM7QUFDTCxDQUFDIn0=