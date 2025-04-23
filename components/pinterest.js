document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const exploreBtn = document.getElementById('explore-btn');
    
    // Handle search input submission
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
            e.preventDefault();
        }
    });
    
    // Handle explore button click
    exploreBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // Search function
    function performSearch(query) {
        console.log('Searching for:', query);
        alert('Searching for: ' + query);
    }
});

// mode;
document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Change the icon
        const icon = this.querySelector('.material-symbols-outlined');
        icon.textContent = type === 'password' ? 'visibility' : 'visibility_off';
    });
    
    // Date picker functionality (simplified)
    const dobInput = document.getElementById('dob');
  
    
    // Continue button
    const continueBtn = document.querySelector('.continue-btn');
    
    continueBtn.addEventListener('click', function() {
        // Validate form (simplified)
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const dob = dobInput.value;
        
        if (!email || !password || !dob) {
            alert('Please fill in all fields');
            return;
        }
        
        alert('Form submitted successfully!');
    });
});


// pinterest main page 

//! Arrow button smooth scroll
let arrowButton = document.querySelector(".down-arrow");

arrowButton.addEventListener("click", function () {
  let start = window.scrollY;
  let end = start + window.innerHeight; // Scroll one full viewport height
  let duration = 1500; // 2.5 seconds
  let startTime = null;

  function smoothScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    let ease = Math.min(progress / duration, 1); // Ensure it stops exactly at `end`
    window.scrollTo(0, start + (end - start) * ease);

    if (progress < duration) {
      requestAnimationFrame(smoothScroll);
    }
  }

  requestAnimationFrame(smoothScroll);
});

// ! image gallery 
let currentSlide = 0;
const slides = [
  "weeknight dinner idea",
  "home décor idea",
  "new outfit",
  "green thumb idea",
];
const dots = document.querySelectorAll(".dot");
const subtitle = document.querySelector(".hero-subtitle");

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  subtitle.textContent = slides[currentSlide];
  console.log(subtitle.textContent);



  if (currentSlide === 0) {
      document.getElementById("galleryImage1").src ="./assets/dinner1.jpg";
      document.getElementById("galleryImage2").src = "./assets/dinner2.jpg";
      document.getElementById("galleryImage3").src = "./assets/dinner3.jpg";
      document.getElementById("galleryImage4").src = "./assets/dinner4.jpg";
      document.getElementById("galleryImage5").src = "./assets/dinner5.jpg";
      document.getElementById("galleryImage6").src = "./assets/dinner6.jpg";
      document.getElementById("galleryImage7").src = "./assets/dinner7.jpg";
      subtitle.style.color = "#b8860b";
      
      
      
      
  } else if (currentSlide === 1) {
   
      document.getElementById("galleryImage1").src ="./assets/decor1.jpg";
      document.getElementById("galleryImage2").src = "./assets/decor5.jpg";
      document.getElementById("galleryImage3").src = "./assets/decor3.jpg";
      document.getElementById("galleryImage4").src = "./assets/decor4.jpg";
      document.getElementById("galleryImage5").src = "./assets/decor5.jpg";
      document.getElementById("galleryImage6").src = "./assets/decor6.jpg";
      document.getElementById("galleryImage7").src = "./assets/decor7.jpg";
      subtitle.style.color = "red";
      

      
  } else if (currentSlide === 2) {
      document.getElementById("galleryImage1").src ="./assets/look1.jpg";
      document.getElementById("galleryImage2").src = "./assets/look2.jpg";
      document.getElementById("galleryImage3").src = "./assets/look3.jpg";
      document.getElementById("galleryImage4").src = "./assets/look4.jpg";
      document.getElementById("galleryImage5").src = "./assets/look5.jpg";
      document.getElementById("galleryImage6").src = "./assets/look6.jpg";
      document.getElementById("galleryImage7").src = "./assets/look7.jpg";
      subtitle.style.color = "blue";
      

  } else if (currentSlide === 3) {
    
      document.getElementById("galleryImage1").src ="./assets/diy1.jpg";
      document.getElementById("galleryImage2").src = "./assets/diy2.jpg";
      document.getElementById("galleryImage3").src = "./assets/diy3.jpg";
      document.getElementById("galleryImage4").src = "./assets/diy4.jpg";
      document.getElementById("galleryImage5").src = "./assets/diy5.jpg";
      document.getElementById("galleryImage6").src = "./assets/diy6.jpg";
      document.getElementById("galleryImage7").src = "./assets/diy7.jpg";
      subtitle.style.color = "green";
      

  }

  // Update active dot
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
      if(currentSlide ==0 ){
          dot.style.backgroundColor = "#b8860b";
      }else if(currentSlide ==1){
          dot.style.backgroundColor = "red";
      }else if(currentSlide ==2){
          dot.style.backgroundColor = "blue";
      }else if(currentSlide ==3){
          dot.style.backgroundColor = "green";
      }
    } else {
      dot.classList.remove("active");
      if(currentSlide ==0 ){
          dot.style.backgroundColor = "white";
      }else if(currentSlide ==1){
          dot.style.backgroundColor = "white";
      }else if(currentSlide ==2){
          dot.style.backgroundColor = "white";
      }else if(currentSlide ==3){
          dot.style.backgroundColor = "white";
      }
    }
  });
}


setInterval(changeSlide, 4000);


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    subtitle.textContent = slides[currentSlide];

    dots.forEach((d, i) => {
      if (i === currentSlide) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });
  });
});

// How it works dropdown toggle
const howItWorks = document.querySelector(".how-it-works");
const arrow = document.querySelector(".how-it-works-arrow");


howItWorks.addEventListener("click", () => {
  arrow.style.transform =
    arrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
      let start = window.scrollY;
      let end = start - window.innerHeight; // Scroll one full viewport height UP
      let duration = 1500; // 1.5 seconds
      let startTime = null;
      
      function smoothScrollUp(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let ease = Math.min(progress / duration, 1); // Ensure it stops exactly at `end`
        window.scrollTo(0, start - (start - end) * ease); // Move UP
      
        if (progress < duration) {
          requestAnimationFrame(smoothScrollUp);
        }
      }
      
      // Start the smooth upward scroll
      requestAnimationFrame(smoothScrollUp);
      
});


// signup form

   
// if (localStorage.getItem("user")) {
//     window.location.href = "MainPage.html";
// }

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {username, email, password };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    // Redirect to home.html
    window.location.href = "MainPage.html";
});