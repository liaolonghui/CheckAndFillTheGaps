// 从左侧看树可以看到的节点有哪些

// 遍历一遍树（中左右） 只取每一层第一个遍历到的
function leftoutlineTree(Tree, d=0, outline=[]) { // d标识第几层
	if (!node) return
	if (!outline[d]) {
		outline[d] = node.value
	}
	leftoutlineTree(node.left, d+1, outline)
	leftoutlineTree(node.right, d+1, outline)
	return outline
}



// 如果问题换成“找出每一层的最大值”该如何写？