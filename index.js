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



// write data todo nanti disini
const writeData = async (name) => {
  try {
    const students = await readFile();
    const newData = [...students, { name }]
    const addStudentToDatabase = await writeFile(newData) ;

    const dataUpdated = await readFile();

    console.log('data updated last', dataUpdated);
    
  } catch(e) {
    console.log('error', e);
  }
  // panggil add student to database


  
}



const readOneFile = async (name, students) => {
  try {
    const data = await readFile(file); 
    console.log('students', students);
    for (let i = 0;i < students.length; i ++) {
      console.log('name', students[i].name)
     if(students[i].name === name)  {
       console.log('students found', name);
       break;
     }
    }
  } catch(e) {
    
  }
}


const readAllFile = async(file) => {
  // logic here to get all file
}


const updateFile = async () => {
  // / logic here for udpate one data
}

const writeNewData = async () => {
  
}

const deleteOneData = async () => {
  
}



// data semua
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

// cetak read one file