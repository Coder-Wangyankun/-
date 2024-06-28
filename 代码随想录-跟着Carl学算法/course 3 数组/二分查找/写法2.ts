function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length;
  while (left < right) {
      let middle = left + Math.floor((right - left) / 2)
      if (nums[middle] > target) {
          right = middle
      } else if (nums[middle] < target) {
          left = middle + 1
      } else {
          return middle
      }
  }
  return -1
};