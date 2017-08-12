function curryTwo(fn){
  return (x,y) => {
    if(y === undefined){
      return yHolder => fn(x, yHolder) 
    }
    return fn(x,y)
  }
}

module.exports = curryTwo