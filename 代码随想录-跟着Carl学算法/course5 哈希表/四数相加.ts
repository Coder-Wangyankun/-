function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let hash = new Map()
  let res = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j]
      let num = hash.get(sum) | 0
      hash.set(sum, ++num)
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let sum = -(nums3[i] + nums4[j])
      if (hash.get(sum)) {
        res += hash.get(sum)
      }
    }
  }	
  return res
};