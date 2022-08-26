const fs = require('fs');
function input(message) {

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  return new Promise((resolve, reject) => {
    try {
      readline.question(message, result => {
        resolve(result.trim());
        readline.close();
      });
    } catch (error) {
      reject(error);
    }
  })
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (!err) resolve(JSON.parse(data));  
      else reject(err);
    })
  })
}

const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if(!err) resolve('Succesfully insert data');
      else reject(err)
    })
  })
}

const removeFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, true, function (err) {
      if (!err) resolve(true)
      else reject(err)
    });
  });
}



// write data todo nanti disini
const writeData = async (name) => {
  try {

    const studentPath = './students.json';
    const students = await readFile(studentPath);
    const newData = [...students, { name }]
    const message = await writeFile(studentPath, newData) ;
    console.log(message)
    const dataUpdated = await readFile(studentPath);
    console.log('data updated last', dataUpdated);
  } catch(e) {
    console.log('error', e);
  }  
}



const readOneFile = async (name) => {
  try {

    const studentPath = './students.json';
    const data = await readFile(studentPath);
    console.log('students', data);
    for (const student of data) {

      console.log('name', student.name)
      if(student.name === name)  {
        console.log('students found', name);
        break;
      }
    }
  } catch(err) {
  }
}


const readAllFile = async () => {
  // logic here to get all file
  const studentPath = './students.json';
  const data = await readFile(studentPath);
  for (const student of data) {

    console.log('name', student.name);
  }
}


const updateFile = async (name, newName) => {
  // / logic here for udpate one data
  const studentPath = './students.json';

  let data = await readFile(studentPath);

  const check = Array.from(data).filter(o => o.name === name).length > 0;

  if (!check) {
    console.log('siswa tidek ditemukan!')
    return
  }

  data = data.map(o => {

    if (o.name === name) return { name: newName }
    return o
  })

  const message = await writeFile(studentPath, data);
  console.log('student data has been updated, maybe I can not guarantee');
  console.log(message);
}

const writeNewData = async (data = []) => {

  const studentPath = './students.json';
  const message = await writeFile(studentPath, data);

  console.log(message);
}

const deleteOneData = async (name) => {
  // / logic here for udpate one data
  const studentPath = './students.json';

  const data = await readFile(studentPath);

  const check = Array.from(data).filter(o => o.name === name).length > 0;

  if (!check) {
    console.log('Student not found!')
    return
  }

  while (true) {

    let count = 0;
    let index = -1;

    for (const student of data) {

      if (student.name === name) {

        index = count;
        break;
      }
      count++;
    }

    if (index > 0) data.splice(index, 1);
    else break;
  }

  const message = await writeFile(studentPath, data);
  console.log('student data has been deleted, maybe I can not guarantee');
  console.log(message);
}

const deleteData = async () => {
  
  const studentPath = './students.json';
  const status = removeFile(studentPath);
  if (status) console.log('file has been removed!');
}

async function clearPrompt() {

  await input('press any key to continue: ');
  console.clear();
}

async function init() {

	const studentPath = './students.json';

  let terminate = false;
  while (true) {

    if (!fs.existsSync(studentPath)) {

      const prm = await input('Do you want to create a student.json file? type [Y/n]: ');
    
      if (prm.toLowerCase() === 'y') await writeNewData();
      else {

        console.log('Because students.json does not exist, this application cannot be continued, sorry!');
        break;
      }
    }

    console.log('1. Create Student');
    console.log('2. Search Student');
    console.log('3. Show All')
    console.log('4. Update Name Student')
    console.log('5. Create New Data (Kosong)')
    console.log('6. Delete Name Student')
    console.log('7. Delete All Student')
    console.log('8. exit')

    const xin = await input("Choose number: ");

    console.clear();

    switch (xin.trim()) {

      case '1':

        await writeData(await input('Please enter the name of the new student: '));
        break;

      case '2':

        await readOneFile(await input('Please enter the name of the new student: '));
        break;

      case '3':

        await readAllFile();
        break;

      case '4':

        await updateFile(await input('Please enter the name of the old student: '), await input('Please enter the name of the new student: '));
        break;

      case '5':

        await writeNewData();
        break;

      case '6':

        await deleteOneData(await input('Please enter student name: '));
        break;

      case '7':

        await deleteData();
        break;

      case '8':
        
        terminate = true;
        break;
    
      default:
        
        console.log('Option does not exist, please try again!');
        break;
    }

    if (terminate) break;

    await clearPrompt();
  }
}

init();
