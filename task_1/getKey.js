const getKey = (arr) => {
  const key = arr[0].split('').filter(el => el !== '-').join('')
  if(arr.length === 1) {
    return key
  }
  const value = arr[1]
  console.log(key, value);
  return {name: key, value: Number(value)}
}

module.exports = {
  getKey
}