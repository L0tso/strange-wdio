exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'trace',
    baseUrl: 'http://localhost',
    services: [['selenium-standalone']],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
