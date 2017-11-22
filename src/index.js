import Client from './client';

function balanceCommand (args) {
  const client = new Client(args.main);
  client.getBalance(args.account)
    .catch(e => {
      console.log("Error", e);
    })
    .then(balance => {
      console.log(balance);
    });
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
