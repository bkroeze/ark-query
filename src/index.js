function balanceCommand (args) {
  console.log('balanceCommand', args);
}

function accountOptions (yargs) {
  return yargs
    .option('account', {alias: 'a', type: 'string', default: null})
    .option('main', {describe: 'Use Mainnet', alias: 'm', type: 'boolean', default: false});
}

var args = require('yargs')
  .command({
    command: 'balance',
    desc: 'Get balance for ARK account',
    builder: accountOptions,
    handler: balanceCommand
  })
  .help()
  .parse();

// console.log(args);
