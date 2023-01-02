const main=document.getElementById('main');
const btnAddUser=document.getElementById('add-user');
const btnDouble=document.getElementById('double');
const btnShowMillionaires=document.getElementById('show-millionaires');
const btnSort=document.getElementById('sort');
const btnCalculateWealth=document.getElementById('calculate-wealth');


let data=[];

// fetch random user and add money
async function getRandomUser(){
 const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user=data.results[0];
  const newUser={
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random()*1000000)
  }
  addData(newUser);
}

//add new obj to data array
function addData(obj){
  data.push(obj);
};

getRandomUser();
getRandomUser();
getRandomUser();