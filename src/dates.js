import moment from 'moment';

/**
 * Date of ARK Mainnet go-live
 * @type {Moment}
 */
export const ARK_START_MOMENT = moment('2017-03-21 00:00:00');

/**
 * Test whether a string is numeric
 * @param  {String}  n string to test
 * @return {Boolean} true if numeric
 */
export function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Converts a string into a `moment`
 * @param  {String} work date string to convert
 * @return {moment} date object.
 */
export function toMoment (work) {
  if (!work) {
    return ARK_START_MOMENT;
  } else if (isNumeric(work)) {
    const delta = parseInt(work, 10);
    return moment().subtract(delta, 'days');
  } else {
    return moment(work);
  }
}

/**
 * Ark timestamps are seconds from the "epoch", which is the mainnet go-live date.
 * @param  {number} seconds timestamp
 * @return {moment} true date
 */
export function arkTimestampToMoment (seconds) {
  return moment(ARK_START_MOMENT).add(seconds, 'seconds');
}
