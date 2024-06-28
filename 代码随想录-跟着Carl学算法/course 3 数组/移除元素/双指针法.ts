// carl写的版本
function removeElement(nums: number[], val: number): number {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
  }
  return slow // slow最后会++是没问题的，因为slow代表的是索引
}

// 自己的版本
function removeElement(nums: number[], val: number): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right--]
    } else {
      left++
    }
  }
  return left
}