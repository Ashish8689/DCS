$(document).ready(function(){

    // ********* Hamburger Menu  *********
  
    $('.hamburger').on('click',function(){
    $('.nav-list').toggleClass('active');
    $('body').toggleClass('active');
  });
  
  
      // Link to content body
  
      const navlinks = document.querySelectorAll('.nav-link');
      const ul = document.querySelector('.nav-list');
      const body = document.querySelector('#body'); 
  
      navlinks.forEach(navlink =>{
      navlink.addEventListener('click',function(){
          ul.classList.remove('active');
          body.classList.remove('active');
      })
    });
  
      })  
      
      
   
   
   // ***********************  Question bars start  ******************************
  
  const sections = document.querySelectorAll('.block-section')
  // const svg-all = document.querySelectorAll('.question-svg')
  
  sections.forEach(section=>{
  
    section.addEventListener('click', ()=>{
      const para  = section.lastChild.previousElementSibling;
      const button = section.firstElementChild;
      let paths = button.firstElementChild.firstElementChild.children;
     
          section.classList.toggle('active');
          para.classList.toggle('active');
          button.classList.toggle('active');
  
          for (i = 0; i < paths.length; i++) {
            paths[i].classList.toggle('active');
          }
  
    })
  })