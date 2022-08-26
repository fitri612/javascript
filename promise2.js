const students = './students.json';
// const students = require('./students.json');
const fs = require('fs');


const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(students, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(JSON.parse(data))
      }
    })
  })
}

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(students, JSON.stringify(data), (err) => {
      if(err) {
        reject(err)
      } else {
        resolve("Succesfully insert data");
      }
    })
  })
}

// readFile()
// .then((data) => {
//   console.log('data', data)
//   data.push({ name: 'bayu' })
//   return data
// })
//   .then((newData) => {
//     return writeFile(newData)
//   })
//   .then((mess) => {
//     return readFile()
//   })
//   .then((lastData) => {
//     console.log('lastData', lastData);
//   })
// .catch((err) => {
//   console.log('err', err);
// })



fs.readFile( students, 'utf-8', ((err, data) => {
  const studentsData = JSON.parse(data);
  studentsData.push({ name: 'fitri'})
  fs.writeFile( students, JSON.stringify(studentsData), ((err) => {
    fs.readFile(students, 'utf8', (errFs, dataTerbaru) => {
      
    // Display the file content
        console.log(dataTerbaru);
    });
  }))
}))



// CRUD


