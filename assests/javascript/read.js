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



  var data2 = [
    {
        pimg: "assests/images/gallery images/ronaldo.jpg",
        pname: "Ronaldo",
        pspan: "Football-Player",
        panch:"profile.html#p1",
    },
    { 
        pimg: "assests/images/gallery images/Lionel-Messi-2018.jpg",
        pname: "Messi",
        pspan: "Football-Player",
        panch:"profile.html#p2",
    },
    {
        pimg: "assests/images/gallery images/neymar jr.jpg",
        pname: "Neymar",
        pspan: "Football-player",
        panch:"profile.html#p3",
    },
    {
        pimg: "assests/images/gallery images/mabape.jpg",
        pname: "Kylian Mbappé",
        pspan: "Football-Player",
        panch:"profile.html#p4",
    },
    {
        pimg: "assests/images/gallery images/salah.jpg",
        pname: "Muhammad Salah",
        pspan: "Football-Player",
        panch:"profile.html#p5",
    },
    {
        pimg: "assests/images/gallery images/bukayo saka.jpg",
        pname: "Bukayo Saka",
        pspan: "Football-Player",
        panch:"profile.html#p6",
    },
    
    {
        pimg: "assests/images/gallery images/kevin de bruyne.jpg",
        pname: "Kevin De bru",
        pspan: "Football-Player",
        panch:"profile.html#p7",
    },
    {
        pimg: "assests/images/gallery images/alphonso.jpg",
        pname: "Alphonso",
        pspan: "Football-Player",
        panch:"profile.html#p8",
    },
    {
        pimg: "assests/images/gallery images/jack.jpg",
        pname: "Jack Heel",
        pspan: "Football-Player",
        panch:"profile.html#p9",
    },
    {
        pimg: "assests/images/gallery images/kimmich.jpg",
        pname: "Kimmich",
        pspan: "Football-Player",
        panch:"profile.html#p10",
    },
     {
        pimg: "assests/images/gallery images/rodri.jpg",
        pname: "Rodri",
        pspan: "Football-Player",
        panch:"profile.html#p11",
    },
     {
        pimg: "assests/images/gallery images/gavi.jpg",
        pname: "Gavi",
        pspan: "Football-Player",
        panch:"profile.html#p12",
    },
     {
        pimg: "assests/images/gallery images/jamal.jpg",
        pname: "Jamal",
        pspan: "Football-Player",
        panch:"profile.html#p13",
    },
    
]

if(document.querySelector(".Gallery")){
    for(var i=0; i<data2.length; i++){
        document.querySelector(".Gallery .container-fluid").innerHTML += `
        
  <div class="box">
  <div class="conten">
  <img src="${data2[i].pimg}" alt="">
  <h2>${data2[i].pname}<br><span>${data2[i].pspan}</span></h2>
  <a href="${data2[i].panch}" target="_blank">see profile</a>
        
        
        `

    }

}
