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
exports.config = void 0;
var protractor_1 = require("protractor");
var globalAny = global;
exports.config = {
    allScriptsTimeout: 110000,
    framework: "mocha",
    capabilities: {
        browserName: "chrome",
    },
    mochaOpts: {
        // Some reasonable mocha config
        reporter: "spec",
        slow: 3000,
        ui: "bdd",
        timeout: 30000,
    },
    beforeLaunch: function () {
        // If you're using type script then you need compiler options
        require("ts-node").register({
            project: "tsconfig.json",
        });
    },
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function () {
            var chai, chaiAsPromised;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // making chai available globally. in your test use `const expect = global['chai'].expect;`
                    return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        // making chai available globally. in your test use `const expect = global['chai'].expect;`
                        _a.sent();
                        chai = require("chai");
                        chaiAsPromised = require("chai-as-promised");
                        chai.use(chaiAsPromised);
                        globalAny.chai = chai;
                        return [2 /*return*/];
                }
            });
        });
    },
    // Keep max browsers running to 1 because
    // multiple browsers running at once was pausing/failing for no reason
    maxSessions: 1,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    params: {
        baseUrl: "https://kayak.com/",
    },
    // specs: [ 'specs/**/*spec.js' ],
    //   specs: [ 'specs/**/login.spec.js' ],
    specs: ["specs/**/plugin.spec.js"],
    seleniumAddress: "http://localhost:4444/wd/hub",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZDO0FBRTdDLElBQU0sU0FBUyxHQUFRLE1BQU0sQ0FBQztBQUVuQixRQUFBLE1BQU0sR0FBVztJQUMxQixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsK0JBQStCO1FBQy9CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsS0FBSztLQUNmO0lBQ0QsWUFBWSxFQUFFO1FBQ1osNkRBQTZEO1FBQzdELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUIsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRTs7Ozs7O29CQUNULDJGQUEyRjtvQkFDM0YscUJBQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBRDFDLDJGQUEyRjt3QkFDM0YsU0FBMEMsQ0FBQTt3QkFDcEMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdkIsY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN6QixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7S0FDdkI7SUFFRCx5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLFdBQVcsRUFBRSxDQUFDO0lBRWQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxvQkFBb0I7S0FDOUI7SUFDRCxrQ0FBa0M7SUFDbEMseUNBQXlDO0lBRXpDLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDO0lBRWxDLGVBQWUsRUFBRSw4QkFBOEI7Q0FDaEQsQ0FBQyJ9