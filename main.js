// window.alert("hello from js file");
// document.write("<h1>hello page</h1>");
// console.log("hello from the other side");
// console.error('its error')

// console.table(["ammr", "ammar", "osama"]);
// console.log('%chello from %cthe other side',"color:red; font-size:40px","color:blue; font-size:40px");

// console.log(mimo);
// var mimo='ammar';

// console.log("i am \"ammar\"")
// console.log('ammar \\mohamed')
// console.log('ammar mohamd \
// mansour')

// let [titleContent, decriptionContent, dateContent]= ['El_Zero', 'El_zero web school', '10-25'];

// let container=`<div>
// <h3>${titleContent}</h3>
// <p>${decriptionContent}</P>
// <span>${dateContent}</span>
// </div>`;
// document.write(container.repeat(4))

// console.log(2**4);
// console.log(11%2)

// let a =10;
// console.log(a-=5)
// console.log(a/=2) //a=a/2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d*20);
// console.log(-d + +e*2 +f +g*3)

// console.log(1_000_000);
// console.log(1e6);
// console.log(10**6);
// console.log(1000000.000000);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE)
// console.log((100).toString())
// console.log(100..toString())

// console.log((100.4555).toFixed());
// console.log(100.555555.toFixed());
// console.log(100.555555.toFixed(2));

// console.log(Number('1000'));
// console.log(parseInt('1000'));
// console.log(Number('100 ammar'));
// console.log(parseInt('ammar 100'));
// console.log(parseInt('100 ammar'));

// console.log(parseInt('100.55 ammr'));
// console.log(parseFloat('100.5 ammar'));
// console.log(parseFloat('ammar 100.5 '));

// console.log(Number.isInteger(100));
// console.log(Number.isInteger(100.2));
// console.log(Number.isInteger('100'))

// هنا بيرحع الترو لما تحصل عملية حسابية هيت في الاصل بتطلع nan
// console.log(Number.isNaN('100'));
// console.log(Number.isNaN(100));
// console.log(Number.isNaN('ammmm'));

// console.log(Number.isNaN('ammm'-'100'));
// console.log(Number.isNaN(100-'ammm'));
// console.log(Number.isNaN('ammmm'/100));

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));
// console.log(Math.ceil(99.2));
// console.log(Math.ceil(99.5));
// console.log(Math.floor(99.2));
// console.log(Math.floor(99.5));
// console.log(Math.trunc(99.3))
// console.log(Math.trunc(99.8))

// console.log(2**4);
// console.log(Math.pow(2,4))

// console.log(Math.random())
// console.log(Number.parseInt(Math.random()*100))

// let a=1_00;
// let b=2_00.5;
// let c=1e2;
// let d=2.4;

// console.log(Math.round(Math.min(a,b,c,d)));
// console.log(Math.trunc(b)*25+a*50)
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.ceil(d)-1);
// console.log(Math.trunc(d));
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(Math.floor(b)/Math.ceil(d)));
// console.log(Math.round(b/Math.ceil(d)))

// let name='ammar';
// console.log(name.charAt(2));
// console.log(name.length);
// console.log(name[5]);
// console.log(name.charAt(5))

// let name='  ammar  ';
// console.log(name.trim());
// console.log(name.toUpperCase())
// console.log(name.trim().charAt(2).toUpperCase())

// let cr ="ammar mohamed mansour ramadan"
// console.log(cr.indexOf('mansour'));
// console.log(cr.indexOf('mansourr'));
// console.log(cr.indexOf('mansour', 15));
// console.log(cr.lastIndexOf('mansour'));
// console.log(cr.lastIndexOf('mansour',-8));

// let cr = "ammar mohamed mansour ramadan\n";
// console.log(cr.slice())
// console.log(cr.slice(5));
// console.log(cr.slice(0, 5));
// console.log(cr.slice(-8, -3));
// console.log(cr.repeat(4))

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.split());
// console.log(cr.split(""));
// console.log(cr.split(' '));
// console.log(cr.split(' ',2))

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.substring());
// console.log(cr.substring(5,13));
// console.log(cr.substring(13,5));
// console.log(cr.slice(13,5)); //not working
// console.log(cr.slice(-8));    //working
// console.log(cr.substring(-8))  //0
// console.log(cr.substring(-8,5));   //0=>5

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.length)
// console.log(cr[29])
// console.log(cr[28])
// console.log(cr.slice(-1));
// console.log(cr.substring(cr.length-1))
// console.log(cr.substring(cr.length-7))
// console.log(cr.slice(-7))
// console.log(cr.slice(-7,-3))
// console.log(cr.substring(cr.length-7,cr.length-3))

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.substring(5));
// console.log(cr.substring(0,5));  // 5=>index
// console.log(cr.substr(5,3))  //3 => how many indexes
// console.log(cr.substr(0,5))
// console.log(cr.substr(-7))
// console.log(cr.substr(-7,4))
// console.log(cr.length)
// console.log(cr.substr(29))
// console.log(cr.substring(29))
// console.log(cr.substr(-7,4))

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.includes('r'));
// console.log(cr.includes('ammar',6));
// console.log(cr.startsWith('a'))
// console.log(cr.startsWith('m',6))
// console.log(cr.startsWith('m',5))
// console.log(cr.endsWith('o'))
// console.log(cr.endsWith('n'))
// console.log(cr.endsWith('r',6))
// console.log(cr.endsWith('r',5))  //5=>length not index
// console.log(cr.endsWith('ar',5))

// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase()+a.slice(3,6));
// console.log(a.substr(-4,1).toUpperCase().repeat(8));
// console.log(a.split(' ',1))
// console.log(`${a.substr(0,6)} ${a.substr(-6)}`)

// console.log(`${a.charAt(0).toLowerCase()}${a.slice(1,-1).toUpperCase()}${a.slice(-1)}`)

// console.log(true);
// console.log(!true)
// console.log(!true===false)
// console.log(!(10=='10'))
// console.log(10=='10' && '10'>8)
// console.log(false==0)
// console.log(10=='10' || '10'>8 || 10==4)

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "Egypt";
// if (discount === true) {
//     if (country == "Egypt") {
//         price -= discountAmount + 10;
//     } else {
//         price -= discountAmount;
//     }
// } else {
//     price -= 10;
// }
// console.log(price);

// let name = "mona";
// let gender = "female";
// let age = 70;
// if(gender==='male'){
//     console.log('Mr')
// }else{
//     console.log('Mrs')
// }

//condition ? if true : if false

// gender==='male' ? console.log('Mr') : console.log('Mrs')

// let result = gender==='male' ?'Mr':'Mrs';
// console.log(result)

// console.log(gender==='male' ?'Mr':'Mrs')
// console.log(`hello ${gender==='male' ?'Mr':'Mrs'} ${name}`)

// age < 20
//     ? console.log(20)
//     : age > 20 && age < 60
//     ? console.log("20 t0 60")
//     : console.log("die");

// logical or
// let price=0;
// console.log(price || 200)
// null undefined any falsy valud like 0 false ''
// let price=false;
// console.log(price || 200)

// console.log(Boolean(100))
// console.log(Boolean(-100))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(null))

// nullish coaliscing operator just null + undifined
// let price=null
// console.log(price ?? 200)

// let a = -1;
// if(a<10){
//     console.log(10)
// }else if(a>=10 && a<=40){
//     console.log('10 t0 40')
// }else if(a>40){
//     console.log('>40')
// }else{
//     console.log('unknown')
// }

// a < 10
//     ? console.log(10)
//     : a >= 10 && a <= 40
//     ? console.log("10 t0 40")
//     : a > 40
//     ? console.log(">40")
//     : console.log("unknown");

// let st='Elzero Web School';
// if((st.length*2).toString() ==='34' ){
//     console.log('good')
// }
// if(st.charAt(st.indexOf('W'))==='W'){
//     console.log('good')
// }

// if((typeof st).toUpperCase()!=='string'){
//     console.log('good')
// }
// if(st!=='string'){
//     console.log('good')
// }

// if(typeof(st.length)==='number'){
//     console.log('good')
// }

// if(st.substr(0,6).repeat(2)==='ElzeroElzero'){
//     console.log('good')
// }

// let day=2;    // 2 must be the same type and value
// switch(day){
//     case 0:
//         console.log('saturday')
//         break;
//     case 1:
//         console.log('sunday')
//         break;
//     case 2:
//         console.log('monday')
//         break;
//     default:
//         console.log('soso')
// }

// let day=0;
// switch(day){
//     case 0:
//         console.log('saturday')
//         // break;
//     case 1:
//         console.log('sunday')
//         // break;
//     case 2:
//     case 3:
//     case 4:
//         console.log('monday')
//         break;
//     default:
//         console.log('unknown')
// }

/*the  parameter value is still the moment you start the
switch  and if there is no break 
it will excute all the cases after the first 
right case till you see any break if exists*/

// let day=0;
// switch(day){
//     case 1:
//         console.log('sunday')
//         // break;
//     case 0:
//         console.log('saturday')
//         // break;
//     case 2:
//     case 3:
//     case 4:
//         console.log('monday')
//         // break;
//     default:
//         console.log('unknown')
// }

// let job = "manager";
// let salary = 0;
// if (job === "manager") {
//     salary = 8000;
// } else if (job === "it" || job === "support") {
//     salary = 6000;
// } else if (job === "developer" || job === "designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// };

// let job = "it";
// let salary = 0;
// switch (job) {
//     case "manager":
//         salary = 8000;
//         console.log(salary);
//         break;
//     case "it":
//     case "support":
//         salary = 6000;
//         console.log(salary);
//         break;
//     case "developer":
//     case "designer":
//         salary = 7000;
//         console.log(salary);
//         break;
//     default:
//         salary = 4000;
//         console.log(salary);
//         break;
// }

// let holidays=4;
// let money=0;
// switch(holidays){
//     case 0:
//         money=5000;
//         console.log(`my money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money=3000;
//         console.log(`my money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`my money is ${money}`);
//         break;
//     case 4:
//         money= 1000;
//         console.log(`my money is ${money}`);
//         break;
//     case 5:
//         money=0;
//         console.log(`my money is ${money}`);
//         break;
//     default:
//         money =0;
//         console.log(`my money is ${money}`);
//         break;
// }

// let holidays = 3;
// let money = 0;
// if (holidays == 0) {
//     money = 5000;
//     console.log(`my money is ${money}`);
// } else if (holidays == 1 || holidays == 2) {
//     money = 3000;
//     console.log(`my money is ${money}`);
// } else if (holidays == 3) {
//     money = 2000;
//     console.log(`my money is ${money}`);
// } else if (holidays == 4) {
//     money = 1000;
//     console.log(`my money is ${money}`);
// } else {
//     money = 0;
//     console.log(`my money is ${money}`);
// }

// let arr = ["ammar", "somooo", ["sayed", "ali"]];
// console.log(arr[1][2]);
// console.log(arr[1].charAt(2));
// console.log(arr[2][1]);
// arr[0] = arr[0].toUpperCase();
// arr[2] = arr[2].toString();
// console.log(arr);

// let arr = ["ammar", "somooo","momo"]
// arr[arr.length]='hyuga'
// console.log(arr)
// console.log(arr.length)

// let arr = ["ammar", "somooo","momo"]
// arr.length=2;
// arr[4]='dfdo'
// console.log(arr)

// let arr = ["ammar", "somooo", "momo"];
// console.log(arr);
// arr.unshift('cristiano','salah')
// console.log(arr);
// arr.push('samah','eman')
// console.log(arr);
// let first = arr.shift()
// console.log(arr);
// console.log((first))

// let arr = ["ammar", "somooo", "momo"];
// console.log(arr);
// arr.unshift('cristiano','salah')
// console.log(arr);
// arr.push('samah','eman')
// console.log(arr);
// let first = arr.pop()
// console.log(arr);
// console.log((first))

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// console.log(arr.indexOf("momo"));
// console.log(arr.includes("momo", 2));
// console.log(arr.includes("momo", -2));
// arr.includes("mimi") === true ? console.log("found") : console.log("not found");
// arr.indexOf("momo") === -1 ? console.log("not found") : console.log("found");

// shift, pop, unshift, push, splice affect the original array meanwhile slice doesn't affect the new array and makes a new one

// let arr = ["ammar",23, "somooo",10, "momo",1000,'10', "ohayo",-5, "yamero"];
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.reverse())

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// console.log(arr.slice(1,-1))
// console.log(arr)

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// console.log(arr)
// arr.splice(0,0,'samir','eren')
// console.log(arr)
// arr.splice(0,2)
// console.log(arr)
// arr.splice(0,1,'samir','eren')
// console.log(arr)
// arr.splice(1,1)
// console.log(arr)
// arr.unshift('shosho')
// console.log(arr)

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// let newArr=['dd','cc','ff'];
// let otherArray=['nn','xx','zz'];

// let newArray=arr.concat(newArr,otherArray,'gg','ee',['bbbb','nnn'])
// console.log(newArray)

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// let newArr=['dd','cc','ff'];
// let otherArray=['nn','xx','zz'];

// let newArray=arr.concat(newArr,otherArray,'gg','ee',['bbbb','nnn'])
// console.log(newArray)
// console.log(newArray.join())
// console.log(newArray.join(' ').toUpperCase())

// let zero = 0;
// let counter = 3;
// let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];
// let x = my.splice(0,3)
// console.log(my)
// console.log(x)
// counter++;
// my=my.slice(zero, counter);
// my.reverse()
// console.log(my);
// zero++;
// console.log(my.slice(zero,counter-zero));
// zero++;
// let newz='EL'+ my[counter-zero].substring(zero)
// console.log(newz)
// newz=newz.substr(-zero)
// console.log(newz[zero-zero]+newz[--zero].toUpperCase())

// my=my.slice(zero,counter).concat(my[counter]).reverse()
// console.log(my);
// console.log(my.slice(my.indexOf("Mazero"),counter).reverse());
// console.log(my[--counter].slice(zero,counter)+my[++zero].slice(counter));
// console.log(my[++zero][++counter]+my[zero][++counter]);

// let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];
// let x = my.splice(0,3)
// console.log(my)
// console.log(x)

// let myFriends = ["ahmed",1,5,7,8,9, "mazero", "elham", "osama", "gamal", "ameer"];
// for(let i=0;i<myFriends.length;i++){
//     console.log(myFriends[i])
// }

// for(let i in myFriends){
//     console.log(myFriends[i])
// }

// for(let i=0;i<myFriends.length;i++){
//     if(typeof myFriends[i]=== 'number'){
//         console.log(myFriends[i])
//     }
// }

// let myFriends = ["ahmed",1,5,7,8,9, "mazero", "elham", "osama", "gamal", "ameer"]
// let onlyNames = [];
// for(let i=0;i<myFriends.length;i++){
//     if(typeof myFriends[i]==='string'){
//         onlyNames.push(myFriends[i])
//     }
// }
// console.log(onlyNames)

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(14));
//     console.log(products[i]);
//     console.log("#".repeat(14));
//     console.log('---colors:')
//     for(let j=0;j<colors.length;j++){
//         console.log(colors[j])
//     }
//     console.log('--models')
//     for(let k=0;k<models.length;k++){
//         console.log(models[k])
//     }
// }

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "black"];

// for(let i=0;i<products.length;i++){
//     console.log(products[i])
//     if(products[i]==='pad'){
//         break;
//     }
// }

// let products = ["keyboard", "mouse",3, "pen", "pad",44, "monitor"];
// let colors = ["red", "green", "black"];

// for(let i=0;i<products.length;i++){
//     if(typeof products[i]==='number'){
//         products.splice(i,1)

//     }
//     console.log(products[i])
// }

// let products = ["keyboard", "mouse",6,7, "pen", "pad",3,9, "monitor"];
// let colors = ["red", "green", "black"];

// for(let i=0;i<products.length;i++){
//     if(typeof products[i]==='number'){
//         continue;
//     }
//     console.log(products[i])
// }

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "black"];

// mainloop: for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     nestedLoop: for (let j = 0; j < colors.length; j++) {
//         console.log(`--${colors[j]}`);
//         if (colors[j] === "green") {
//             break mainloop;
//         }
//     }
// }

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let i=0;
// for(;;){
//     console.log(products[i])
//     i++;
//     if(i===products.length) break;
// }

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors=['red','green','blue'];
// let showCount=3;

// document.write(`<h1>Show ${showCount} products</h1>`)
// for(let i=0;i<showCount;i++){
//     document.write(`<div>`)
//     document.write(`<h3>${i+1}-  ${products[i]}</h3>`)
//     for(let j=0;j<colors.length;j++){
//         document.write(`<h4>${colors[j]}</h4>`)
//     }
//     document.write(`<h4>${colors.join(' | ')}</h4>`)
//     document.write(`</div>`)
// }

// let i=0;
// do{
//     i++
//     console.log(i)
// }while(i<10)

// let myAdmins=['ahmed','osama','sayed','stop','samera'];
// let myEmployees=['amgad','samah','ameer','omar','othman','amany','samia'];
// for(let i=0;i<myAdmins.length;i++){
//     myAdmins[i]=myAdmins[i].charAt(0).toUpperCase()+myAdmins[i].substr(1)
// }
// console.log(myAdmins)

// let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
// let myEmployees = ["amgad","samah","ameer","omar","othman","amany","samia"];
// let newAdmins=[];

// for(let i=0;i<myAdmins.length;i++){
//     if(myAdmins[i]!='stop'){
//         newAdmins.push(myAdmins[i]);
//     }else{
//         break;
//     }
// }
// console.log(newAdmins)

// let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
// let myEmployees = ["amgad","samah","ameer","omar","othman","amany","samia"];
// let newAdmins=[];
// for(let i=0;i<myAdmins.length;i++){
//     if(myAdmins[i]==='stop'){
//         break;
//     }else{
//         newAdmins.push(myAdmins[i])
//     }
// }

// document.write(`<div> we have ${newAdmins.length} admins</div><hr>`);
// for(let i=0;i<newAdmins.length;i++){
//     document.write(`<div>
//     <hr>
//     <p>the admin for team ${[i+1]} is ${newAdmins[i]}</p>
//     <h3>Team members:</h3>
//     </div>`)
//     for(let j=0;j<myEmployees.length;j++){
//         if(myEmployees[j][0]===newAdmins[i][0]){
//             document.write(`<p> ${myEmployees[j]}</p>`)
//         }
//     }
// }

// let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
// let myEmployees = ["amgad","samah","ameer","omar","othman","amany","samia"];
// let newAdmins=[];
// let order=0;
// for(let i=0;i<myAdmins.length;i++){
//     if(myAdmins[i]==='stop'){
//         break;
//     }else{
//         newAdmins.push(myAdmins[i])
//     }
// }

// document.write(`<div> we have ${newAdmins.length} admins</div><hr>`);
// for(let i=0;i<newAdmins.length;i++){
//     document.write(`<div>
//     <hr>
//     <p>the admin for team ${[i+1]} is ${newAdmins[i]}</p>
//     <h3>Team members:</h3>
//     </div>`)
//     for(let j=0;j<myEmployees.length;j++){
//         if(myEmployees[j][0]===newAdmins[i][0]){
//             document.write(`<p> ${order+=1}- ${myEmployees[j]}</p>`)
//         }

//     }
//     order=0;

// }

// let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
// let myEmployees = ["amgad","samah","ameer","omar","othman","amany","samia"];

// let newAdmins = myAdmins.slice(0, myAdmins.indexOf('stop'));
// let order = 0;

// document.write(`<div> we have ${newAdmins.length} admins</div><hr>`);

// newAdmins.forEach((admin, index) => {
//   document.write(`
//     <div>
//       <hr>
//       <p>The admin for team ${index + 1} is ${admin}</p>
//       <h3>Team members:</h3>
//     </div>
//   `);

//   let teamMembers = myEmployees.filter(employee => employee.startsWith(admin[0]));
//   teamMembers.forEach((member) => {
//     document.write(`<p>${++order}- ${member}</p>`);
//   });

//   order = 0;
// });

// function sayHello(name,age='unknown'){
//     console.log(`hello ${name} your age is ${age}`)
//     age>20? console.log('you arenot young'):console.log('you are young')
// }

// sayHello('ammar',10)
// function generateYears(start, end, exc){
//     for(let i=start;i<=end;i++){
//         if(i==exc){
//             continue;
//         }
//         console.log(i)
//     }
// }
// generateYears(2000,2024,2023)

// function sayHello(name){
//     return`hello ${name}`
// }
// console.log(sayHello('ammar'))

// function calc(...,

// function calc(...numbers){
//     console.log(Array.isArray(numbers))
//     console.log(numbers)

// }
// console.log(calc(12,34,'ammar',5,4,9))

// function showInfo(us='un',ag='un',rt=0,show='yes',...sk){
//     document.write(`<div>`)
//     document.write(`<h2>welcome, ${us}</h2>`)
//     document.write(`<p>Age: ${ag}</p>`)
//     document.write(`<p>Hour rate: ${rt} $</p>`)
//     show=show.toUpperCase();
//     if(show ==='YES' ||show=== 'Y'){
//         if(sk.length >0){
//             document.write(`<h1>Skills</h1>`)
//             for(let i=0;i<sk.length;i++){
//                 document.write(`<p>${i+1}- ${sk[i]}</p>`)

//             }
//         }else{
//             document.write(`<h1>No Skills</h1>`)
//         }

//     }else{
//         if(sk.length>0){
//             document.write(`<h1>Skills is hidden</h1>`)
//         }else{
//             document.write(`<h1>No Skills</h1>`)
//         }

//     }
//     document.write(`</div>`)

// }

// showInfo('osama',24,100,'y','sprot','writing')

// function showDetails(a, b, c) {
//     let order = [a, b, c];
//     let name='unknown';
//     let age=0;
//     let avail;
//     for (let i = 0; i < order.length; i++) {
//         typeof order[i] === "string"
//             ? (name = order[i])
//             : typeof order[i] === "number"
//             ? (age = order[i])
//             :order[i]===false? avail = order[i]:avail=true;
//     }
//     avail === true
//         ? (avail = "You are available")
//         : (avail = "You are not availabe");
//     document.write(`<div>Hello ${name} Your age is ${age}, ${avail} </div>`)
// }
// showDetails('ammar',false,33);

// function showDetails(a, b, c) {
//     let order = [a, b, c];
//     let name = 'unknown';
//     let age = 0;
//     let avail = 'You are available';

//     for (let i = 0; i < order.length; i++) {
//       if (typeof order[i] === 'string') {
//         name = order[i];
//       } else if (typeof order[i] === 'number') {
//         age = order[i];
//       } else if (order[i] === false) {
//         avail = 'You are not available';
//       }
//     }

//     document.write(`<div>Hello ${name}. Your age is ${age}. ${avail}</div>`);
//   }

//   showDetails('ammar',false, 33);

// let calc=function(num1, num2){
//     return num1+num2
// }

// console.log(calc(2,4))

// setTimeout(function(){
//     console.log('hello')
// },2000)

// function sayHello(){
//     console.log('hello')
// }

// document.getElementById('say').onclick= sayHello()
// document.getElementById('say').onclick=function(){
//     console.log('siiii')
// // }
// function sayMessege(fName, lName){
//     let message=`hello`;
//     function concatMsg (){
//         message=`${message} ${fName} ${lName}`
//     }

//     concatMsg();
//     return message;
// }

// console.log(sayMessege('Ammar','Mohamed'))

// function sayMessege(fName, lName){
//     let message=`hello`;
//     function concatMsg (){
//         return`${message} ${fName} ${lName}`
//     }
//     return concatMsg();;
// }

// console.log(sayMessege('Ammar','Mohamed'))

// function sayMessege(fName, lName) {
//     let message = `hello`;
//     function concatMsg() {
//         function fullName() {
//             return `${fName} ${lName}`;
//         }
//         return `${message} ${fullName()}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessege("Ammar", "Mohamed"));

// let print =function(){
//     return 10;
// }
// console.log(print())

// let print =()=> 10;
// console.log(print())

// let print =()=>{
//     let a=10;
//     return a;
// }
// console.log(print())

// let print =()=> 10;

// let print = function(num){
//     return num;
// };

// let print =(num)=> num;
// let print =num=> num;

// let print = function(num1,num2){
//     return num1+num2;
// };

// let print =(num1,num2)=>num1+num2;

// console.log(print(10,20));

// function is completely block scope even var inside it
//  isn local and also let. if id a block scope also but
// var inside it is global.
// var a=1
// var b=2
// function showText(){
//      a=10;
//      b=20
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)
// showText()

// var x=10;
// if(true){
//     var x=50;
// }
// console.log(x)

// let x=10;
// if(true){
//     var x=50;
// }
// console.log(x)

// let x=10;
// if(true){
//     let x=50;
// }
// console.log(x)

// let x=10;
// if(true){
//  x=50;
// }
// console.log(x)

// var n = 5;

// function square(n) {
//   var ans = n * n;
//   return ans;
// }

// var square1 = square(n);
// var square2 = square(8);

// console.log(square1)
// console.log(square2)

// let a=30
// function parent(){

//     function child(){
//         function grand(){

//             console.log(a)
//         }
//         grand()
//     }
//     child()
// }
// parent()

// let names=function(...names){
//     return `String [${names.join('], [')}] => Done !`
// }
// console.log(names('osama','mohamed','ali','ibrahim'))

// let names=(...names)=>`String [${names.join('], [')}] => Done !`;
// console.log(names('osama','mohamed','ali','ibrahim'))

// let myNumbers=[20,50,10,60];
// let calc =(one,two,...nums)=> one+two+ Number(nums.toString())
// console.log(calc(10,myNumbers[+false],myNumbers[+true]))

// let myNumbers=[20,50,10,60];
// let calc= function(one,two,...nums){
//     return one+two+ Number(nums.toString())
// }
// console.log(calc(10,myNumbers[+false],myNumbers[+true]))

// let nums=[1,2,3,4,5,6]
// let newNums=[];
// for(let i=0;i<nums.length;i++){
//     newNums.push(nums[i]*2)
// }
// console.log(newNums)

// same idea with map

// let addSelf=nums.map(function(element, index, arr){
// return element*2

// console.log(element)
// console.log(index)
// console.log(arr)
// console.log(this)
// },10)
// console.log(addSelf)

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)

// let nums=[1,2,3,4,5,6]
// let addSelf=nums.map(function(element){return element*this},10)
// console.log(addSelf)

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements but returns "empty" in the array
// map() does not change the original array.
//automaticlly the Parameter 'element' is = the current element in the array
// the map method apply the function on every element in the array
//so the parameter in this function is the current element in the array
// let nums=[1,2,3,4,5,6]
// let addSelf=nums.map(element=> element*10)
// console.log(addSelf)

// let nums=[16,25,9]
// let addSelf=nums.map(Math.sqrt)
// console.log(addSelf)

// let nums=[16,25,9]
// let addSelf=nums.map(addition)
// console.log(addSelf)

// function addition(element){
//     return element*2
// }

// let swappingCases='elZERo';
// let invertedNumbers=[1,-10,-20,15,100,-30];
// let ignoreBooleans='Elz123er4o'

// swappingCases= swappingCases.split('')
// let newCases=swappingCases.map(swap)
// console.log(newCases.join(''))

// function swap(element){
//     if(element==element.toUpperCase()){
//         return element.toLowerCase()
//     }else{
//         return element.toUpperCase()
//     }
// }

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15,, 100, -30, 0];
// let ignoreNumbers = "Elz123er4o";

// let newCases = swappingCases
//   .split("")
//   .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
//   .join("");
// console.log(newCases);

// let newNums = invertedNumbers.map((e) => (e === 0 ? (e = 0) : -e));
// console.log(newNums);

// let ignore = ignoreNumbers
//   .split("")
//   .map((e) => (isNaN(+e) == true ? e : ""))
//   .join("");
// console.log(ignore);

// let ignore = ignoreNumbers
//   .split("")
//   .map((e) => (isNaN(e) ? e : ""))
//   .join("");
// console.log(ignore);

// let ignore=ignoreNumbers.split('').map((e)=>{ if(isNaN(+e)){return e}else{return ''}}).join('')
// console.log(ignore)

// console.log(+'a')
// console.log(parseInt('a'))
// console.log(+'2')
// console.log(parseInt('2'))
// console.log(parseFloat('3.99'))
// console.log(parseInt('2.99'))

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
//if there no elements pass the the test the filter outputs an empty array

// let friends = ["ahmed", "sameh", "sayed", "asmaa", "amgad", "israa"];
// let numbers = [11, 20,, 2, 5, 17, 10];

// let addMap=numbers.map(e=>e*2)
// console.log(addMap)

// let addFilter = numbers.filter((e) => e > 5);
// console.log(addFilter);

// let newFriends = friends.filter((e) =>e[0].toUpperCase()=== "A");
// console.log(newFriends);

// let newFriends = friends.filter((e) => e.startsWith('a'));
// console.log(newFriends);

// let newNums=numbers.filter((e)=>e%2==0)
// console.log(newNums)

// let sentence = "I Love Foood Code Too Playing Much";
// let newSentence = sentence
//   .split(" ")
//   .filter((e) => e.length <= 4)
//   .join(" ");
// console.log(newSentence);

// console.log(isNaN('1'))
// console.log(isNaN(1))
// console.log(isNaN('hello'))
// console.log(isNaN(+'hello'))

// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
//   .split("")
//   .map((e) => (isNaN(e) ? e : ""))
//   .join("");
// console.log(ignore);

//when i put a any return value in the true, the output is the same
//when i put value in true and false the output is all
//but when i put '' in the true and false, the output was nothing
//and when i remove the return value, the output is ok
//when i put the return value as e the output is ok
// when i put any value in the false the output is the opposite
//sooo, the filter return works when the rutern inside the function is't ''
//andddd it returns the original data not the return i type. just type anything in the return
// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
//   .split("")
//   .filter((e) => (isNaN(e) ? '' : '.'))
// .join("");
// console.log(ignore);

// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
//   .split("")
//   .filter((e) => (isNaN(e)))
//   .join("");
// console.log(ignore);

// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
//   .split("")
//   .filter(isNaN)
//   .join("");
// console.log(ignore);

// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
//   .split("")
//   .map(isNaN)
//   .join("");
// console.log(ignore);

// let mix = ["A13BS2zx"];
// let nums = mix[0]
//   .split("")
//   .filter((e) => !isNaN(e))
//   .map((e) => e*e);
// console.log(nums);

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
// let nums=[10,20,15,30];

// let add=nums.reduce(function(acc, current, index, arr){
//     console.log(`acc ${acc}`)
//     console.log(`current ${current}`)
//     console.log(`index ${index}`)
//     console.log(`arr ${arr}`)
//     console.log(acc+current)
//     console.log('#############')
//     return acc+current
// },5)
// console.log(add)

// let theBiggest=["Bla","Propaganda","Other","AAA","Battery",'',"Test"];
// let removeChars=["E","@","@","L","Z","@","@","E","R","@","O"];

// let big=theBiggest.reduce(function(acc,current){
//     if (acc.length>current.length){
//         return acc
//     }else{
//         return current
//     }
// },'')
// console.log(big)

// let big=theBiggest.reduce((acc, current)=> acc.length>current.length ? acc : current)
// console.log(big)

// let chars=removeChars.filter(e=>e!='@').join('')
// console.log(chars)

// let chars=removeChars.reduce((acc, ele)=> acc!='@' && ele!='@'? acc+ele : acc)
// console.log(chars)

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// The forEach() method returns undefined

// let allLis=document.querySelectorAll("ul li");
// let allDivs=document.querySelectorAll('.content div');
// allLis.forEach(function(e){
//     e.onclick=function(){
//         //remove active class from all elements
//         allLis.forEach(function(e){
//             e.classList.remove('active')
//         })//add active class to this element
//         this.classList.add('active');
//         //hide all divs
//         allDivs.forEach(function(ele){
//             ele.style.display='none'
//         })
//     }
// })
// console.log(allLis)
// console.log(allDivs)

//in the map() the return is the elements modified  by the callback
//in the filter the return is the elements that pass the test in the callback(that got true)
//in the reduce the return is a singel value due to the process in the call back between every two elements
//in the forEach the return is undefined bur it apply the callback on every element

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter(isNaN)
//   .map((e) => e[+false])
//   .join("")
//   .split("_")
//   .map((e) => {
//     return e.split("").reduce((acc, e) => {
//       return e == e.toUpperCase() ? acc : acc + e;
//     });
//   })
//   .join(" ");
// console.log(solution);

// let user={
//     //properties
//     theName: "Ammar",
//     theAge: 24,
//     //methods
//     sayHello: ()=>"hello"

// };
// console.log(user.sayHello())
// console.log(user.theName)

// let user = {
//   //properties
//   "theName": "Ammar",
//   theAge: 24,
//   country: "Egy",
//   "country of": "Egypt",
//   100: "number",
//   //methods
//   sayHello: () => "hello",
// };
// console.log(user.sayHello());
// console.log(user.theName);
// console.log(user["theName"]);

// console.log(user[100]);
// console.log(user["country of"]);

//you can't access the daynamic property name by dot notation
//if the property name is valid, i can use dot notation or bracket notation
//and if not, i must use bracket notation
// let myVar="country"
// let user={
//     //properties
//     theName: "Ammar",
//     theAge: 24,
//     country: "Egypt",
//     "lName":"mohaemd",
//     //methods
//     sayHello: ()=>"hello"

// };
// console.log(user[myVar])
// console.log(user.lName)
// console.log(user["lName"])
// console.log(user.theName)
// console.log(user["theName"])

//propeties inside object's function if it is't mentioned exactly
//it search about its value in the global scope
//so i must use this.the property
// let user={
//     name:"Ammar",
//     age:24,
//     skills:["html","css","js"],
//     available: false,
//     addresses:{
//         ksa:"Riyadh",
//         Egypt:{
//             one:"cairo",
//             two:"kafr"
//         }
//     },
//     checkAv:function(){
//         return this.available === true ? "available" : "not availble"
//     },

// }
// console.log(user.name)
// console.log(user.skills[1])
// console.log(user.addresses.Egypt.one)
// console.log(user["addresses"]["Egypt"]["two"])
// console.log(user.checkAv())

// let user = new Object({
//     age:30
// });
// console.log(user["age"])
// user.age =20;
// console.log(user)

// function say(){
//     return this
// }
// console.log(say()===window)

//noteeeeeeeeeeeee: when i used arrow function i got the window object
//but when i used normal anonymous function i got the button
// document.getElementById("cl").onclick=function(){
//     console.log(this)
// }

// let user={
//     age:24,
//     ageInDays:function(){
//         console.log(this)
//         return this.age *365;
//     },

// };
// console.log(user.age);
// console.log(user.ageInDays())

// let user ={
//     age:24,
//     doubleAge:function(){
//         return this.age *2
//     }
// }
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge())

// let obj=Object.create({})
// console.log(obj)
// obj.a=100;
// console.log(obj)

// let copyObj=Object.create(user)
// copyObj.age=44
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge())

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 1,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 4,
//   prop3: 3,
// };

// if there two similar named properties it takes the prop in the source(obj1)
// noteeeee : the targetObject got affected
// let finalObject= Object.assign(targetObject, obj1)
// console.log(finalObject)
// console.log(targetObject)

// let finalObject= Object.assign(targetObject, obj1,obj2)
// console.log(finalObject)
// console.log(targetObject)

// let newObject=Object.assign({age:4},obj1)
// console.log(newObject)

//related to the note
// Object.assign(targetObject,obj1)
// console.log(targetObject)
//Erorrrrrrrrrrr
// targetObject.assign(targetObject,obj2)
// console.log(targetObject)

// let name = "ammar";
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name Is ${this.name}, My Age Is ${this.age}, I live in ${this.country}`;
//   },
// };
// console.log(member.name);
// console.log(member.age);
// console.log(member.country);
// console.log(member.fullDetails());

// let objMethodOne={
//     property:"Method One",
// }
// console.log(objMethodOne.property)

// let objMethodTwo=new Object();
// objMethodTwo.property="Method Two"
// console.log(objMethodTwo.property)

// let objMethodThree=Object.create({property:"Method Three"},)
// objMethodThree.property="method three"
// console.log(objMethodThree.property)

// let objMethodFour=Object.assign({},{property:"Method Four"})
// console.log(objMethodFour.property)

// noteeeee object.create does't accept empty value. i accept null or object
//when i use new object it takes an object to inherit. it inherits ust the properties and takes the main protoype
//but when i use Object.create it takes the prototype of the taken one
//and inside this inherited prototype there is also the main one

// let a = 1;
// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };
// let twoNums={
//     e: 5,
//     f: 6,
// };

// finalObj=Object.assign({},{a},threeNums,twoNums)
// console.log(finalObj)

// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };

//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length;

//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//     console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
//     console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

//     // Check If Nested Object Has Property (bestThree)
//     if (Object.values(myFavGames)[i].bestThree!=undefined) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
//       console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
//       console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
//     }else{
//     console.log("#".repeat(20));
//   }}

//the qurey selector just get the first suitable element
//so you can use querry selector all
// let myIdElement=document.getElementById("my-div")
// let myTagElement=document.getElementsByTagName("p")
// let myClassElement=document.getElementsByClassName("my-span")
// let myQueryElement=document.querySelectorAll(".my-span")

// console.log(myIdElement)
// console.log(myTagElement[0])
// myTagElement[1].innerHTML="test"
// console.log(myClassElement[1])
// console.log(myQueryElement[1])

// console.log(document.title)
// console.log(document.body)
// console.log(document.forms[0].one.value)
// console.log(document.links[0].href)

// let myElement=document.querySelector(".js")
// console.log(myElement.innerHTML)
// console.log(myElement.textContent)
// myElement.innerHTML="text from <span> main.js</span> file";
// myElement.textContent="text from <span> main.js</span> file";
// document.images[0].src="https://www.google.com"
// document.images[0].alt="Alternate"
// document.images[0].title="picture"
// document.images[0].id="pic"
// document.images[0].className="img"

// let myLink=document.querySelector(".link")
// console.log(myLink)
// console.log(myLink.getAttribute("class"))
// console.log(myLink.getAttribute("href"))
// myLink.setAttribute("href","https://google.com")
// myLink.setAttribute("title","twitter")

// console.log(document.getElementsByTagName("p")[0].attributes)
// console.log(document.getElementsByTagName("p")[0].attributes)
// let myP=document.getElementsByTagName("p")[0];

// if(myP.hasAttribute("data-src")){
//     console.log('found')
// }else{
//     console.log('not found')
// }

// if(myP.hasAttribute("data-src")){
//     if(myP.getAttribute("data-src")===""){
//         myP.removeAttribute("data-src")
//     }else{
//         myP.setAttribute("data-src","newVal")
//     }
// }else{
//     console.log('not found')
// }

// if(myP.hasAttributes()){
//     console.log('has attributes')
// }else{
//     console.log("does't have")
// }

// if(document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log('has attributes')
// }else{
//     console.log("does't have")
// }

// let myElement=document.createElement("div");
// let myAttr=document.createAttribute("data-custom")
// let myText=document.createTextNode("Product one")
// let myComment = document.createComment("this is div")
// myElement.className="product";
// myElement.setAttributeNode(myAttr)
// myElement.setAttribute("data-test", "testing")

// // append comment to element
// myElement.appendChild(myComment)
// // append text to element
// myElement.appendChild(myText)
// // append element to body
// document.body.appendChild(myElement)



// let myDiv = document.createElement("div");
// let heading = document.createElement("h2");
// let para = document.createElement("p");

// myDiv.className = "product";
// heading.innerText = "Kurama";
// para.innerText =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore optio fugiat inventore dolore, repellendus similique eius nam eveniet? Dicta, ducimus perspiciatis quo odit eaque omnis natus placeat ratione similique nostrum consequatur accusamus reprehenderit aliquideum ex aliquam. Similique, iusto.";
// myDiv.appendChild(heading);
// myDiv.appendChild(para);
// for(let i=0;i<100;i++){
//     heading.innerText = `Kurama ${i+1}`;
//     document.body.appendChild(myDiv.cloneNode(true))
// }



// for(let i=1;i<=100;i++){
// let myDiv = document.createElement("div");
// let heading = document.createElement("h2");
// let para = document.createElement("p");
// let headtext=document.createTextNode(`Kurama ${i}`)
// let paratext=document.createTextNode(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore optio fugiat inventore dolore, repellendus similique eius nam eveniet? Dicta, ducimus perspiciatis quo odit eaque omnis natus placeat ratione similique nostrum consequatur accusamus reprehenderit aliquideum ex aliquam. Similique, iusto.";`)
// heading.appendChild(headtext)
// para.appendChild(paratext)
// myDiv.appendChild(heading)
// myDiv.appendChild(para)
// myDiv.className = `product${i}`;
// document.body.appendChild(myDiv)
// }



