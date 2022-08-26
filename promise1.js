// Asynchronous process
// output kode akan ditunda selama 100 milliseconds

// race conditioning
// setTimeout(() => { console.log("kita pengen jalanin function ini")},500)
// setTimeout(() => { console.log("ini dibutuhkan buat fungsion diatas")},2000)
// setTimeout(() => { console.log("Developer")},1000)



// const functionOne = () => {
//   console.log('fucntion One')
// }

// const functiontwo = (callback) => {
//   console.log('function Two')
//   callback()
// }

// const functionThree = () => {
//   console.log('function Three')
// }

// syncronous
// functionOne();
// functiontwo();
// functionThree();


// asyncronous
// functionOne();
// functiontwo(functionThree);


const axios = require('axios');

const api = 'https://api.lemonilo.com/v1/product/discount/priority?page='
// resolve itu kalo berhasil (then)
// reject itu kalo gagal (catch)
axios.get(api+1)
  .then(({ data }) => {
    if (data.currentPage !== data.totalPages) {
      console.log('data.currentPage', data.currentPage)
      return data.currentPage += 1
    }
  })
  .then((currentPage) => {
    console.log('currentPage', currentPage);
    axios.get(api + currentPage)
    .then(({ data }) => {
      console.log('ini data kedua', data);
    })
  })
  .catch(err => {
    console.log('error', err)
  })



// ini dari BE
const data = [
  {
  productName : 'mie',
  price: 12000
}
]


const DATA_DUMMY = [
  {
  productName: 'productDUmmy 1',
  price: 99999
},
  {
  productName: 'productDUmmy 2',
  price: 10000
}
]


data.forEach((product) => {
  console.log('product name', product.productName)
})