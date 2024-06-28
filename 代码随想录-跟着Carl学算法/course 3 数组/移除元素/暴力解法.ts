function removeElement(nums: number[], val: number): number {
  let len: number = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j]
      }
      i-- // 因为for循环末尾i会++，所以要--
      len--
    }
  }
  return len
};