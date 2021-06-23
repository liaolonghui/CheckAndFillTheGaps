// 使用了多少种 HTML 标签？
console.log(new Set([...document.querySelectorAll("*")].map(tag=>tag.tagName)).size)

// 出现最多的三种标签是什么？各出现了多少次？
Object.entries([...document.querySelectorAll("*")].map(tag=>tag.tagName).reduce((ret, i)=>{
  ret[i] = (ret[i] || 0) + 1;
  return ret;
}, {})).sort((a, b)=>(b[1] - a[1])).slice(0, 3)
.map(a=>(`${a[0]}: ${a[1]}次`)).join(', ')