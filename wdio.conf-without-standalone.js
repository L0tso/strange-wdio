exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'trace',
    baseUrl: 'http://localhost',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
