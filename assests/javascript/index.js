let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}



window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  } )
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  } )



  var data3 = [
    {
        prank: "1st",
        pname: "Lionel Messi",
        pspan: "98 RM",
        pnum:"89",
    },
    {
      prank: "2nd",
      pname: "Cristiano Ronaldo",
      pspan: "94 RM",
      pnum:"88",
  },
  {
    prank: "3rd",
    pname: "Bukayo Saka",
    pspan: "92 RM",
    pnum:"87",
},
{
  prank: "4th",
  pname: "Neymar",
  pspan: "90 RM",
  pnum:"86",
},
{
  prank: "5th",
  pname: "Robert Lewandowski",
  pspan: "88 RM",
  pnum:"85",
},
{
  prank: "6th",
  pname: "Kylian Mbappé",
  pspan: "87 RM",
  pnum:"84",
},
{
  prank: "7th",
  pname: "Kevin De Bruyne",
  pspan: "84 RM",
  pnum:"82",
},
{
  prank: "8th",
  pname: "Virgil van Dijk",
  pspan: "83 RM",
  pnum:"79",
},
{
  prank: "9th",
  pname: "Sadio Mané",
  pspan: "80 RM",
  pnum:"76",
},
{
  prank: "10th",
  pname: " Riyad Mahrez",
  pspan: "79 RM",
  pnum:"75",
}

]

if(document.querySelector(".tbl-content")){
    for(var i=0; i<data3.length; i++){
        document.querySelector(".tbl-content #jasp").innerHTML += `
        
        <tr>
        <td>${data3[i].pname}</td>
        <td>${data3[i].pspan}</td>
        <td>${data3[i].pnum}</td>
        <td>${data3[i].prank}</td>
      </tr>
        
        `

    }

}




var data4 = [
{score: "1843.73",
prank: "1st",
pname: " Argentina",


},
{score: "1843.54",
  prank: "2nd",
  pname: " france",
  
  
  },
  { score: "1828.27",
    prank: "3d",
    pname: " Brazil",
   
    },
    { score: "1797.39",
      prank: "4th",
      pname: " England",
     
      
      },
      {  score: "1788.55",
        prank: "5th",
        pname: " Belgium",
      
        
        },
        {
          score: "1726.58",
          pname: " Croatia",
          prank: "6th",
        
          },
          {score: "1731.23",
            prank: "7th",
            pname: " Netherland",
            
          
            },
            {
            
              pname: " Italy",
              score: "1726.28",
              prank: "8th",
              },
              {score: "1718.25",
                prank: "9th",
                pname: " Portugal",
                
                
                },
                {score: "1703.45",
                  prank: "10",
                  pname: " Spain",
                  
                  
                  }

]

if(document.querySelector("#mkl")){
  for(var i=0; i<data4.length; i++){
      document.querySelector("#mkl .tbl").innerHTML += `
      
      <tr>
      <td>${data4[i].prank}</td>
      <td>${data4[i].pname}</td>
      <td>${data4[i].score}</td>
      
    </tr>
      
      `

  }

}

