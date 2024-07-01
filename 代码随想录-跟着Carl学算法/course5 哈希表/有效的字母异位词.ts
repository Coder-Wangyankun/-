function isAnagram(s: string, t: string): boolean {
    const resSet = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      // ! 操作符来告诉 TypeScript 这个值不会是 undefined
      resSet[s.codePointAt(i)! - 'a'.codePointAt(0)!]++
    }
    for (let i = 0; i < t.length; i++) {
      resSet[t.codePointAt(i)! - 'a'.codePointAt(0)!]--
    }
    for (let i = 0; i < 26; i++) {
      if (resSet[i] !== 0) return false
    }
    return true
};