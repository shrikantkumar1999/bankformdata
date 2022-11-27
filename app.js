// const firebaseConfig = {
//   apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
//   authDomain: "formdata-b7401.firebaseapp.com",
//   projectId: "formdata-b7401",
//   storageBucket: "formdata-b7401.appspot.com",
//   messagingSenderId: "44569804899",
//   appId: "1:44569804899:web:ffe6af4efafd322d09b856"
// };
 
// // const firebaseConfig = {
// //   apiKey: proccess.env.REACT_APP_FIREBASE_API_KEY,
// //   authDomain: proccess.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: proccess.env.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: '',
// //   messagingSenderId: proccess.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APP_ID
// // };
 

// firebase.initializeApp(firebaseConfig);
// var firestore= firebase.firestore()

// // console.log(ret);

// //var to access database  collection
// const db= firestore.collection("date");
// // let linp= document.getElementById('lin');
// // linp.addEventListener('click',(e)=>{
// // e.preventDefault();
// // let username=document.getElementById("username").value;
// // let password=document.getElementById("password").value;

// // if(username!=document.getElementById('username1').value||password!=document.getElementById('password1').value )
// // {alert("fill correct username and password...");return ;}
// // // else { <a href="data.html">This is the link.</a>  }
// // });


// let submitButton =document.getElementById('submit');
// submitButton.addEventListener("click",(e) => {
// e.preventDefault();

// let khata=document.getElementById('khata').value;
// let block=document.getElementById('block').value;
// let nam=document.getElementById('nam').value;
// let phone_number=document.getElementById('phone_number').value;
// let father_name=document.getElementById('father_name').value;
// let udeshya=document.getElementById('udeshya').value;
// let gram=document.getElementById('gram').value;

// let byaj=document.getElementById("byaj").value;
// let panchayat=document.getElementById("panchayat").value;
// let sector=document.getElementById("sector").value;
// let total_loan_amount=document.getElementById("total_loan_amount").value;
// let dar_byaj=document.getElementById("dar_byaj").value;
// let byaj1=document.getElementById("byaj1").value;
// let mool=document.getElementById("mool").value;
// let total=document.getElementById("total").value;
// let dasti_mang_notice=document.getElementById("dasti_mang_notice").value;
// let username=document.getElementById("username").value;
// let password=document.getElementById("password").value;

// let UniqueId=document.getElementById("UniqueId").value;
 
  
// if(username!=document.getElementById('username1').value||password!=document.getElementById('password1').value ){alert("fill all data"); return;}
 
// if(khata.length!=12)alert("khata not correct");
// else if(block==""||typeof(block)!="string"){if(block=="")alert("fill the block");else alert("enter only alphabet for block"); }
// else if(nam==""||typeof(nam)!="string"){if(nam=="")alert("fill the nam");else alert("enter only alphabet for nam"); }
// else if(phone_number==""||phone_number.length<10){if(phone_number=="")alert("fill the phone_number");else alert("phone_number less than 10 digit "); }
// else if(father_name==""||typeof(father_name)!="string"){if(father_name=="")alert("fill the father_name");else alert("enter only alphabet for father_name"); }
// else if(nam==""||typeof(nam)!="string"){if(nam=="")alert("fill the nam");else alert("enter only alphabet for nam"); }
// else if(gram==""||typeof(gram)!="string"){if(gram=="")alert("fill the gram");else alert("enter only alphabet for gram"); }
// else{
//  console.log("sset user")
// document.getElementById('fixeduser').innerHTML=document.getElementById('username1').value;
  
//   // var ret=parseInt(re)+1;console.log(ret);


// // ret=document.getElementsByTagName(script);
 
// // .collection("date")
// // .orderBy("khata", "asc")
 
// db.doc(document.getElementById('UniqueId').value).set({
 
// khata:khata,
// block:block,
// nam:nam,
// phone_number:phone_number,
// father_name:father_name,
// udeshya:udeshya,
// gram:gram,
// byaj:byaj,
// panchayat:panchayat,
// sector:sector,
// total_loan_amount:total_loan_amount,
// dar_byaj:dar_byaj,
// byaj1:byaj1,
// mool:mool,
// total:total,
// dasti_mang_notice:dasti_mang_notice,
// UniqueId:parseInt(UniqueId)
// // file:file
// }).then(()=>{
    
// // document.getElementById('fname').value="";    
// // document.getElementById('fathername').value="";
// // document.getElementById('gender').value="";
// // document.getElementById('state').value="";
// // document.getElementById('pincode').value="";
// // document.getElementById('mobile').value="";
// // document.getElementById('email').value="";
 
// document.getElementById('UniqueId').value=1+parseInt(document.getElementById('UniqueId').value);
// alert(" data saved")
// console.log("data saved ")
// }).catch((error)=>{
//     console.log(error)
// })
// }
   
// // document.getElementById('fname').value="";    
// // document.getElementById('fathername').value="";
// // document.getElementById('gender').value="";
// // document.getElementById('state').value="";
// // document.getElementById('pincode').value="";
// // document.getElementById('mobile').value="";
// // document.getElementById('email').value="";
// });
 

// // const { doc,getDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
  authDomain: "formdata-b7401.firebaseapp.com",
  databaseURL: "https://formdata-b7401-default-rtdb.firebaseio.com",
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
 
const db= firestore.collection("date");
 
 
 
let submitButton =document.getElementById('submit');
submitButton.addEventListener("click",(e) => {
e.preventDefault();
 var user = document.getElementById("uuser").value;
console.log(user);
var te="ri";
let username=document.getElementById("username").value;console.log(username+" username")
let password=document.getElementById("password").value;console.log(password+" password")
for(var i=0;i<user.length;i++){console.log(user[i].name);
  console.log(user[i].password);
if(user[i].name==username&&user[i].password==password)
{ document.getElementById('fixeduser').innerHTML="USER NAME : "+user[i].name;
te="sf";
  //  document.getElementById('username1').value=user[i].name;
    
   break;
}
}
// ||password!=document.getElementById('password1').value 
if(te=="ri")
{alert("fill correct username and password ..."); return;}

let date=Date();

var Uniqueid=document.getElementById("UniqueId").value; 
let khata=document.getElementById('khata').value;
let nam=document.getElementById('nam').value;console.log(nam)//done
let father_name=document.getElementById('father_name').value;
let panchayat=document.getElementById("panchayat").value; console.log(typeof(panchayat))
let total_loan_amount=document.getElementById("total_loan_amount").value; 
let phone_number=document.getElementById("phone_number").value; 
let udeshya=document.getElementById("udeshya").value; 
let dar_dar=document.getElementById("dar_dar").value; 
let byajdar=document.getElementById("byajdar").value; 
let byaj=document.getElementById("byaj").value;
let mool=document.getElementById("mool").value;
let total=document.getElementById("total").value;
let  dasti_mang_notice=document.getElementById("dasti_mang_notice").value;
let  tamili_dinank=document.getElementById("tamili_dinank").value;
let  signature=document.getElementById("signature").value;
let  vayda_dinak=document.getElementById("vayda_dinak").value;
let  signature1=document.getElementById("signature1").value;
let  nishani=document.getElementById("nishani").value;
let  loan_se_sambandh=document.getElementById("loan_se_sambandh").value;
let vayda_dinak1=document.getElementById("vayda_dinak1").value;
let  swikar_aswikar=document.getElementById("swikar_aswikar").value;
let  jari_dinak=document.getElementById("jari_dinak").value;
let  tamili_dinank1=document.getElementById("tamili_dinank1").value;
let  jari_dinak1=document.getElementById("jari_dinak1").value;
let  tamili_dinank2=document.getElementById("tamili_dinank2").value;
let  jari_dinak2=document.getElementById("jari_dinak2").value;
let  kurki_nilami=document.getElementById("kurki_nilami").value;
let  vasooli_date=document.getElementById("vasooli_date").value;
let  rashivasooli=document.getElementById("rashivasooli").value;
let  fghfgh=document.getElementById("fghfgh").value;
let  vishesh_vivran=document.getElementById("vishesh_vivran").value;
let block=document.getElementById('block').value;        //done
let gram=document.getElementById('gram').value; 
let sector=document.getElementById("sector").value;  
// let dasti_mang_notice=document.getElementById("dasti_mang_notice").value;console.log(typeof(dasti_mang_notice))
// let udeshya=document.getElementById('udeshya').value; console.log(udeshya)
 // let tamili_dinank=document.getElementById("tamili_dinank").value;console.log(typeof(tamili_dinank))
//  let signature=document.getElementById("signature").value;console.log(typeof(signature));
// let vayda_dinak=document.getElementById("vayda_dinak").value;console.log(typeof(vayda_dinak))
// let signature1=document.getElementById("signature1").value;console.log(typeof(signature1))
// let loan_se_sambandh=document.getElementById("loan_se_sambandh").value;console.log(typeof(loan_se_sambandh))
// let nishaloan_se_sambandhni=document.getElementById("nishani").value;console.log(typeof(nishani))
// let swikar_aswikar=document.getElementById("swikar_aswikar").value;console.log(typeof(swikar_aswikar))
// let vayda_dinak1=document.getElementById("vayda_dinak1").value;console.log(typeof(vayda_dinak1))
// let jari_dinak=document.getElementById("jari_dinak").value;console.log(typeof(jari_dinak))
// let tamili_dinank1=document.getElementById("tamili_dinank1").value;console.log(typeof(tamili_dinank1))
// let jari_dinak1=document.getElementById("jari_dinak1").value;console.log(typeof(jari_dinak1))
// let tamili_dinank2=document.getElementById("tamili_dinank2").value;console.log(typeof(tamili_dinank2))
// let jari_dinak2=document.getElementById("jari_dinak2").value;console.log(typeof(jari_dinak2))
// let kurki_nilami=document.getElementById("kurki_nilami").value;console.log(kurki_nilami)
// let vasooli_date=document.getElementById("vasooli_date").value;console.log(typeof(vasooli_date))
// let vishesh_vivran=document.getElementById("vishesh_vivran").value;console.log(typeof(vishesh_vivran))
// let byajdari=document.getElementById("byajdari");
// let rashivasooli=document.getElementById("rashivasooli").value;console.log(typeof(rashivasooli))

 if(block==""){if(block=="")alert("fill the block name ...");console.log("block ..."); }
else if(nam==""||!(/^[a-zA-Z]/).test(nam)){if(nam=="")alert("fill the nam");else alert("enter only alphabet for nam ...");console.log("nam ...") }
else if(father_name==""||!(/^[a-zA-Z]/).test(father_name)){if(father_name=="")alert("fill the father name ...");else alert('enter only alphabet for father naem ...') ;console.log("father ...")}
else if(gram=="")alert("fill the gram...");
else if(panchayat=="")alert("fill the panchayat...");
else if(sector=="")alert("fill the sector...");
else if(total_loan_amount=="")alert("fill the total loan amount...");
else if(phone_number==""||phone_number.length<10){
  if(phone_number=="")alert('enter phone number ....');else {alert("phone number is not 10 digit...") }
}  
else{
console.log(document.getElementById('UniqueId').value);
// document.getElementById('fixeduser').innerHTML=document.getElementById('username1').value;
db.doc(document.getElementById('UniqueId').value).set({
date:date, 
khata:khata,
panchayat:panchayat,
block:block,
nam:nam,
phone_number:phone_number,
father_name:father_name,
udeshya:udeshya,
gram:gram,
byaj:byaj,
dar_dar:dar_dar,
byajdar:byajdar,
sector:sector,
total_loan_amount:total_loan_amount,
vishesh_vivran:vishesh_vivran,
mool:mool,
total:total,
kurki_nilami:kurki_nilami,
dasti_mang_notice:dasti_mang_notice,
Uniqueid:parseInt(Uniqueid),
tamili_dinank:tamili_dinank,
signature:signature,
vayda_dinak:vayda_dinak,
signature1:signature1,
vayda_dinak1:vayda_dinak1,
nishani:nishani,
swikar_aswikar:swikar_aswikar,
rashivasooli:rashivasooli,
jari_dinak:jari_dinak,
tamili_dinank1:tamili_dinank1,
vasooli_date:vasooli_date,
jari_dinak1:jari_dinak1,
tamili_dinank2:tamili_dinank2,
jari_dinak2:jari_dinak2,
loan_se_sambandh:loan_se_sambandh
}).then(()=>{
// document.getElementById('fname').value="";    
// document.getElementById('fathername').value="";
// document.getElementById('gender').value="";
// document.getElementById('state').value="";
// document.getElementById('pincode').value="";
// document.getElementById('mobile').value="";
// document.getElementById('email').value="";
 
document.getElementById('UniqueId').value=1+parseInt(document.getElementById('UniqueId').value);
 alert("data saved ...");
console.log("data saved ");
// document.getElementById('fixeduser').innerHTML+=" : "+document.getElementById('username1').value;
}).catch((error)=>{
    console.log(error)
})
};
   
// document.getElementById('fname').value="";    
// document.getElementById('fathername').value="";
// document.getElementById('gender').value="";
// document.getElementById('state').value="";
// document.getElementById('pincode').value="";
// document.getElementById('mobile').value="";
// document.getElementById('email').value="";
});
 

// const { doc,getDoc } = require('firebase/firestore');





// alert("UniqueId "+Uniqueid +" "+typeof(Uniqueid));
// alert("khata "+typeof(khata)+" "+khata);  
// alert("nam  "+nam +" "+typeof(nam));
// alert("father_name  "+father_name +" "+typeof(father_name));
// alert("panchayat  "+panchayat +" "+typeof(panchayat));
// alert("total_loan_amount  "+total_loan_amount +" "+typeof(total_loan_amount));
// alert("phone_number  "+phone_number +" "+typeof(phone_number));
// alert("udeshya  "+udeshya +" "+typeof(udeshya));
// alert("dar_dar  "+dar_dar +" "+typeof(dar_dar));
// alert("byajdar  "+byajdar +" "+typeof(byajdar));
// alert("byaj  "+byaj +" "+typeof(byaj));
// alert("mool  "+mool +" "+typeof(mool));
// alert("total  "+total +" "+typeof(total));
// alert("dasti_mang_notice   "+ dasti_mang_notice +" "+typeof(dasti_mang_notice));
// alert(" tamili_dinank  "+ tamili_dinank +" "+typeof(tamili_dinank ));
// alert(" signature  "+ signature +" "+typeof(signature));
// alert(" vayda_dinak  "+ vayda_dinak +" "+typeof(vayda_dinak));
// alert(" signature1  "+ signature1 +" "+typeof(signature1));
// alert(" nishani  "+ nishani +" "+typeof(nishani));
// alert(" loan_se_sambandh  "+ loan_se_sambandh +" "+typeof(loan_se_sambandh));
// alert(" vayda_dinak1  "+ vayda_dinak1 +" "+typeof(vayda_dinak1));
// alert(" swikar_aswikar  "+ swikar_aswikar +" "+typeof(swikar_aswikar));
// alert(" jari_dinak  "+ jari_dinak +" "+typeof(jari_dinak));
// alert(" tamili_dinank1  "+ tamili_dinank1 +" "+typeof(tamili_dinank1));
// alert(" jari_dinak1  "+ jari_dinak1 +" "+typeof(jari_dinak1));
// alert(" tamili_dinank2  "+ tamili_dinank2 +" "+typeof(tamili_dinank2));
// alert(" jari_dinak2  "+ jari_dinak2 +" "+typeof(jari_dinak2));
// alert(" kurki_nilami  "+ kurki_nilami +" "+typeof(kurki_nilami));
// alert(" vasooli_date  "+ vasooli_date +" "+typeof(vasooli_date));
// alert(" rashivasooli  "+ rashivasooli +" "+typeof(rashivasooli));
// alert(" fghfgh  "+ fghfgh +" "+typeof(fghfgh));
// alert(" vishesh_vivran  "+ vishesh_vivran +" "+typeof(vishesh_vivran));


