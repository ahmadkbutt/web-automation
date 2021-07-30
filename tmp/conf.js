"use strict";
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
        // making chai available globally. in your test use `const expect = global['chai'].expect;`
        protractor_1.browser.waitForAngularEnabled(false);
        var chai = require("chai");
        var chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        globalAny.chai = chai;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBRTdDLElBQU0sU0FBUyxHQUFRLE1BQU0sQ0FBQztBQUVuQixRQUFBLE1BQU0sR0FBVztJQUMxQixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsK0JBQStCO1FBQy9CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsS0FBSztLQUNmO0lBQ0QsWUFBWSxFQUFFO1FBQ1osNkRBQTZEO1FBQzdELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUIsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRTtRQUNULDJGQUEyRjtRQUMzRixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLFdBQVcsRUFBRSxDQUFDO0lBRWQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxvQkFBb0I7S0FDOUI7SUFDRCxrQ0FBa0M7SUFDbEMseUNBQXlDO0lBRXpDLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDO0lBRWxDLGVBQWUsRUFBRSw4QkFBOEI7Q0FDaEQsQ0FBQyJ9