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

// ------------------------------------------------------------------
// console.log("%c ammar", "color: red")
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
// // Doesn't affect the main string
// console.log(cr.slice())
// console.log(cr.slice(5));
// console.log(cr.slice(0, 5));
// console.log(cr.slice(-8, -3));
// console.log(cr.repeat(4))
// cr.slice(2, 6);
// console.log(cr)

// let cr = "ammar mohamed mansour ramadan";
// // Doesn't affect the main string
// console.log(cr.split());
// console.log(cr.split(""));
// console.log(cr.split(' '));
// console.log(cr.split(' ',2));
// cr.split(' ',2)
// console.log(cr)

// let cr = "ammar mohamed mansour ramadan";
// console.log(cr.substring());
// console.log(cr.substring(5,13)); //Can Switch Between Start And End
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
// console.log(cr.substr(0,5)) // substr's second value is the number of indexes
// console.log(cr.substr(-7)) // can take a negative value
// console.log(cr.substr(-7,4))
// console.log(cr.substr(4,-7)) // can't switch between values
// console.log(cr.length)
// console.log(cr.substr(28)) // codsiders the first value is start
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

// let st='Elzero Web School'
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

// let arr = ["ammar", "somooo","momo"];
// arr.length=2;
// arr[4]='dfdo';
// console.log(arr);
// let first = arr.shift()
// console.log(first)
// let last = arr.pop()
// console.log(last)

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

// shift, pop, unshift, push, splice affect the original array meanwhile,
//  slice doesn't affect the main array and makes a new one

// let arr = ["ammar",23, "somooo",10, "momo",1000,'10', "ohayo",-5, "yamero"];
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.reverse())

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// let mm = arr.slice(1,-1);
// console.log(mm)
// console.log(arr)
// console.log(arr.slice(1,-1))
// let ss = arr.splice(0, 1, 'fdfd')
// console.log(ss) // return the cut part in an array
// let ss = arr.shift()
// console.log(ss) // return the cut part but not in array
// let ss = arr.pop()
// console.log(ss) //return the cut part but not in array
// let ss = arr.push('gogo')
// console.log(ss) // return the new length of the array
// let ss = arr.unshift('gogo')
// console.log(ss) // return the new length of the array
// console.log(arr)

// let aro = [4, 5, 3];
// let mro = [9, 3, 2];
// console.log(aro + mro)
// console.log(aro.concat(mro))
// let sro = aro + mro;
// console.log(sro)

// let arr = ["ammar", "somooo", "momo", "ohayo", "yamero"];
// console.log(arr)
// arr.splice(0,0,'samir','eren')
// console.log(arr)
// let rm = arr.splice(0,2)
// console.log(rm)
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
// my = my.slice(0, my.indexOf('osama') + 1 )
// console.log(my.reverse())
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
// let count = 0;
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
//             count++;
//             document.write(`<p>-${count} ${myEmployees[j]}</p>`)
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
// let myEmployees = [
//     "amgad",
//     "samah",
//     "ameer",
//     "omar",
//     "othman",
//     "amany",
//     "samia",
// ];

// let newAdmins = myAdmins.slice(0, myAdmins.indexOf("stop"));
// let order = 0;

// document.write(`<div> we have ${newAdmins.length} admins</div><hr>`);

// newAdmins.forEach((admin, index) => {
//     document.write(`
//     <div>
//       <hr>
//       <p>The admin for team ${index + 1} is ${admin}</p>
//       <h3>Team members:</h3>
//     </div>
//   `);

//     let teamMembers = myEmployees.filter((employee) =>
//         employee.startsWith(admin[0])
//     );
//     teamMembers.forEach((member) => {
//         document.write(`<p>${++order}- ${member}</p>`);
//     });

//     order = 0;
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
//  is local and also let. "if" is a block scope also but
// var inside it is global and let is local.

// if a variable is called in the local scope and it's
// declared in the local scope, so it must be declared before calling

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
// console.log(myNumbers.toString())
// let calc= function(one,two,...nums){
//     return one+two+ Number(nums.toString())
// }
// console.log(calc(10,myNumbers[+false],myNumbers[+true]))

// let nums=[1,2,3,4,5,6 ]
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

// let arr = [];
// let newarr = arr.map(e => e + e)
// console.log(newarr)

// console.log(+'a')
// console.log(parseInt('a'))
// console.log(+'2')
// console.log(parseInt('2'))
// console.log(parseFloat('3.99'))
// console.log(parseInt('2.99'))

// The filter() method creates a new array filled with elements
//  that pass a test provided by a function.
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
// console.log(say())
// console.log(say()===window)

//noteeeeeeeeeeeee: when i used arrow function i got the window object
//but when i used normal anonymous function i got the button
// Arrow functions do not have their own `this` value because
// they are designed to maintain the lexical scope of the surrounding context.
// arrow functions inherit the `this` value from the surrounding (lexical) scope in which they are defined.
// This means that the value of `this` inside an arrow function is the same as the value of `this` outside the arrow function.
// document.getElementById("cl").onclick=function(){
//     console.log(this)
// }

// document.getElementById("cl").onclick=()=>{
//     console.log(this)
// }

// let user={
//     age:24,
//     ageInDays:function(){
//         console.log(this)
//         return this.age *365;
//     }}
// console.log(user)
// let newUser = new Object(user)
// console.log(newUser)
// let soUser = Object.create(user)
// console.log(soUser)

// Note the new object take the old object similarly
// but the 'object.create' take the old object as a prototype

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
//   prop2: 200,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 100,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 4,
//   prop3: 3,
// };

// if there two similar named properties it takes the prop in the right source(obj1 or obj2) before target
// noteeeee : the targetObject got affected
// let finalObject= Object.assign(targetObject, obj1, obj2)
// console.log(finalObject)
// console.log(targetObject)

// Also note the 'object.create' take the old object as a prototype
// but assign and new make a similar object

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
// ---------------------------

// targetObject = Object.assign(targetObject,obj1)
// console.log(targetObject)
// -------------------------------------

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

// noteeeee object.create does't accept empty value. it accepts null or object
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

// noteeee : ican edit the element i appended
// let myDiv = document.createElement("div");
// let heading = document.createElement("h2");
// let para = document.createElement("p");
// myDiv.appendChild(heading);
// myDiv.appendChild(para);
// for(let i=0;i<100;i++){
//     heading.innerText = `Kurama ${i+1}`;
//     para.innerText=`Product number ${i+1}`
//     myDiv.className = `product${i+1}`;
//     document.body.appendChild(myDiv.cloneNode(true))
// }

// very important noteeeeeeeeeeeee
// In your code, variables such as myDiv, heading, para, headtext, and paratext are declared and initialized within the loop in each iteration.
//  This means that in each iteration, new instances of these variables are created, effectively overwriting the previous values.
// Within the loop, JavaScript allows you to declare and initialize variables multiple times with the same name because each iteration creates a new scope.
//  Each iteration of the loop creates a separate execution context, and variables declared with let or const are block-scoped,
// meaning they exist only within that specific block or iteration.
// However, outside the loop, redeclaring variables with the same name using let or const would result in an error
// because variables with block scope cannot be redeclared in the same scope.
// To summarize, in your specific code, new variables are created in each iteration within the loop,
// but you cannot redeclare variables with the same name using let or const outside the loop in the same scope.

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
// let myElement=document.querySelector("div")
// // // children gets just the elements
// // // childNodes gets the elements, texts and comments. everything
// console.log(myElement.children)
// console.log(myElement.children[0])
// console.log(myElement.childNodes)
// console.log(myElement.firstChild)
// console.log(myElement.lastChild)
// console.log(myElement.firstElementChild)
// console.log(myElement.lastElementChild)

// let ff = document.getElementById("ff");
// ff.onfocus = function(){
//     ff.setAttribute("placeholder","write here")
// }

// In all three code examples, you will get the same
// result because the `event` object is automatically
// passed as an argument to the event handler function when the event is triggered.

// In the first example, the event handler function
// takes the `event` object as a parameter and logs it
// to the console. This will work as expected and log the `event` object.

// In the second example, the event handler function
// does not explicitly define any parameters.
// However, the `event` object is still automatically
// passed as an argument to the function. By omitting
// the parameter, you are essentially choosing not to
// use the `event` object. However, since the `event`
// object is still available in the function scope, you
// can access it using the `event` keyword. So, you will
// still get the same result when logging `event` to the console.

// In the third example, the event handler function
// takes a parameter named `e`. This parameter is
// used to capture the `event` object. By logging `e`
// to the console, you will get the same result as
// logging `event` in the previous examples.

// So, in all three cases, you will get the same result
// because the `event` object is automatically
// available in the event handler function, whether
// you explicitly define a parameter for it or not.

// let link = document.createElement('a')
// link.setAttribute("href", 'https://google.com')
// link.innerText= 'google'
// document.body.appendChild(link)
// document.links[0].onclick=function(event){
//     console.log(event)
// }

// document.links[0].onmouseenter=function(){
//     console.log(event)
// }

// document.links[0].onmouseenter=function(e){
//     console.log(e)
// }

// document.links[0].onclick=function(e){
//     console.log(e)
//     e.preventDefault();
// }

// let userInput = document.querySelector("[name = 'username']")

// document.forms[0].onsubmit =function (e){
//     let userValid = false;

//     if(userInput.value !== "" && userInput.value.length <= 10){
//         userValid=true
//     }

//     if(userValid === false){
//         e.preventDefault();
//     }
// }

// noteeee : queryselector return the first element found
// and queryselectorall reterns an array called node list
//and getelements by tagname or classname returns and array called html collection
// let myDiv= document.querySelector("div");
// let myDiv = document.querySelector("#elzero");
// let myDiv = document.querySelector(".element")
// let myDiv = document.querySelector("[name='js']")

// let myDiv= document.querySelectorAll("div")[0];
// let myDiv = document.querySelectorAll("#elzero")[0];
// let myDiv = document.querySelectorAll(".element")[0];
// let myDiv = document.querySelectorAll("[name='js']")[0]

// let myDiv = document.getElementById("elzero");
// let myDiv = document.getElementsByClassName("element")[0]
// let myDiv = document.getElementsByTagName("div")[0]
// let myDiv = document.body.firstElementChild
// let myDiv = document.body.childNodes[19]
// let myDiv = document.body.children[0]
// let myDiv = document.body.lastElementChild.previousElementSibling

// console.log(myDiv)

// let myImg = document.querySelectorAll("[decoding= 'async']")
// for (let i =0; i < myImg.length; i++){
//     myImg[i].setAttribute("width","40px")
//     myImg[i].setAttribute("src", "https://m.media-amazon.com/images/M/MV5BM2JjYmUyN2MtODIyOC00ZmNiLWI5YTUtN2NiMWQzNmM3OGU1XkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_.jpg")
//     myImg[i].setAttribute("alt", "Elzero Logo")
// }

// let doller = document.querySelector("[name='dollar']")
// let rs = document.querySelector(".result")

// doller.onkeyup = function(){
//     if(doller.value < 0){
//         doller.value=0
//     }
//     rs.innerText= `{${doller.value}} USD Dollar = {${(doller.value * 30.6).toFixed(2)}} Egyptian Pound`
// }

// doller.onmouseup = function(){
//     if(+doller.value < 0){
//         doller.value=0
//     }
//     rs.innerText= `{${doller.value}} USD Dollar = {${(doller.value * 30.6).toFixed(2)}} Egyptian Pound`
// }

// let doller = document.querySelector("[name='dollar']");
// let rs = document.querySelector(".result");

// function updateResult() {
//     if (doller.value < 0) {
//         doller.value = 0;
//     }
//     rs.innerText = `{${doller.value}} USD Dollar = {${(doller.value * 30.6).toFixed(2)}} Egyptian Pound`;
// }
// doller.addEventListener("keyup", updateResult);
// doller.addEventListener("mouseup", updateResult);

// let first = document.querySelector(".one")
// let second = document.querySelector(".two")
// let script= document.querySelector("script")

// let g = first.className
// first.className=second.className
// second.className=g
// first.innerText += ' '+second.attributes.length
// document.body.appendChild(first)
// document.body.appendChild(script)

// let myImg = document.querySelectorAll("[decoding= 'async']")
// for (let i=0; i<myImg.length; i++){
//     if(myImg[i].hasAttribute("alt")){
//         myImg[i].setAttribute("alt", "old")
//     }else{
//         myImg[i].setAttribute("alt", "Elzero New")
//     }
// }

// let form = document.querySelector("form")
// let ele = document.querySelector("[name='elements']")
// let text = document.querySelector("[name='texts']")
// let choose = document.querySelector("[name='type']")
// let create = document.querySelector("[name='create']")
// let result = document.querySelector("[class = 'results']")
// let di = document.createElement("div")
// let se = document.createElement("section")

// di.className="di";
// se.className="se"
// di.setAttribute("title","Element")
// se.setAttribute("title", "Element")

// form.onsubmit= function(event){
//     event.preventDefault();
//     result.innerHTML="";
//     if(choose.value === "Div" && ele.value >0){
//         for(let i =0; i < ele.value; i++){
//             di.innerText=`${text.value}`
//             di.setAttribute("id",`id-${i+1}`)
//             result.appendChild(di.cloneNode(true))
//         }
//     }else if (choose.value=== "Section" && ele.value >0){
//         for(let i =0; i < ele.value; i++){
//             se.innerText=`${text.value}`
//             se.setAttribute("id",`id-${i+1}`)
//             result.appendChild(se.cloneNode(true))
//         }
//     }

// }

// noteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee the will not cause error it won't just work
// let x = "d"
// for(let i =0; i <x; i++){
//     console.log('ss')
// }

// let myHead = document.createElement("header")
// let myLogo = document.createElement("div")
// let menu = document.createElement("div")
// let myUl = document.createElement("ul")
// myUl.innerHTML="<li>Home</li> <li>About</li> <li>Service</li> <li>Content</li> "
// myLogo.className="logo"
// myUl.className="menu"
// menu.appendChild(myUl)
// myHead.appendChild(myLogo)
// myHead.appendChild(menu)
// myLogo.innerText="Elzero"
// myLogo.style.cssText="color : rgb(2 163 90); width: 40px; font-weight: bold; font-size: 20px;"
// menu.style.cssText=" color: #777070"
// myUl.style.cssText = "list-style: none; display: flex; justify-content:space-between; width: 300px;"
// myHead.style.cssText="display:flex; justify-content: space-between; align-items: center; "

// // ---------------------------------------------------

// let myContent = document.createElement("div")
// myContent.className="container"
// myContent.style.cssText="background-color: #eee; display: flex; flex-wrap: wrap; text-align: center; padding-bottom : 20px;"
// let product = document.createElement("div")
// let proNum = document.createElement("p")
// proNum.style.cssText="font-weight: bold; font-family : Arial"
// product.appendChild(proNum)
// let span = document.createElement("span")
// span.innerText="Product"
// span.style.cssText="font-size : 12px; color : #777070"
// product.appendChild(span)

// product.style.cssText= "width: calc((100% - 80px) / 3); margin:20px 0 0px 20px ; background-color : white; padding: 10px 0; background-color: white "

// for(let i =0; i<15; i++){
//     proNum.innerText= `${i+1}`
//     product.className=`product ${i+1}`
//     myContent.appendChild(product.cloneNode(true))
// }

// // ---------------------------------------------------------

// let foot = document.createElement("div")
// foot.style.cssText="background-color : rgb(2 163 90); padding: 15px; color:white; text-align : center; font-weight : bold "
// foot.innerText="Copyright 2024"

// document.body.appendChild(myHead)
// document.body.appendChild(myContent)
// document.body.appendChild(foot)

// ----------------------------------------------------------------------------------------------------------------------------

// let myDiv = document.querySelector(".one")
// myDiv.toggle("one")

// ----------------------------------------------------

// let addCls = document.querySelector(".classes-to-add");
// let rmCls = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = Current]");
// let show = document.querySelector(".show")
// let span = document.createElement("span")

// addCls.onblur = function(){
//     if(addCls.value != ""){
//         let x = addCls.value.toLowerCase().split(" ")
//         for(let i = 0 ; i < x.length ; i++){
//             current.classList.add(x[i])
//         }
//         addCls.value=""
//     }

// }

// rmCls.onblur = function(){
//     if(rmCls.value != ""){
//         let x = rmCls.value.split(" ")
//         for(let i = 0 ; i < x.length ; i++){
//             current.classList.remove(x[i])
//         }
//         rmCls.value=""
//     }
// }

// addCls.addEventListener("blur", showCls)
// rmCls.addEventListener("blur", showCls)

// function showCls (){
//     show.innerHTML="";
//     if(current.classList[0] != undefined ){
//         let x = Array.from(current.classList)
//         x.sort()
//         for (let i=0; i< x.length; i++){
//             span.innerText= `${x[i]}`
//             show.appendChild(span.cloneNode(true))
//         }
//     }else{
//         span.innerText="No Classes To Show"
//         show.appendChild(span)
//     }

// }

// --------------------------------------------------------------
// let first = document.createElement("div")
// let end = document.createElement("div")
// let myDiv = document.querySelector(".our-element")
// first.innerText="Start"
// end.innerText="End"
// first.className="start"
// end.className="end"
// first.setAttribute("title", "start element")
// end.setAttribute("title", "end element")
// let myP = document.querySelector("p")
// myP.remove()
// myDiv.before(first)
// myDiv.after(end)

// ------------------------------------------------
// let myDiv = document.querySelector("div")
// let word = myDiv.lastChild.data.split("").filter((e)=> e != "\n" && e != " ").join("")
// console.log(word.length)

// ----------------------------------------------------

// document.addEventListener("click", function(e){console.log(`This Is ${e.target.nodeName}`)})
// --------------------------------------------------------

// let gg = document.querySelectorAll("a")[0]
// let zz = document.querySelectorAll("a")[1]
// let fc = document.querySelectorAll("a")[2]
// let li = document.querySelectorAll("a")[3]

// function changePos () {
//     gg.style.cssText = `left : ${screen.width - Math.floor(Math.random()* screen.width)}px; top : ${screen.height - Math.floor(Math.random()* screen.height)}px `
// zz.style.cssText = `left : ${screen.width - Math.floor(Math.random()* screen.width)}px; top : ${screen.height - Math.floor(Math.random()* screen.height)}px `
// fc.style.cssText = `left : ${screen.width - Math.floor(Math.random()* screen.width)}px; top : ${screen.height - Math.floor(Math.random()* screen.height)}px `
// li.style.cssText = `left : ${screen.width - Math.floor(Math.random()* screen.width)}px; top : ${screen.height - Math.floor(Math.random()* screen.height)}px `
// }
// window.setInterval(changePos, 3000)
// document.addEventListener("click", function(e){
//     if(e.target.className === "open" && e.target.innerText != "Elzero"){
//         e.preventDefault()
//     }
// })

// ---------------------------------------------------------

// function sayMsg (user){
//     console.log(`i am message for ${user}`)
// }

// setTimeout(sayMsg, 3000, 'Ammar')

// function sayMsg (user, age){
//         console.log(`i am message for ${user}, his age is ${age}`)
//     }
//     setTimeout(sayMsg, 3000, 'Ammar', 20)

// function sayMsg (user, age){
//         console.log(`i am message for ${user}, his age is ${age}`)
//     }
//     let counter = setTimeout(sayMsg, 3000, 'Ammar', 20)

// let btn = document.querySelector("button")
// btn.onclick = function(){
//     clearTimeout(counter)
// }

// let counter = setInterval(function(){
//     console.log('siii')
// },3000)

// let div = document.querySelector("div")
// function countDown(){
//     div.innerHTML -= 1
//     if (div.innerHTML === "3"){
//         clearInterval(counter)
//     }
// }
// let counter = setInterval(countDown, 2000)

// ------------------------------------------------------------
// console.log(location.hash)
// ------------------------------------------------------

// let x = window.prompt("print Number from -to", "example: 5-20")
// let y = x.replaceAll(" ","").split("-").reduce((acc, e)=> +e > +acc ? e : acc)
// let w = x.replaceAll(" ","").split("-").reduce((acc, e)=> +e < +acc ? e : acc)
// let loopArr = x.replaceAll(" ","").split("-")
// let p = document.createElement("p");
// if(loopArr.length == 2){
//     for(let i = +w; i <= +y; i++){
//         p.innerHTML = `${i}`;
//         document.body.appendChild(p.cloneNode(true));
//     }
// }else{
//     document.write("not valid value")
// }

// ---------------------------------------------------------------

// let form = document.querySelector(".main")
// setTimeout(function(){
//     form.style.display = "inline-flex"
// },3000)
// let btn = document.querySelector("input")
// btn.onclick= function(){
//     form.style.display = "none"
// }
// --------------------------------------------------------
// let counter = document.querySelector("div");
// let x = 10;
// counter.innerHTML = x
// let count = setInterval(function(){
//     counter.innerHTML -=1
//     if(counter.innerHTML == 5){
//         window.open("https://Elzero.org", "_blank", "width= 600, height=600")
//     }else if(counter.innerHTML== 0 ){
//         clearInterval(count)
//     }
// }, 1000)

// ------------------------------------------------------------

// const x = [1,6,5]
// console.log(x)
// x = [1,5,6] //erorrrrr

// x.sort() //trueeee
// console.log(x)

// x[0] = 9 //trueeeee
// console.log(x)

// note : the const keyword in JavaScript provides immutability
//  to variables themselves, not the values they hold.
//   When an array is declared with const,
//    it means you cannot reassign the variable to a new array,
//  but you can still modify the elements of the array.

// --------------------------------------------------------------

// let div= document.querySelector(".exp")
// let lis = document.querySelectorAll("ul li")

// if(window.localStorage.color){
//     div.style.backgroundColor=window.localStorage.color
//     lis.forEach((li)=>{li.classList.remove("active")})
//     document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active")
// }

// lis.forEach((li) => {
//     li.addEventListener("click", function(e){
//         window.localStorage.color=li.dataset.color
//         div.style.backgroundColor=window.localStorage.color
//         lis.forEach((li)=>{li.classList.remove("active")})
//         li.classList.add("active")
//     })
// })

// ------------------------------------------------
// note : location.href and location.assign keep the current page in
// the history while location.replac removes the current page from the history
// --------------------------------------------

// ----------------------------------------------------

// faileddddddddddddddddddddddddddddddddddddddddddddddddd
// important noteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// i got the error because : Form elements must have
//  labels: Element has no title attribute Element has no placeholder attribute
// A form field element should have an id or name attribute

// const addRandomId = function () {
//   let x = Math.floor(Math.random() * 79734539705297 + 1);
//   return x;
// };
// //   -----------------------------------------------------------

// let input = document.querySelector(".input");
// let add = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");
//   // -------------------------------------------------------------

// if (!localStorage.getItem("tasks")) {
//   localStorage.setItem("tasks", JSON.stringify([]));
// }
// let previousStored = JSON.parse(window.localStorage.tasks);
// previousStored.forEach((e)=>{
//   let newTask = document.createElement("div");
//   let command = document.createElement("p");
//   let del = document.createElement("button");
//   del.textContent = "Delete";
//   command.textContent = e.title;
//   newTask.appendChild(command);
//   newTask.appendChild(del);
//   tasks.appendChild(newTask);
//   del.addEventListener("click", function () {
//     let index = previousStored.findIndex((task)=> task.title === command.textContent);
//     if(index != -1){
//       previousStored.splice(index,1)
//     }
//     newTask.remove();

//   });
//   window.localStorage.setItem("tasks", JSON.stringify(previousStored));
// })

// add.addEventListener("click", function () {
//   if (input.value != "") {
//     let storedTasks = JSON.parse(window.localStorage.tasks);
//     storedTasks.push({ title: input.value, id: addRandomId() });
//     window.localStorage.setItem("tasks", JSON.stringify(storedTasks));

//     let newTask = document.createElement("div");
//     let command = document.createElement("p");
//     let del = document.createElement("button");
//     del.textContent = "Delete";
//     command.textContent = input.value;
//     newTask.appendChild(command);
//     newTask.appendChild(del);
//     tasks.appendChild(newTask);
//     del.addEventListener("click", function () {
//       newTask.remove();
//     });
//     input.value = "";
//   }});
// ---------------------------------------------------------------
// noteeeeeeeeeeeeeeeeee
// When you use the cssText property to set the
//  CSS styles for an element, it replaces any existing inline
// styles that were previously applied to that element.
// The cssText property allows you to set the entire inline style for an element,
//  including all the CSS properties and their values.
// it allows you to set or overwrite the entire inline style for an element
//  using a single string value that includes all the CSS properties and their values.

// when you use the cssText property to set the inline style for an element,
// it overwrites any existing inline styles, including those set in the HTML document itself.
// The cssText property replaces the entire inline style for
//  an element with the provided value as a string. This
//   means that any previously set inline styles using dot
//    notation or written directly in the HTML document will be lost.
// If you want to preserve existing inline styles and modify
// specific CSS properties individually, you should use dot
//  notation (e.style.propertyName) to set each property separately, instead of using cssText

// let container = document.querySelectorAll(".container *")
// let fontFamily = document.getElementById("selectFont");
// let fontSize = document.getElementById("size");
// let fontColor = document.getElementById("color")

// if (window.localStorage.getItem('fontColor') && window.localStorage.getItem('fontFamily') && window.localStorage.getItem('fontSize')){
//   container.forEach((e)=>{
//     e.style.cssText=`font-size:${window.localStorage.fontSize}px; color: ${window.localStorage.fontColor}`
//     if( window.localStorage.fontFamily=== 'Open'){
//       container.forEach((e)=>{e.style.cssText = `font-family: Open Sans, sans-serif;`})
//     }else if (window.localStorage.fontFamily === 'Roboto'){container.forEach((e)=>{e.style.cssText = `font-family: Roboto, sans-serif;`})}
//     else{ container.forEach((e)=>{e.style.cssText = `font-family: Cairo, sans-serif;`})}
//   })
// }
// // noteeeeeeeeeeeeeeeeeeee this refered to the event element
// fontColor.onchange = function(){
//   window.localStorage.fontColor = this.value;
//   container.forEach((e)=>{
//     e.style.color=this.value
//   })
// }

// fontSize.onchange = function(){
//   window.localStorage.fontSize = this.value;
//   container.forEach((e)=>{
//     e.style.fontSize = `${this.value}px`
//   })
// }

// fontFamily.onchange = function(){
//   window.localStorage.fontFamily = this.value;
//   if(this.value === 'Open'){
//     container.forEach((e)=>{e.style.cssText = `font-family: Open Sans, sans-serif;`})
//   }else if (this.value === 'Roboto'){container.forEach((e)=>{e.style.cssText = `font-family: Roboto, sans-serif;`})}
//   else{ container.forEach((e)=>{e.style.cssText = `font-family: Cairo, sans-serif;`})}
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// let container = document.querySelectorAll(".container *");
// let fontFamily = document.getElementById("selectFont");
// let fontSize = document.getElementById("size");
// let fontColor = document.getElementById("color");

// if (
//   window.localStorage.getItem("fontColor") &&
//   window.localStorage.getItem("fontFamily") &&
//   window.localStorage.getItem("fontSize")
// ) {
//   container.forEach((e) => {
//     e.style.fontSize = `${window.localStorage.fontSize}px`;
//     e.style.color = window.localStorage.fontColor;

//     if (window.localStorage.fontFamily === "Open") {
//       e.style.fontFamily = "Open Sans, sans-serif";
//     } else if (window.localStorage.fontFamily === "Roboto") {
//       e.style.fontFamily = "Roboto, sans-serif";
//     } else {
//       e.style.fontFamily = "Cairo, sans-serif";
//     }
//   });
// }

// fontColor.onchange = function () {
//   window.localStorage.fontColor = this.value;
//   container.forEach((e) => {
//     e.style.color = this.value;
//   });
// };

// fontSize.onchange = function () {
//   window.localStorage.fontSize = this.value;
//   container.forEach((e) => {
//     e.style.fontSize = `${this.value}px`;
//   });
// };

// fontFamily.onchange = function () {
//   window.localStorage.fontFamily = this.value;
//   container.forEach((e) => {
//     if (this.value === "Open") {
//       e.style.fontFamily = "Open Sans, sans-serif";
//     } else if (this.value === "Roboto") {
//       e.style.fontFamily = "Roboto, sans-serif";
//     } else {
//       e.style.fontFamily = "Cairo, sans-serif";
//     }
//   });
// };

// ------------------------------------------------------------------------------------------------

// let input = document.querySelectorAll(".input")
// input[0].value= window.sessionStorage.first;
// input[1].value= window.sessionStorage.second;
// input[2].value= window.sessionStorage.third;
// input[3].value= window.sessionStorage.fourth;
// input.forEach((e)=>{
//   e.addEventListener("input", function(){
//     window.sessionStorage.setItem(`${this.classList[1]}`, this.value)
//   })
// })

// -------------------------------------------------------------------
// let num = 10;
// console.log(--num)
// console.log(num)
// console.log(num + 3)
// ---------------------------------------------------------
// let myFriends = [
//     "Ahmed",
//     "Sayed",
//     "Ali",
//     ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];
// let [, , , [a, , [, b]]] = myFriends;
// console.log(a);
// console.log(b);
// -----------------------------------------
// let book = "video";
// let video = "book";
// let swap = book;
// book = video;
// video = swap
// console.log(video)
// console.log(book)
// --------------------------------------------
// let book = "video";
// let video = "book";
// [book, video] = [video, book]
// console.log(video)
// console.log(book)
// ---------------------------------------------------- challenge

// let chosen = 3;
// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// let title;
// let age;
// let available;
// let two;
// if(chosen == 1) {
//     [{title, age, available, skills : [, two]}] = myFriends;
// } else if (chosen == 2) {
//     [,{title, age, available, skills : [, two]}] = myFriends;
// }else if (chosen == 3){
//     [, , {title, age, available, skills : [, two]}] = myFriends;
// }

// console.log(title);
// console.log(age);
// available ? console.log("Available") : console.log("Not Available");
// console.log(two);

// ---------------------------------------------------

// -------------------------------------------------challenge
// let myNumbers = [1, 2, 3, 4, 5];
// let [a,,,,e] = myNumbers
// console.log(a * e); // 5
// ------------------------------------------------

// -------------------------------------------------challenge

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let[a, b, c, [d, e, [f, g]]]= mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// ---------------------------------------------------

// -------------------------------------------------challenge
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// arr1 = arr1.concat(arr2, arr3)
// let [c,,, b, , , , a,] = arr1
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed
// ----------------------------------------------------

// -------------------------------------------------challenge
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };

//   let {age: a, working :w, country : c, hobbies : [h1, , h3]} = member
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming
// ------------------------------------------------

// -------------------------------------------------challenge
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };

//   let [o, a] = Object.keys(game.releases);
//   let {title: t, developer: d, releases : {["Oath In Felghana"]: [u, j], ["Ark Of Napishtim"] : {US : u_price, JAP : j_price}, Origin : or}} = game
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style

//   console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games

//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan

//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim

//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD

//   console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD

//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD
// ---------------------------------------------------------------

// // -------------------------------------------Challenge
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log([...n1, ...n2].length * Math.max(...new Set(n2)));
// // ------------------------------------------------

// --------------------------------------------------Challenge
// let setOfNumbers = new Set().add(10)
// console.log(setOfNumbers)
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// console.log(Array.from(setOfNumbers)[2])
// console.log(Math.min(...setOfNumbers))
// console.log([...setOfNumbers][[...setOfNumbers].length -1])
// -------------------------------------------------------

// --------------------------------------------------Challenge

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort())
// ---------------------------------------------------

// --------------------------------------------------Challenge

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// let myMap = new Map(Object.entries(myInfo))
// console.log(myMap)

// let keys = Object.keys(myInfo);
// let myMap = new Map();

// for (let i = 0; i < keys.length; i++) {
//     myMap.set(keys[i], myInfo[keys[i]]);
// }

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has('role'))
// --------------------------------------------------------

// --------------------------------------------------Challenge
// let theNumber = 100020003000;
// console.log(+theNumber.toString().split("000").join(""))
// console.log(+[...new Set(theNumber.toString())].filter((e) => e != '0').join(""))

// -------------------------------------------

// --------------------------------------------------Challenge

// let theName = "Elzero";
// let pushArr= [];
// let unshiftArr = [];
// for(let i =0; i < theName.length; i++) {
//     pushArr.push(theName[i])
//     unshiftArr.unshift(theName[i])
// }
// console.log(theName.split(""))
// console.log([...theName])
// console.log(Array.from(theName))
// console.log(Object.assign([], theName))
// console.log([...new Set(theName)])
// console.log(pushArr)
// console.log(unshiftArr.reverse())
// --------------------------------------------------

// --------------------------------------------------Challenge

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// let myNumbers = chars.filter((e) => !isNaN(e));
// chars = chars.filter((e) => isNaN(e));
// let ssss =[]
// for(let i =0; i < myNumbers.length; i++) {
//     ssss.unshift(chars[i])
// }
// console.log([...ssss.reverse(), ...chars])

// -----------------------------------------------------

// --------------------------------------------------Challenge

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log(numsOne.concat(numsTwo))
// console.log([...numsOne, ...numsTwo])
// console.log(numsOne.push(...numsTwo))
// for(let i =0; i < numsTwo.length; i++){
//     numsOne.push(numsTwo[i])
// }
// console.log(numsOne)
// -------------------------------------------------------
// let practice = "OS1 OS1Os OS2 Os8 Os8Os"
// let practiceRe = /Os[5-9]Os/ig;
// console.log(practice.match(practiceRe))

// let myString = "AaBbcdefG123!234%^&*";
// let atoz = /[a-z]/g;
// console.log(myString.match(atoz));
// let notatoz = /[^a-z]/g;
// console.log(myString.match(notatoz));
// let ATOZ = /[A-Z]/g;
// console.log(myString.match(ATOZ));
// let NOTATOZ = /[^A-Z]/g;
// console.log(myString.match(NOTATOZ));
// let ace = /[ace]/g;
// console.log(myString.match(ace));
// let notace = /[^ace]/g;
// console.log(myString.match(notace));
// let myChars = /[A-Z]/gi;
// console.log(myString.match(myChars));
// let chars = /[a-zA-Z]/g;
// console.log(myString.match(chars));
// let specials = /[^a-z1-9]/ig
// console.log(myString.match(specials))

// ---------------------------------------------------Challenge

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /(https?:\/\/(www.)?)?elzero.org(.+)?/ig; // Write Your Pattern Here
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// ------------------------------------------------------

// ---------------------------------------------------Challenge
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regEx = /\d{4}:\w{2}\d(:\d{4}){6}/g;
// console.log(ip.match(regEx))
// -----------------------------------------------

// ---------------------------------------------------Challenge
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regEx = /Os(\w{2,3})?O/g
// let regEx2 = /\b(Os)\d*O/g
// console.log(specialNames.match(regEx))

// // Output
// // ['Os10O', 'OsO', 'Os100O']
// ---------------------------------------------------

// ---------------------------------------------------Challenge
// let phone = "+(995)-123 (4567)";
// let regEx = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;
// console.log(phone.match(regEx))
// ----------------------------------------------------

// ---------------------------------------------------Challenge

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// /*
// it matches the first element in the input
// (s) may be found or not one time
// */
// -------------------------------------------------------

// ---------------------------------------------------Challenge
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /\d{2}( |\/)(- )?\d{2}( |\/)(- )?\d{2,4}/g; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
// ------------------------------------------------

// ----------------------- OOP--------------------------------

// function Phone(serial, color, price) {
//     this.serial = serial;
//     this.color = color;
//     this.price = price;
// }
// let phone1 = new Phone(123,"red",500);
// console.log(phone1.serial)
// console.log(phone1.color)
// console.log(phone1.price)
// console.log(typeof phone1)
// console.log(typeof Phone)
// -----------------
// function Phone(serial){
//     console.log(this)
// }
// let phone = new Phone(1223)
// console.log(phone)
// console.log(phone.serial) // undefined
// --------------------
// function Phone(serial){
//     console.log(this)
//     this.momo = serial
// }
// let phone = new Phone(1223)
// console.log(phone)
// console.log(phone.momo) // undefined
// ----------------
// function Phone(serial) {
//     console.log(this);
//     this.serial = serial;
// }
// let phone1 = new Phone(234);
// let phone2 = new Phone(23794);
// let phone3 = Phone(1223);
// console.log(phone1);
// console.log(phone2);
// console.log(phone3); //undefined
// console.log(phone1.serial);
// console.log(phone2.serial);
// // console.log(phone3.serial) //error
// console.log(window.serial);
// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);
// console.log(phone3 instanceof Phone);
// console.log(phone1.constructor)
// console.log(phone2.constructor)
// // console.log(phone3.constructor) //error
// console.log(phone1.constructor === Phone)
// console.log(phone2.constructor === Phone)
// // console.log(phone3.constructor === Phone) //error
// ---------------
// function Phone(serial) {
//     this.serial = serial;
//     this.tellSerial = () => `the serial is ${this.serial}`
// }
// let phone1 = new Phone(234);
// let phone2 = new Phone(23794);
// console.log(Phone.prototype)
// // console.log(phone1.prototype) //undefined
// console.log(phone1)
// Phone.prototype.addtitle = () => `u r great`
// console.log(Phone.prototype)
// ------------------
// String.prototype.zFill = function (width) {
//     let theResult = this;
//     while(theResult.length < width) {
//         theResult = `0${theResult}`
//     }
//     return theResult.toString()
// }
// let myString = "123"
// console.log(myString.zFill(5))
// console.log("7473".zFill(5))
// console.log("91938".zFill(5))
// console.log("8898".zFill(5))
// ------------------
// function Phone(serial) {
//     this.serial = serial;
//     this.tellSerial = () => `the serial is ${this.serial}`
// }
// let phone1 = new Phone(234);
// console.log(Phone.prototype) //prototype
// console.log(Phone.__proto__) //function native code
// console.log(phone1.__proto__) //prototype
// // it seems that the the instance has a proto and the constructor has a prototype
// ----------------
// function Phone(serial) {
//     this.serial = serial;
//     this.tellSerial = () => `the serial is ${this.serial}`
//     if (!(this instanceof Phone)) {
//         throw new Error ("Must Be Called With New Keyword");
//     }
// }

// ----------------
// ES6
// function Phone(serial) {
//     this.serial = serial;
//     this.tellSerial = () => `the serial is ${this.serial}`
//     if (!new.target) {
//         throw new Error ("Must Be Called With New Keyword");
//     }
// }
// ------------------
// class Phone {
//     constructor(serial) {
//         this.serial = serial;
//         this.tellSerial = () => `the serial is ${this.serial}`;
//     }
// }
// let phone1 = new Phone(234);

// ----------------------------------------------------Challenge

// class Car {
//     constructor(name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//       }
//       run(){
//         return `Car Is Running`
//       }
//       stop(){
//         return `Car Is Stopped`
//       }
// }

// let car1 = new Car('merry', 'one piece', 3000000);
// let car2 = new Car('merry2', 'one piece2', 3000000);
// let car3 = new Car('merry3', 'one piece3', 3000000);

// console.log(`Car one is ${car1.n} and model is ${car1.m} and price is ${car1.p}`)
// console.log(car1.run())
// ----------------------------------------------------

// ----------------------------------------------------Challenge

// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }

// class Tablet extends Phone {
//     constructor (name, serial, price, size){
//         super(name, serial, price)
//         this.size = size || 'unknown'
//     }
//     fullDetails(){
//         return `${this.name} serial is ${this.serial} and size is ${this.size}`
//     }
// }

//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);

//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9

//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5

//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown
// ------------------------------------------------------------
// ----------------------------------------------------Challenge
// class User {
//     #c;
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card.toString().replaceAll("-","").replace(/(.{4})/g, '$1-');
//this.#c = card.toString().match(/\d{4}/g).join("-")
//     }
//     get showData (){
//         return `Hello ${this.u} the card number is ${this.#c}`
//     }
//   }

//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);

//   console.log(userOne.showData);
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userTwo.showData);
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userThree.showData);
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userOne.c); // Prevent Accessing To Card Property Here
//   // Undefined
// ----------------------------------------------------

// ------------------------------------------------Challenge
// String.prototype.addLove = function(){
//     return `I love ${this} Web Scholl`
// }
// let myStr = "Elzero";
// console.log(myStr.addLove())
// -------------------------------------------------

// --------------------------------------------Challenge
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
//   };

//   Object.defineProperties(myObj, {
//     score:{
//         writable : false,
//         configurable: true,
//         enumerable : true
//     },
//     id: {
//         writable : true,
//         configurable: true,
//         enumerable : false
//     },
//   })
//   delete myObj.country;
//   myObj.score = 500;

//   for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
//   }

//   console.log(myObj);

// Needed Output

//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
// -------------------------------------------------
// let dateNow = new Date()
// console.log(dateNow)
// console.log(Date.now())

// let seconds = ((((Date.now() / 1000) /60) / 60) / 24) / 365
// console.log(seconds)
// ----------------------

// dateNow = new Date()
// console.log(dateNow.getFullYear())
// -----------------------
// let dateNow = new Date()
// let birthday = new Date("Sep 18, 99")
// let dateDiff = (dateNow - birthday) / 1000/60/60/24/365;
// console.log(dateDiff)
// console.log(dateNow.getDate())
// console.log(dateNow.getFullYear())
// console.log(dateNow.getMonth())
// console.log(dateNow.getDay())
// console.log(dateNow.getHours())
// console.log(dateNow.getMinutes())
// console.log(dateNow.getSeconds())
// console.log(dateNow.getTime())
// dateNow.setTime(0)
// console.log(dateNow)
// dateNow.setDate(1)
// console.log(dateNow)
// dateNow.setFullYear(1980)
// console.log(dateNow)
// dateNow.setMonth(11)
// console.log(dateNow)
// dateNow.setHours(11)
// console.log(dateNow)
// dateNow.setMinutes(11)
// console.log(dateNow)
// dateNow.setSeconds(11)
// console.log(dateNow)
// console.log(Date.parse("Sep 18 99"))
// let dateNow = new Date("Sep 18 99")
// console.log(dateNow)

/*
Date.now() => from 1 jan 1970 => mill seconds- for the constructor only
getTime() => from 1 jan 1970 => mill seconds-
getDate() => Day of the current month
getFullYear() => the current year
getMonth() => current Month in index -1 
getDay() => Day of the week - sunday is index 0 -
getHours() => the current hour
getMinutes() => the minute in the current hour
getSeconds() => the current second in the current minute of the current hour
setTime(miliSeconds) => set the beginnig of time calculation
setDate() => set a day of the current month and "0" is 30 of the previous month and "31" is the first day in the next month
setFullYear(,,,) => set the year
setMonth(,,) => set the month in index
setHours(,,) => set the current hour
setMinute() => set the minutes
setSeconds => set seconds
Date.parse("String") => return the time from the beginning of the argument in millinseconds
*/

// -----------------------------------------------Challenge
// let dateNow = new Date("oct 25 1982")
// let dtge = Date.now()
// birthdate= dtge - dateNow
// console.log(`${parseInt(birthdate / 1000)} Seconds`)
// console.log(`${parseInt(birthdate / 1000 / 60)} Minutes`)
// console.log(`${parseInt(birthdate / 1000 /60 / 60)} Hours`)
// console.log(`${parseInt(birthdate / 1000 /60 / 60 / 24)} Days`)
// console.log(`${parseInt(birthdate / 1000 /60 / 60 /24 / 30)} Month`)
// console.log(`${parseInt(birthdate / 1000 /60 / 60 /24 / 365)} Years`)
// ----------------------

// -----------------------------------------------Challenge
// dateForm = new Date("1980-01-01T00:00:10")
// console.log(dateForm)
// ------------------------------------------

// -----------------------------------------------Challenge
// dateForm = new Date();
// dateForm.setDate(0);
// console.log(dateForm);
// let months = [
//     "jan",
//     "Feb",
//     "March",
//     "abril",
//     "May",
//     "june",
//     "july",
//     "August",
//     "Sep",
//     "Oct",
//     "Nov",
//     "dec",
// ];
// console.log(`Previous Month is ${months[dateForm.getMonth()]} and Last Day is ${dateForm.getDate()}`);
// ---------------------------------------------

// -----------------------------------------------Challenge
// dateForm = new Date("1999-09-18T00:00:00")
// console.log(dateForm)

// dateForm = new Date(0)
// dateForm.setHours(0)
// dateForm.setFullYear(1999,8,18)
// console.log(dateForm)

// let dateForm = new Date("1999-9-18")
// console.log(dateForm)
// -----------------------------------------------------

// -----------------------------------------------Challenge
// let Start = new Date().getTime()
// for(let i =0; i < 99999; i++){
//     console.log(i)
// }

// let End = new Date().getTime()
// let result = End - Start;
// console.log(`'Loop Took ${Math.trunc(result)} Milliseconds`)

// p1 = performance.now();
// for(let i =0; i < 99999; i++){m
//     console.log(i)
// }
// p2 = performance.now();

// console.log(`'Loop Took ${Math.trunc(p2 - p1)} Milliseconds`)
// -----------------------------------------

// -----------------------------------------------Challenge
// function* gen(){
//     let a = 14;
//     let add = 140
//     let previous = a + add;
//     yield a
// while(true){
// yield previous
// a = previous
// add += 200
// previous = a + add

// }
// }

// let generator = gen();

// function* numberGenerator() {
//     let currentNumber = 14;
//     let increment = 140;
//     let nextNumber = currentNumber + increment;

//     yield currentNumber;

//     while (true) {
//       yield nextNumber;
//       currentNumber = nextNumber;
//       increment += 200;
//       nextNumber = currentNumber + increment;
//     }
//   }

//   let generator = numberGenerator();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// ---------------------------------------

// ----------------------------------------------Challenge
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
//   }
//   function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
//   }

//   function* genAll() {
//     yield* [...new Set(genNumbers())]
//     yield* [...new Set(genLetters())]
//   }

//   let generator = genAll();

//   console.log(generator.next()); // {value: 1,  done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}
// -----------------------------------------------

// ---------------------------------------------Challenge
// import calc from "./mod-one.js";
// import * as modOne from "./mod-two.js"
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));
// ------------------------------------------

// ---------------------------------------------Challenge

// let response = new XMLHttpRequest();
// response.open("GET", "articles.json");
// response.send();
// response.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(response);
//         setTimeout(() => {
//             console.log("Data Loaded");
//         }, 0);
//         let mainData = JSON.parse(response.responseText);
//         // for(let i =0; i< mainData.length ; i++){
//         //     mainData[i]["Section"] = "All"
//         // }
//         console.log(mainData);
//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData);
//         let div = document.createElement("div");
//         div.id = "data";
//         document.body.appendChild(div);
//         for (let i = 0; i < mainData.length; i++) {
//             let cont = document.createElement("div");
//             cont.innerHTML = `
//             <div>
//                 <h2>Title ${mainData[i]["Title"]}</h2>
//                 <p>Article Content ${mainData[i]["Content"]}</p>
//                 <p>Author: ${mainData[i]["Author"]}</p>
//                 <p>Category: ${mainData[i]["Section"]}</p>
//             </div>`;
//             div.appendChild(cont);
//         }
//     }
// };
// --------------------------------------------------------------

// ---------------------------------------------Challenge

// let myPromise = new Promise((resolve, reject)=>{
//     let myobjs = new XMLHttpRequest()
//     myobjs.open('GET', 'task.json')
//     myobjs.send()
//     myobjs.onload = function(){
//         if(this.readyState === 4 && this.status === 200){
//             let myData = JSON.parse(this.responseText)
//             resolve(myData)
//         }else{
//             reject(new Error("Data Not Found"))
//         }
//     }
// }).then((resolveValue)=>{
//     for(let i = 0; i < 5; i++){
//         let div = document.createElement("div");
//         div.innerHTML = `
//             <div>
//                 <h3>${resolveValue[i]["title"]}</h3>
//                 <p>${resolveValue[i]["description"]}</p>
//             </div>`;
//         document.body.appendChild(div);
//     }
// }).catch((rejectValue)=>{
//     document.write(rejectValue)
// })
// ----------------------------------------------------

// ----------------------------------------------Challenge
// fetch("task.json")
//     .then((resolveValue) => {
//         let myData = resolveValue.json();
//         return myData;
//     })
//     .then((myData) => {
//         for (let i = 0; i < 5; i++) {
//             let div = document.createElement("div");
//             div.innerHTML = `
//             <div>
//                 <h3>${myData[i]["title"]}</h3>
//                 <p>${myData[i]["description"]}</p>
//             </div>`;
//             document.body.appendChild(div);
//         }
//     })
//     .catch((rejectValue) => {
//         document.write(rejectValue);
//     });
// ------------------------------------------------

// End 