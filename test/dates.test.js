import test from 'ava';
import moment from 'moment';
import {toMoment, arkTimestampToMoment, ARK_START_MOMENT} from '../src/dates';

test('toMoment() should make a moment from a date string', t => {
  const result = toMoment('2017-11-20 00:00:00');
  t.is(result.format('MMDDYY'), '112017');
});

test('toMoment() should make a delta date when given a number', t => {
  const expected = moment().subtract(5, 'days').format('MMDDYY');
  t.is(toMoment(5).format('MMDDYY'), expected);
});

test('toMoment() should give ARK start date if null', t => {
  const expected = ARK_START_MOMENT;
  t.is(toMoment().toISOString(), expected.toISOString());
});

test('arkTimestampToMoment() should properly convert', t => {
  const expected = moment(ARK_START_MOMENT).add(1, 'day');
  const result = arkTimestampToMoment(60 * 60 * 24); // 1 day in seconds
  t.is(result.toISOString(), expected.toISOString());
});
