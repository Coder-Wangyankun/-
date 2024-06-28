function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left <= right) {
      let middle: number = left + Math.floor((right - left) / 2)
      if (nums[middle] > target) {
        right = middle - 1
      } else if (nums[middle] < target) {
        left = middle + 1
      } else {
        return middle
      }
    }
    return -1
};