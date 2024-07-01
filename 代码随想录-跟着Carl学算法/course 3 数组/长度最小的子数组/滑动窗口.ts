function minSubArrayLen(target: number, nums: number[]): number {
  let result = Infinity;
  let sum = 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      let curLen = j - i + 1;
      result = curLen < result ? curLen : result;
      sum -= nums[i++]
    }
  }
  return result === Infinity ? 0 : result
};