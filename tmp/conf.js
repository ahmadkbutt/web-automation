"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
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
        baseUrl: "http://localhost:4200",
    },
    // specs: [ 'specs/**/*spec.js' ],
    //   specs: [ 'specs/**/login.spec.js' ],
    specs: ["specs/**/plugin.spec.js"],
    seleniumAddress: "http://localhost:4444/wd/hub",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBTSxTQUFTLEdBQVEsTUFBTSxDQUFDO0FBRW5CLFFBQUEsTUFBTSxHQUFXO0lBQzFCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE9BQU87SUFDbEIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxTQUFTLEVBQUU7UUFDVCwrQkFBK0I7UUFDL0IsUUFBUSxFQUFFLE1BQU07UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsS0FBSztRQUNULE9BQU8sRUFBRSxLQUFLO0tBQ2Y7SUFDRCxZQUFZLEVBQUU7UUFDWiw2REFBNkQ7UUFDN0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQixPQUFPLEVBQUUsZUFBZTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLFdBQVcsRUFBRSxDQUFDO0lBRWQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRCxrQ0FBa0M7SUFDbEMseUNBQXlDO0lBRXpDLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDO0lBRWxDLGVBQWUsRUFBRSw4QkFBOEI7Q0FDaEQsQ0FBQyJ9