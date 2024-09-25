const testRunners: any = {
  mocha: {
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
  },
  jasmine: {
    framework: 'jasmine',
    jasmineOpts: {
      defaultTimeoutInterval: 60000,
    },
  },
};

export default testRunners[process.env.RUNNER || 'jasmine'];
