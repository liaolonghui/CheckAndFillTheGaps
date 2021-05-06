function reverseBTree(node) {
	if (!node) return
	const tmp = node.left
	node.left = node.right
	node.right = tmp
	reverseBTree(node.left)
	reverseBTree(node.right)
}