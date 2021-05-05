const maze = [        // 地图（0可走， 1为墙， 2终点）
	[0, 1, 0, 0, 0, 0],
	[0, 1, 0, 1, 1, 0],
	[0, 0, 0, 1, 0, 1],
	[1, 1, 0, 0, 0, 1],
	[0, 0, 0, 1, 1, 1],
	[2, 1, 0, 0, 0, 0]
]


function rat_in_maze(maze, pos=[0, 0], path=[], transverse=[]) {  // maze地图   pos位置   path路径   transverse到过路径的记录
	const [x, y] = pos
	if (maze[x][y] === 2) { // 到终点了
		return path
	}
	// 记录走过当前位置
	transverse[x*maze[0].length + y + 1] = 1  // 记录第几个点是已经走过的
	// 所有选择
	const choices = [
		[x+1, y], [x-1, y],
		[x, y+1], [x, y-1]
	].filter(chose => {
		const [x, y] = chose
		return x>=0 && y>=0 && x<maze.length && y<maze[0].length
				&& (maze[x][y] !== 1) && (transverse[x*maze[0].length + y + 1] !== 1)
	})
	
	// 递归每一个选择
	for (let [x, y] of choices) {
		const p = rat_in_maze(maze, [x, y], path.concat([[x, y]]), transverse)
		if (p) return p
	}
}

console.log(rat_in_maze(maze))