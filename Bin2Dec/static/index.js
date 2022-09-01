{
  function dec2bin(num) {
    /**
     * 十进制转换为二进制
     * @Param num - 待转换数字
     */
    num = Number(num)
    let integer = Math.floor(num) // 整数部分
    let fraction = num - integer // 小数部分
    let front = '' // 整数转化结果
    let back = '' // 小数转换结果

    if (num === 0) {
      return 0
    }

    // 整数部分
    while (integer) {
      front = (integer % 2) + front
      integer = Math.floor(integer / 2)
    }

    if (integer === num && fraction === 0) {
      //  num 是整数
      return front
    } else {
      // 小数部分
      while (fraction != 0) {
        let temp = Math.floor(fraction * 2)
        back = back + temp
        fraction = fraction * 2 - temp
      }
      return front + '.' + back
    }
  }

  function bin2dec(num) {
    /**
     * 二进制转换为十进制
     * @Param num - 待转换数字
     */
    let numstrs = num.toString().split('.')
    let front = numstrs[0].split('')
    let back = numstrs.length === 2 ? numstrs[1].split('') : []
    let result = 0

    for (let i = 0; i < front.length; i++) {
      result += parseInt(front[i]) * Math.pow(2, front.length - i - 1)
    }

    if (back.length) {
      for (let i = 0; i < back.length; i++) {
        result += parseInt(back[i]) * Math.pow(2, -i - 1)
      }
    }
    return result
  }
}
