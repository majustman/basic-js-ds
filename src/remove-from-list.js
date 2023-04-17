const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.next === null) return l.value === k ? null : l;
  let head = l;
  let current = l;
  let prev = null;
  let index = 0;
  while (current.next !== null) {
    if (current.value === k && index === 0) {
      prev = current;
      current = current.next;
      head = current;
      prev.next = null;
      prev = null;
    } else if (current.value === k && index !== 0) {
      prev.next = current.next;
      const tmp = current;
      current = current.next;
      tmp.next = null;
    } else {
      prev = current;
      current = current.next;
      index++;
    }
  }
  if (current.value === k) {
    prev.next = null;
  }
  return head;
}

module.exports = {
  removeKFromList
};
