showData('general') 



var sports=document.getElementById("sports")
sports.addEventListener("click",function(){

  category="sports"
   showData(category)
})

var entertainment=document.getElementById("entertainment")
entertainment.addEventListener("click",function(){

  category="entertainment"
   showData(category)
})

var health=document.getElementById("health")
health.addEventListener("click",function(){

  category="health"
   showData(category)
})

var business=document.getElementById("business")
business.addEventListener("click",function(){

  category="business"
   showData(category)
})

var general=document.getElementById("general")
general.addEventListener("click",function(){

  category="general"
   showData(category)
})


function showData(category ){
  
var myData = [];
var http = new XMLHttpRequest ;
http.open("GET","http://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=ff07c40f0bf74f7dab1b90e3620c54c6");
http.send();   



http.addEventListener("readystatechange",function(){

if (http.readyState == 4 && http.status == 200 )
{
  myData=JSON.parse(http.response).articles
  displayData()

} }) ;












function displayData()
{


 


    var temp = ``;

    for(var i = 0 ; i <myData.length ; i++)
    {
        temp +=`    <div class="col-lg-4 col-md-6 py-2">
        <div class="post">
          <div class="test">
          
            <img class="img-fluid" src="${myData[i].urlToImage}" alt="">
            <h4 class="text-center text-light" >${myData[i].title}</h4>
            <div class="layer">
              <h4 class="mx-1 text-body ">${myData[i].description}</h4>
              <h5 class="mx-1 ">  <a class="text-danger" href="${myData[i].url}"  target="_blank">Read More</a>   </h5>
            </div>
          </div>
        </div>
      </div>
        `;
    }

    document.getElementById("rowData").innerHTML = temp;
}




}









// validation form 


function validateName(userName) {
  var userNameRegex = /^[A-Z][a-z]{3,8}/;
  if (userNameRegex.test(userName) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}



function validateMail(userMail) {
  var userMailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (userMailRegex.test(userMail) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}


function validatePhone(userPhone) {
  var userPhoneRegex = /^(002)?01[0125][0-9]{8}$/;
  if (userPhoneRegex.test(userPhone) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}

function validateAge(userAge) {
  var userAgeRegex = /([1-7][0-9]|80)/;
  if (userAgeRegex.test(userAge) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}






function validatePass(userPass) {
  var userPassRegex =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ ;
  if (userPassRegex.test(userPass) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}



