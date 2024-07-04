namespace binarySearch {
	function search(nums: number[], target: number): number {
		let left: number = 0;
		let right: number = nums.length - 1;
		// 左闭右闭区间
		while (left <= right) {
			let middle: number = left + Math.floor((right - left) / 2);
			if (target < nums[middle]) {
				// 更新右区间，此时已经确定了nums[middle]不等于target，
				// 又是左闭右闭区间，放心的更新区间边界是左边的一位
				right = middle - 1;
			} else if (target > nums[middle]) {
				// 同理
				left = middle + 1;
			} else {
				return middle;
			}
		}
		return -1;
	}
}
