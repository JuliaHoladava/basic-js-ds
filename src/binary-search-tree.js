const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addData(this._root, data);

    function addData(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchData(this._root, data);

      function searchData(node, data) {
        if (node === null) {
          return false;
        }

        if (node.data === data) {
          return true;
        }

        if (data < node.data) {
          return searchData(node.left, data);
        } else {
          return searchData(node.right, data)
        }
      }
  }

  find(data) {
    return findData(this._root, data);

      function findData(node, data) {
        if (node === null) {
          return null;
        }

        if (node.data === data) {
          return node;
        }

        if (data < node.data) {
          return findData(node.left, data);
        } else {
          return findData(node.right, data);
        }
      }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (this._root === null) {
      return;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (this._root === null) {
      return;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};



