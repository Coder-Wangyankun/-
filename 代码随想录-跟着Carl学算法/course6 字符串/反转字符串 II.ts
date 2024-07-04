function reverseStr(s: string, k: number): string {
  let arr = Array.from(s)
  let len = arr.length
  for (let i = 0; i < len; i += 2*k) {
    let left = i;
    // i + k到了下一个k的开始了，所以要 -1
    // len对应末尾的索引，所以是len - 1
    let right = i + k <= len ? i + k - 1 : len - 1;
    // 如果是奇数个元素，中间的元素反转不反转都行
    // 所以left < right或是left <= right都可以
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return arr.join('')
};