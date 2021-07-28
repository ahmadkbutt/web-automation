import { Config, browser } from "protractor";

const globalAny: any = global;

export let config: Config = {
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
