const main=document.getElementById('main');
const btnAddUser=document.getElementById('add-user');
const btnDouble=document.getElementById('double');
const btnShowMillionaires=document.getElementById('show-millionaires');
const btnSort=document.getElementById('sort');
const btnCalculateWealth=document.getElementById('calculate-wealth');


let data=[];


getRandomUser();
getRandomUser();
getRandomUser();

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
  displayUser();
};

// display user with default data array
function displayUser(providedData = data){
  //clear main div
  main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';
  providedData.forEach(item => {
      const element=document.createElement('div');
      element.classList.add('person');
      element.innerHTML=`<strong> ${item.name} </strong> ${formatMoney(item.money)}`;
      main.appendChild(element);
  });
}


// format number as money
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' PLN';
}

//double money
function doubleMoney(){
  data = data.map((user)=>{
    return {...user, money: user.money*2};
  });
  console.log('double');
  displayUser();
};

// btn events
btnAddUser.addEventListener('click', getRandomUser);
btnDouble.addEventListener('click', doubleMoney);