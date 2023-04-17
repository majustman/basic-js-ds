const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(data) {
    this = new ListNode();
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (this.value === undefined) this.value = value
    else {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      const node = new ListNode(value);
      current.next = node;
    }
  }

  dequeue() {
    const res = this.value;
    this = this.next;
    return res;
  }
}

module.exports = {
  Queue
};
