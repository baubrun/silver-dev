import _ from 'lodash';

/**
 *
 * @param {any} items
 * @param {string} sortKey
 * @param {'asc'|'desc'}sortOrder
 * @returns any[]
 */
export const sorter = (items, sortKey, sortOrder) => {
  return _.orderBy(items, [sortKey], [sortOrder]);
};
