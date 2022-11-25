const firebaseConfig = {
  apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
  authDomain: "formdata-b7401.firebaseapp.com",
  projectId: "formdata-b7401",
  storageBucket: "formdata-b7401.appspot.com",
  messagingSenderId: "44569804899",
  appId: "1:44569804899:web:ffe6af4efafd322d09b856"
};
 
// const firebaseConfig = {
//   apiKey: proccess.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: proccess.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: proccess.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: proccess.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
 

firebase.initializeApp(firebaseConfig);
var firestore= firebase.firestore()

// console.log(ret);

//var to access database  collection
const db= firestore.collection("date");
// let linp= document.getElementById('lin');
// linp.addEventListener('click',(e)=>{
// e.preventDefault();
// let username=document.getElementById("username").value;
// let password=document.getElementById("password").value;

// if(username!=document.getElementById('username1').value||password!=document.getElementById('password1').value )
// {alert("fill correct username and password...");return ;}
// // else { <a href="data.html">This is the link.</a>  }
// });


let submitButton =document.getElementById('submit');
submitButton.addEventListener("click",(e) => {
e.preventDefault();

let khata=document.getElementById('khata').value;
let block=document.getElementById('block').value;
let nam=document.getElementById('nam').value;
let phone_number=document.getElementById('phone_number').value;
let father_name=document.getElementById('father_name').value;
let udeshya=document.getElementById('udeshya').value;
let gram=document.getElementById('gram').value;

let byaj=document.getElementById("byaj").value;
let panchayat=document.getElementById("panchayat").value;
let sector=document.getElementById("sector").value;
let total_loan_amount=document.getElementById("total_loan_amount").value;
let dar_byaj=document.getElementById("dar_byaj").value;
let byaj1=document.getElementById("byaj1").value;
let mool=document.getElementById("mool").value;
let total=document.getElementById("total").value;
let dasti_mang_notice=document.getElementById("dasti_mang_notice").value;
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let UniqueId=document.getElementById("UniqueId").value;
 
  
if(username!=document.getElementById('username1').value||password!=document.getElementById('password1').value ){alert("fill all data"); return;}
 
if(khata.length!=12)alert("khata not correct");
else if(block==""||typeof(block)!="string"){if(block=="")alert("fill the block");else alert("enter only alphabet for block"); }
else if(nam==""||typeof(nam)!="string"){if(nam=="")alert("fill the nam");else alert("enter only alphabet for nam"); }
else if(phone_number==""||phone_number.length<10){if(phone_number=="")alert("fill the phone_number");else alert("phone_number less than 10 digit "); }
else if(father_name==""||typeof(father_name)!="string"){if(father_name=="")alert("fill the father_name");else alert("enter only alphabet for father_name"); }
else if(nam==""||typeof(nam)!="string"){if(nam=="")alert("fill the nam");else alert("enter only alphabet for nam"); }
else if(gram==""||typeof(gram)!="string"){if(gram=="")alert("fill the gram");else alert("enter only alphabet for gram"); }
else{
 console.log("sset user")
document.getElementById('fixeduser').innerHTML=document.getElementById('username1').value;
  
  // var ret=parseInt(re)+1;console.log(ret);


// ret=document.getElementsByTagName(script);
 
// .collection("date")
// .orderBy("khata", "asc")
 
db.doc(document.getElementById('UniqueId').value).set({
 
khata:khata,
block:block,
nam:nam,
phone_number:phone_number,
father_name:father_name,
udeshya:udeshya,
gram:gram,
byaj:byaj,
panchayat:panchayat,
sector:sector,
total_loan_amount:total_loan_amount,
dar_byaj:dar_byaj,
byaj1:byaj1,
mool:mool,
total:total,
dasti_mang_notice:dasti_mang_notice,
UniqueId:parseInt(UniqueId)
// file:file
}).then(()=>{
    
// document.getElementById('fname').value="";    
// document.getElementById('fathername').value="";
// document.getElementById('gender').value="";
// document.getElementById('state').value="";
// document.getElementById('pincode').value="";
// document.getElementById('mobile').value="";
// document.getElementById('email').value="";
 
document.getElementById('UniqueId').value=1+parseInt(document.getElementById('UniqueId').value);
alert(" data saved")
console.log("data saved ")
}).catch((error)=>{
    console.log(error)
})
}
   
// document.getElementById('fname').value="";    
// document.getElementById('fathername').value="";
// document.getElementById('gender').value="";
// document.getElementById('state').value="";
// document.getElementById('pincode').value="";
// document.getElementById('mobile').value="";
// document.getElementById('email').value="";
});
 

// const { doc,getDoc } = require('firebase/firestore');


