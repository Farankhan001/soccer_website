

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



  var teamna = 
    [
      {pteamname: "Barcelona",
      pw: " 01",
      pd: " 00",
      pl: " 00",
      ppts: " 03",
      },
      {pteamname: "Juventus",
      pw: " 00",
      pd: " 01",
      pl: " 02",
      ppts: " 01",
      },
      {pteamname: "Rpoyal Madrid",
      pw: " 01",
      pd: " 00",
      pl: " 00",
      ppts: "01",
      },
      {pteamname: "Manchestar City",
      pw: " 00",
      pd: " 00",
      pl: " 01",
      ppts: " -02",
      },
      {pteamname: "Arsenal",
      pw: " 1",
      pd: "00",
      pl: " 01",
      ppts: " +02",
      },
      {pteamname: "Liverpool",
      pw: " 00",
      pd: " 00",
      pl: " 01",
      ppts: "-01",
      },
      {pteamname: "Chelsea",
      pw: " 00",
      pd: " 01",
      pl: " 01",
      ppts: "-01",
      },
      {pteamname: "West Ham",
      pw: " 01",
      pd: " 00",
      pl: " 00",
      ppts: "02",
      },
      {pteamname: "Inter Milan",
      pw: " 00",
      pd: " 00",
      pl: " 01",
      ppts: "-01",
      },
      {pteamname: "Tottenham",
      pw: " 01",
      pd: " 00",
      pl: " 00",
      ppts: " 02",
      },
      
      ]



      if(document.querySelector("#jyt")){
        for(var i=0; i<teamna.length; i++){
            document.querySelector("#jyt #tbt").innerHTML += `
            
            <tr>
            <td>${teamna[i].pteamname}</td>
            <td>${teamna[i].pw}</td>
            <td>${teamna[i].pd}</td>
            <td>${teamna[i].pl}</td>
            <td>${teamna[i].ppts}</td>
            
            
            
            
                        </tr>
            
            
            `
    
        }
    
    }
    
    
 

    
    // var prof = [
    //     {
    //         ptn: "Egypt",
    //         pna: "M. Salah",
    //         ps: "Matches",
    //         pa:"178",
    //         pe:"Goal", 
    //         pt:"109",
    //         pp:"Assets",
    //         pk:"71",
    //         pg:"Wins",
    //         psc:"205",
    //         pim:"assests/images/pngs/salah.png"
    //     }
      
        
    // ]
    
    // if(document.querySelector(".jj")){
    //     for(var i=0; i<prof.length; i++){
    //         document.querySelector(".jj #pri").innerHTML += `
            
    //         
            
            
    //         `
    
    //     }
    
    // }
    
    


      
// const menubtn = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navbar');

// menubtn.addEventListener('click', () => {
//     menubtn.classList.toggle('bx-x');   
//     navbar.classList.toggle('active');   
// });

