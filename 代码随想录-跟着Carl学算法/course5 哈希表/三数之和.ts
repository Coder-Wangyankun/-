function threeSum(nums: number[]): number[][] {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let result: number[][] = [];
  for (let i = 0; i < len - 2; i++) {
    // 如果排序后第一个元素已经大于0，那么不可能凑成三元组
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return result;
}