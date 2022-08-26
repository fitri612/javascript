readFile()
.then((data) => {
  console.log('data', data)
  data.push({ name: 'diah' })
  return data
})
  .then((newData) => {
    return writeFile(newData)
  })
  .then((mess) => {
    return readFile()
  })
  .then((lastData) => {
    console.log('lastData', lastData);
  })
.catch((err) => {
  console.log('err', err);
})