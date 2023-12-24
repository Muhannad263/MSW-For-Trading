var cart=[];
function add(number_product){
	cart.push(number_product);
	document.getElementById("details").innerHTML="";
	var find=[];
	var sum=0;
	for(var i=0;i<cart.length;i++){
		quantity=cart.filter(x => x==cart[i]).length;
		if(find.filter(x => x==cart[i]).length==0){
		find.push(cart[i]);
		document.getElementById("details").innerHTML = document.getElementById("details").innerHTML+
		"<tr>"+
		"<td>"+(i+1)+"</td>"+
		"<td>"+document.getElementById("product"+(cart[i])).innerHTML+"</td>"+
		"<td>"+document.getElementById("price"+(cart[i])).innerHTML+"</td>"+
		"<td>"+quantity+"</td>"+
		"<td>"+(quantity*parseInt(document.getElementById("price"+(cart[i])).innerHTML))+"s.p</td>"+
		"</tr>";
		sum=sum+(quantity*parseInt(document.getElementById("price"+(cart[i])).innerHTML));
		}
		
	}
	var minus=sum*5/100;
		document.getElementById("details").innerHTML = document.getElementById("details").innerHTML+
		"<tr>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td>الضريبة 5 %</td>"+
		"<td>"+(minus+"s.p")+"</td>"+
		"</tr>";
			document.getElementById("details").innerHTML = document.getElementById("details").innerHTML+
		"<tr>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td>المجموع النهائي :</td>"+
		"<td>"+(sum-minus+ 's.p' )+"</td>"+
		"</tr>";
		document.getElementById("next").hidden = false;
	}

function next(){
	var sum=0;
	var find=[];
	for(var i=0;i<cart.length;i++){
		quantity=cart.filter(x => x==cart[i]).length;
		if(find.filter(x => x==cart[i]).length==0){
		find.push(cart[i]);
		
		sum=sum+(quantity*parseInt(document.getElementById("price"+(cart[i])).innerHTML));
		}
		
	}
	var minus=sum*5/100;
window.location.href = "form.html?price="+(sum-minus);
}

function cancel(){
	cart=[];
	document.getElementById("details").innerHTML="<tr>"+
"<td></td>"+
"<td></td>"+
"<td style='color:red;'> قم بإضافة المنتجات هنا   </td>"+
"<td></td>"+
"<td></td>"+
"</tr>";
}

function Captcha(){
	var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
			'0','1','2','3','4','5','6','7','8','9');
	var i;
	for (i=0;i<6;i++){
		var a = alpha[Math.floor(Math.random() * alpha.length)];
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = alpha[Math.floor(Math.random() * alpha.length)];
		var e = alpha[Math.floor(Math.random() * alpha.length)];
		var f = alpha[Math.floor(Math.random() * alpha.length)];
		var g = alpha[Math.floor(Math.random() * alpha.length)];
					 }
		var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
		document.getElementById("mainCaptcha").innerHTML = code
		document.getElementById("mainCaptcha").value = code
	  }
function ValidCaptcha(){
	var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
	var string2 = removeSpaces(document.getElementById('txtInput').value);
	if (string1 == string2){
		   return  "تم التحقق بنحاج";
	}else{        
		 return "حدث خطأ!  يرجى التحقق مرة أخرى";
		 }
}
function removeSpaces(string){
	return string.split(' ').join('');
}



function validate(){
fname=document.getElementById("fname").value;
number_id=document.getElementById("number_id").value;
date=document.getElementById("date").value;
phone=document.getElementById("phone").value;
email=document.getElementById("email").value;
 document.getElementById("error_validate").innerHTML="";
var city=['01','02','03','04','05','06','07','08','09','10','11','12','13','14'];
var ph=["+9639"];
var er=0;
var validChars = /^[0-9\u0600-\u06FF\s]+$/;
  if (!validChars.test(fname)) {
	 document.getElementById("error_validate").innerHTML+alert("يجب أن يكون الاسم باللغه العربية فقط");
	 er=1;
  } 
  if (number_id.length !=11) {
	 document.getElementById("error_validate").innerHTML=document.getElementById("error_validate").innerHTML+alert("يجب أن يكون الرقم الوطني من 11 رقم");
 er=1; 
 }

    if ( city .filter(x => x==(number_id[0]+""+number_id[1])).length==0) {
	  er=1;
	 document.getElementById("error_validate").innerHTML=document.getElementById("error_validate").innerHTML+alert("يشير الرقمين الأوليين الى رمز المحافظة");
  }
     if ( ph .filter(x => x==(phone[0]+""+phone[1])).length==0) {
	  er=1;
	 document.getElementById("error_validate").innerHTML=document.getElementById("error_validate").innerHTML+alert(" +963 يجب أن يبدأ رقم الموبايل ب ");
  }
    if (phone.length !=10) {
	  er=1;
	 document.getElementById("error_validate").innerHTML=document.getElementById("error_validate").innerHTML+alert("يجب أن يكون رقم الموبايل 10 خانات");
  }
    if (ValidCaptcha()==false) {
 er=1;	
	document.getElementById("error_validate").innerHTML=document.getElementById("error_validate").innerHTML+alert(" التحقق أنك لست روبوت ");
  }
  

   document.getElementById("error_validate").hidden="حدث خطا ما! أعد المحاولة";
   if(er==0){
	   document.getElementById("error_validate").hidden=true;
	   document.getElementById("done_validate").hidden=false;
	   var price = new URLSearchParams(window.location.search).get("price");
	   document.getElementById("done_validate", "done").innerHTML+alert("تمت عملية الشراء بنجاح"+price+"s.p");
   }
  return false;
}



