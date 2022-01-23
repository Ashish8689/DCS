$(document).ready(function(){
    
  // *********  Window scroll event  ************

      const changeBackground = () =>{      
        const nav = document.querySelector('.nav');   

        if(window.scrollY >= 150){
          nav.classList.add('active');
        }
        else{
          nav.classList.remove('active');
        }
    }

    window.addEventListener('scroll', changeBackground);


    // ********* Hamburger Menu  *********
  
    $('.hamburger').on('click',function(){
      $('.mobile-sidebar').toggleClass('active');
      $('body').toggleClass('active');
      $('.span1').toggleClass('active');
      $('.span2').toggleClass('active');
      $('.span3').toggleClass('active');
    });
  
  
      // Link to content body
  
      const navlinks = document.querySelectorAll('.link');
      const mobileSideMenu = document.querySelector('.mobile-sidebar');
      const body = document.querySelector('#body'); 
      const spans = document.querySelectorAll('.span');
  
      navlinks.forEach(navlink =>{
      navlink.addEventListener('click',function(){
        mobileSideMenu.classList.remove('active');
        body.classList.remove("active");
        spans.forEach(span => (
          span.classList.remove('active')
        ));
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








  // *********************   Gallery start  **********************


  let navigation = document.querySelector(".navigation");
  let view = document.querySelector(".popup-gallery");
  let content = document.querySelector(".popup-gallery .content");
  let navcount = content.offsetWidth / view.offsetWidth;
  let previous = document.querySelector(".previous");
  let next = document.querySelector(".next");
  for (let i = 1; i <= navcount; i++) {
    let num = document.createElement("span");
      num.className = "num";
      num.dataset.index = i;
      // num.textContent = i;
      next.before(num);
  }

  navigation.firstElementChild.nextSibling.classList.add("selected");
  let nums = Array.from(document.querySelectorAll(".num"));

  next.addEventListener("click", function () {
    let current = document.querySelector(".selected");
    if (nums.indexOf(current) + 1 < nums.length) {
      nums.forEach((e) => {
        e.classList.remove("selected");
      });

      current.nextElementSibling.classList.add("selected");
      content.style.transform = `translateX(${
        current.dataset.index * -view.offsetWidth
      }px)`;
    }
  });
  previous.addEventListener("click", function () {
    let current = document.querySelector(".selected");
    if (nums.indexOf(current) > 0) {
      nums.forEach((e) => {
        e.classList.remove("selected");
      });
      content.style.transform = `translateX(${
        (current.dataset.index - 2) * -view.offsetWidth
      }px)`;
      current.previousElementSibling.classList.add("selected");
    }
  });

  nums.forEach((e) => {
    e.addEventListener("click", function () {
      nums.forEach((e) => {
        e.classList.remove("selected");
      });
      e.classList.add("selected");
      content.style.transform = `translateX(${
        nums.indexOf(e) * -view.offsetWidth
      }px)`;
    });
  });

