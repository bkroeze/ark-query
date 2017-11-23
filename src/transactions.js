import json2csv from 'json2csv';
import {arkTimestampToMoment} from './dates';

export function formatTransactions (transactions) {
  const converter = t => {
    const work = {
      timestamp: arkTimestampToMoment(t.timestamp),
      amount: t.amount / 100000000,
      fee: t.fee / 100000000,
      senderId: t.senderId
    };
    if (t.vendorField) {
      work.vendorField = t.vendorField;
    }
    return work;
  };
  return transactions.map(converter);
}

export function transactionsToCSV (transactions) {
  const formatted = formatTransactions(transactions);
  return json2csv({data: formatted, fields: ['timestamp', 'amount', 'fee', 'senderId', 'vendorField']});
}
