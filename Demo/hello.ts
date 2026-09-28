
// --------------datatypes----------------\
// -----string-----------
let myname:string="Prasad";
let collge:String="srkr";
console.log(`my name is ${myname} my clg is ${collge}`)

// number

let team:number=10;
let time:number=6;

// boolean
let iscompleted:boolean = false;
let isindevelopment:boolean =true;

// undefined
let completiondate:(undefined|string|number)=undefined;
completiondate="20-dec-2026"
console.log(completiondate);

// any
let storeany:any;
storeany="Riya";
storeany=22;
storeany="kerala";
console.log(storeany);

// null
let value:null|string=null;
value="hello"
console.log(value);

//void

function Hello():void{
    console.log("Hello");
}
Hello();

// with return vallue

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(4,8));


// object
const user:{
    name:string;
    age:number;
}={
    name:"Kohli",
    age:37
}
console.log(user);



// arrays
let myskills:string[]=["html","css","js"];
let rating:number[]=[8,6,8];
let sandp:any[]=["html",8,"css",6,"js",8];

myskills.push("typescript");
rating.push(6);
console.log(`my skills are ${myskills}`);
console.log(`my rating ${rating}`);
console.log(`my skills and rate ${sandp}`)

let numbers:Array<number>=[10,20,30];
console.log("numbers are "+ numbers);


// tuple
let interviewdetails:[string,string,number]=["google","sde-1",18];
let [name,role,dur]=interviewdetails;
console.log(name,role,dur);

// nested arrays
let interviewdetails1:[string,string,number][]=[
    ["google","sde-1",18],
    ["microsoft","sde-2",30],
    ["tcs","ninja",45]
]
interviewdetails1.map((interview)=>{
    console.log(interview);
let [name,role,dur]=interview;
console.log(name,role,dur);
})
