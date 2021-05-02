const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

// 希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，
// 也称为缩小增量排序，同时该算法是冲破O(n²）的第一批算法之一

// 选择一个增量序列t1，t2，…，tk，其中t1>t2>...，tk=1；
// 按增量序列个数k，对序列进行k 趟排序；
// 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
// 仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

function shellSort (arr) {
	let len = arr.length;
	// gap 即为增量
	for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < len; i++) {
		    let j = i;
		    let current = arr[i];
		    while(j - gap >= 0 && current < arr[j - gap]) {
				arr[j] = arr[j - gap];
				j = j - gap;
		    }
		    arr[j] = current;
		}
	}
}

shellSort(arr)
console.log(arr)