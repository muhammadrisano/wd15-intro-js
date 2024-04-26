// number

const nilaiUN = 80
const tinggiBadan = 163.5
const suhuRuangan = -20

// string
const nama = "risano"
const alamat = 'jl. bla bla pekabanru'
const jender = `laki-laki`

const result = nilaiUN.toString()
console.log(result);

// boolean -> true dan false

const isMeried = true
const isLogin = false

// const result = 10 === 11


// function
const sayHelo = ()=>{
  console.log('helo bro...');
}

// array

const hobies = ['ngoding', 'joging', 'gaming']

const nilaiSekolah = [90, 70, 50, 100]

console.log(hobies[1]);

console.log(nilaiSekolah[3]);


// object
const biodata = {
  name: 'risano', 
  email: 'risano@mgail.com',
  age: 7,
  address: 'jl. bla bla pekanbaru'
}
// console.log(biodata['address']);

console.log(biodata.address);


// null
// let products = null

// undifined

let nameGame;

console.log(biodata.meried);


const products =[
  {
    name: 'indomie ayam bayang',
    price: 4000, 
    stock: 2
  },
  {
    name: 'sarimie ayam bawang',
    price: 3500,
    stock: 10
  }
]


console.log(products[1].name);
