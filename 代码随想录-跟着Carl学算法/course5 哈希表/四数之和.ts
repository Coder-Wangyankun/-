function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b) // 升序排列
    let len = nums.length
    let res: number[][] = []
    for (let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue
      for (let j = i + 1; j < len; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue
        let k = j + 1, p = len - 1
        while (k < p) {
          while (k > j + 1 && k < len && nums[k] === nums[k - 1]) k++;
          if (k >= p) break;
          const sum = nums[i] + nums[j] + nums[k] + nums[p]
          if (sum === target) {
            res.push([nums[i], nums[j], nums[k], nums[p]])
            k++
          } else if (sum > target) {
            p--
          } else {
            k++
          }
        }
      }
    }
    return res
};