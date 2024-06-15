// tnayin 11,06,24

// 8. nkaragrel f-a vory argumentum stanum e irakan tveri zangvac u veradarcnum e 
// a) true, ete zangvacy parunakum e krknvox WebTransportError, veradarcnume false hakarak depqum

// function f(arr){
//     let arr1 = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr1.includes(arr[i]) === true ){
//             return true
//         }else{
//             arr1.push(arr[i])
//         }
//     }
//     return false
// }

// console.log(f([1,2,3,7]))


// // b) ayn tarreri qanaky voronq zangvacum handipum en mek angam

// let arr = [2,3,4,5,3,2];
// function f(arr){
//     let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//         count++
//     }
    
// }
// return count
// }
// console.log(f(arr))



///~---------------------OBJECT---------------------

// banali:arjeq
   
// const dimord = {};
// console.log(dimord);


// let dimord1 = new Object();
// console.log(dimord1)

// console.log(typeof dimord);       // type object

// dimord.anun = "Petros";
//     dimord.azganun = "Petrosyan";
//     dimord.tariq = 18;
//     dimord["status"] = "Susadmin";
//     console.log(dimord);


//     dimord.anun = "Aram";              // poxum enq name -i anun@
//     dimord["status"] = "IT"
//     console.log(dimord);

// console.log(dimord.anun1);               // ete banalin object-um chka , veradarcnum e undefined
// console.log(dimord.azganun);
// console.log(dimord.status);


// // Create not empty object

// let user = {name:"Armen",age:33, position:"admin"};
// console.log(user);                                      //objectnerum hertakanutyuny kargavorvac che arrayneri nman
// user.pashton = "administrator";
// console.log(user);

// user.x = { 
//     name:{ 
//         age:45,
//         name:"gurgen",

//     }
//      }

//      console.log(user.x.name.name);



//     //  yndunvac e objet nery grel ayspes

//     const obj = {
//         name : 'John',
//         age : 20,
//         city :" New York",
//         addres: "baghramyan",
//         tel:"0946516561"
//     }
//     console.log(obj)


// let obj = { "user name":"Armen",
//              var:15,
//              25:"tariq",
//              15:"hasce"
        
        
//             }

//         console.log(obj),
//     console.log(obj."user name")   

//     console.log(obj["25"])
//     console.log(obj["15"])


//     console.log("15"in obj)  // 15banali bar ka objectum?



//     var x = 15;

//     delete x;
//     console.log(x)



// //new delete property x
// let user = { name:"Armen", x:14}
// console.log(user)
// delete user.xconsole.log(user)



//loop on object// cikler objectum

// let user = {
//     1:"a",
//     2:"b",
//     3:"c",
//     4:"d"
// }
// for( let i =1; i in user; i++){
//     console.log(i + ":" + user)
// }


// for(let i in user){
//     console.log(i + ":" + user[i])
// }



// xndir

// let user = {
//     name:"Emira",
//     azganun:"Harutyunyan",
//     email: "elmiraharutyunyan@gmail.com",
//     cnndyanor: "16"
// }

// for(let i in user){
//     console.log(i + ":" + user[i]);
// }
 
// let user1 = {
//     1:"Emira",
//     2:"Harutyunyan",
//     3:"elmiraharutyunyan@gmail.com",
//     4: "16"
// }

// for(let i = 1; i in user1; i++){
//     console.log(i+ ":"+ user1[i])
// }

// // objectnery erbeq irar havasar chen linum 


// let obj = {a:10,b:20};
// let obj1 = obj;

// obj.b = 30;
// obj1.a = 20;
// console.log(obj.a);
// console.log(obj1.b);  // miayn ays depqum e obj = obj1;; qani voir hascenery nuynn en 



// // object metods  

// let user = {
//     "name":"Aram",
//     "age": 25,                                 //banalu arjeqy karox e linel number
//     "position": "admin",                       //banalu arjeqy karox e linel string
//     "method1" : function(text){              // banalu arjeqy karox e linel function
   
//         //console.log(text + "from" + user.name)
//         console.log(text + "from" + user.name)
//     },

// "method2":function(){console.log(this.age)},    //this-y objet e ,,
// "method3":tariq,

// }

// user.method1("barev")
// user.method2()

//  objectum ete banalin ka talis e arjeqy, ete chka undefined



// var  x = 100;           // let x = 100;
//  function func(){
//     console.log(this.x);
//     console.log(this);

//  }
//  func()


//  xndir,,,   

let book1 = {
    title:"HTML and CSS",
    price:"20$",
    page_num:547,
  getinfo:info
}

let book2 = {
    title:"JS",
    price:"5$",
    page_num:255,
    getinfo:info
}

function info(){
    return this.title +"," + this.price +"," + this.page_num
}
console.log(book2.getinfo())
console.log(book1.getinfo())

book2.getinfo()

// hamematel vor grqi ejern e aveli shat, tpel nra anuny

if(book1.page_num > book2.page_num){
    console.log(book1.page_num)
}else {
    console.log(book2.page_num)
}

// hamematel vor girqn e aveli tank tpel nra anuny


// parsFloat vercnum e tivy nshannery ignore e anum

if(parseFloat(book1.price) > parseFloat(book2.price)){
    console.log(book1.title)
}else{
    console.log(book2.title)
}