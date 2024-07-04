// 左闭右开区间
function search(nums: number[], target: number): number {
	let left: number = 0;
	let right: number = nums.length;
	while (left < right) {
		let middle = left + Math.floor((right - left) / 2);
		if (target < nums[middle]) {
			// 右侧是开区间，永远不可能取到该值，
			// 所以用middle更新right没有问题
			right = middle;
		} else if (target > nums[middle]) {
			// 此时target最小的值的可能是middle + 1，
			// 而且左侧是闭区间，可以取到，所以把middle + 1
			// 更新给left
			left = middle + 1;
		} else {
			return middle;
		}
	}
	return -1;
}
