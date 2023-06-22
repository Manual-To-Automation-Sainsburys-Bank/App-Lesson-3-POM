var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: ["./test/specs/alert.spec.js"],
  services: [
    [ 'browserstack',
      {
        app: "SB_App_Lesson2_Android",
      },
    ],
  ],

  capabilities: [
    {
      maxInstances: 1,
      device: "Google Pixel 7 Pro",
      os_version: "13.0",
      platformName: "Android",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
