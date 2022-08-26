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


const writeData = async (name) => {
  try {
    const students = await readFile();
    const newData = [...students, { name }]
    const addStudentToDatabase = await writeFile(newData);
    const dataUpdated = await readFile();

    console.log('data updated last', dataUpdated);
    
  } catch(e) {
    console.log('error', e);
  }
}


writeData('Salwa Rohmah')