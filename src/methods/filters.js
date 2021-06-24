// 千分號 (在main.js下做成全域屬性，這樣到任何地方都可以直接使用，只要有產生金額的地方就可以使用)
export function currency (num) {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

// 日期轉換
export function date (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}
