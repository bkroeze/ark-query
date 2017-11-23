import Client from './client';
import {formatTransactions, transactionsToCSV} from './transactions';

function balanceCommand (args) {
  const client = new Client(args.main);
  client.getBalance(args.account)
    .catch(e => {
      console.log('Error', e);
    })
    .then(response => {
      const {entity} = response;
      console.log(entity.account.balance / 100000000);
    });
}

function accountOptions (yargs) {
  return yargs
    .option('account', {alias: 'a', type: 'string'})
    .option('main', {describe: 'Use Mainnet', alias: 'm', type: 'boolean', default: false})
    .demandOption('account', 'Please provide account');
}

function transactionCommand (args) {
  // const startDate = toDate(args.start);
  // const endDate = toDate(args.end);
  const client = new Client(args.main);
  client.getTransactions(args.account, 0)
    .catch(e => {
      console.log('Error', e);
    })
    .then(response => {
      const {entity} = response;
      if (!entity.success) {
        console.log('Did not get a valid response from the server');
      } else {
        if (args.csv) {
          console.log(transactionsToCSV(entity.transactions));
        } else {
          formatTransactions(entity.transactions).forEach(console.log);
        }
      }
    });
}

function transactionOptions (yargs) {
  return accountOptions(yargs)
    .option('start', {
      type: 'string',
      default: null,
      describe: 'Starting date, in either ISO 8601 format, RFC 822 format, or else as a number which will be interpreted as whole days subtracted from now.  Defaults to "the beginning"'
    })
    .option('end', {
      type: 'string',
      default: 'now',
      describe: 'Ending date, see `start` for format.  Defaults to "now"'
    })
    .option('csv', {
      type: 'boolean',
      default: false,
      describe: 'Output results as CSV'
    });
}

const USAGE = 'Query an ARK account\nUsage: $0 [balance | transactions]';

var args = require('yargs')
  .usage(USAGE)
  .command({
    command: 'balance',
    desc: 'Get balance for ARK account',
    builder: accountOptions,
    handler: balanceCommand
  })
  .command({
    command: 'transactions',
    desc: 'Get transactions on ARK account',
    builder: transactionOptions,
    handler: transactionCommand
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .demandCommand(1, USAGE + '\n\nI need at least one command, such as "balance" or "transactions"')
  .help()
  .parse();

// console.log(args);
