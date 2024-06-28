function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let subLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target) {
        let curLen = j - i + 1
        subLength = curLen < subLength ? curLen : subLength
        break
      }
    }
  }
  return subLength === Infinity ? 0 : subLength
};