function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let result: number[] = []
    // 始终使set1是size最小的那一个
    if (set2.size < set1.size) {
      [set1, set2] = [set2, set1]
    }
    // 这样确保遍历set1就行了
    for (let i of set1) {
      if (set2.has(i)) {
        result.push(i)
      }
    }
    return result
};