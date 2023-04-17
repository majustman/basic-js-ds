const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.node === null) this.node = newNode
    else this.addNode(this.node, newNode);
  }

  addNode(node, newNode) {
    if(newNode.data < node.data) node.left === null ? node.left = newNode : this.addNode(node.left, newNode);
    else node.right === null ? node.right = newNode : this.addNode(node.right,newNode)
  }

  has(data) {
    return this.find(data) === null ? false : true;
  }

  find(data, node = this.node) {
    if(node === null) return null;
    else if(data < node.data) return this.find(data, node.left)
    else if(data > node.data) return this.find(data, node.right)
    else return node;
  }

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }

  removeNode(node, key) {
    if(node === null) return null;
    else if(key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else
    {
         // deleting node with no children
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }

        // deleting node with one children
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }

        // Deleting node with two children
        // minimum node of the right subtree
        // is stored in aux
        var aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
  }

  min() {
    return this.node === null ? null : this.findMinNode(this.node).data;
  }

  findMinNode(node) { return node.left === null ? node : this.findMinNode(node.left) }

  max() {
    return this.node === null ? null : this.findMaxNode(this.node).data
  }

  findMaxNode(node) { return node.right === null ? node : this.findMaxNode(node.right) }
}

module.exports = {
  BinarySearchTree
};