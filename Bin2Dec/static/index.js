{
  function dec2bin(num) {
    num = Number(num)
    let integer = Math.floor(num) // 整数部分
    let fraction = num - integer // 小数部分
    let front = ''
    let back = ''

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

  function convert(num, base) {
    front = []
    back = []
    res = ''
    if (num === 0) {
      return 0
    }
    while (num != 0) {
      front = front + (num % 2)
      num = Math.floor(num / 2)
    }
    res = front.split('').reverse().join('')
    return res
  }

  function isInteger(num) {
    return Math.floor(num) >= num
  }
}
