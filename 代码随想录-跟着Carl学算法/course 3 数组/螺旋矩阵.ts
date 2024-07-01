function generateMatrix(n: number): number[][] {
    let loop = n / 2; // 循环几圈
    let startRow = 0, startCol = 0; // 每循环一圈的起始位置
    let offset = 1; // 右开的占位，不会被循环到
    let mid:number = n / 2; // 矩阵中间的位置，给n是奇数的时候填充中心用
    let count = 1; // 用来给矩阵每一个空格赋值
    let res: number[][] = new Array(n).fill(null).map(() => new Array(n))
    let i: number, j: number;
    while (loop--) {
      i = startRow;
      j = startCol;

      // 下面的4个for就是模拟转了一圈，统一遵循左闭右开原则
      // 填充上行从左到右
      for (j = startCol; j < n - offset; j++) {
        res[startRow][j] = count++
      }
      // 填充右列从上到下
      for (i = startRow; i < n - offset; i++) {
        res[i][j] = count++
      }
      // 填充下行从右到左
      for(; j > startCol; j--) {
        res[i][j] = count++
      }
      // 填充左列从下到上
      for (; i > startRow; i--) {
        res[i][j] = count++
      }

      // 第二圈开始的时候，起始位置要各自加1
      // 例如：第一圈的起始位置是(0, 0 )，第二圈的起始位置是(1, 1)
      startRow++
      startCol++

      // 占位也要加1
      offset++
    }

    // 如果n为奇数，则需要单独给矩阵最中间的位置赋值
    if (n % 2) {
      res[mid][mid] = count
    }
    return res
};