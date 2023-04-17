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

  constructor() {
    this.node = new ListNode();
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.node.value === undefined) this.node.value = value
    else {
      let current = this.node;
      while (current.next !== null) {
        current = current.next;
      }
      const node = new ListNode(value);
      current.next = node;
    }
  }

  dequeue() {
    const res = this.node.value;
    this.node = this.node.next;
    return res;
  }
}

module.exports = {
  Queue
};
