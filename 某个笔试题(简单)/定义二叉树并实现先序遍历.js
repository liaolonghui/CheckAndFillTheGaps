function Node(key) {
  this.key = key
  this.left = null
  this.right = null
}
const rootNode = new Node('A')
rootNode.left = new Node('B')
rootNode.right = new Node('C')
rootNode.left.left = new Node('D')
rootNode.left.right = new Node('E')

// 前序遍历
function DLR(root) {
  if (!root) return
  console.log(root.key)
  DLR(root.left)
  DLR(root.right)
}

DLR(rootNode)
