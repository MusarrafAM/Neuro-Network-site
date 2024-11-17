// Navbar
let nav = false;

function handleNav() {
  nav = !nav;
  const icon = document.getElementById("icon");
  icon.innerHTML = nav
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M3.646 3.646a.5.5 0 0 1 .708 0L8 7.293l3.646-3.647a.5.5 0 1 1 .708.708L8.707 8l3.647 3.646a.5.5 0 0 1-.708.708L8 8.707l-3.646 3.647a.5.5 0 1 1-.708-.708L7.293 8 3.646 4.354a.5.5 0 0 1 0-.708z"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>';

  const navMenu = document.getElementById("navMenu");
  if (nav) {
    navMenu.classList.remove("left-[-100%]");
    navMenu.classList.add(
      "fixed",
      "z-10",
      "left-0",
      "top-0",
      "w-[60%]",
      "h-full",
      "border-r",
      "border-r-gray-900",
      "bg-gray-600",
      "text-white",
      "ease-in-out",
      "duration-500"
    );
  } else {
    navMenu.classList.remove(
      "z-10",
      "left-0",
      "top-0",
      "w-[60%]",
      "h-full",
      "border-r",
      "border-r-gray-900",
      "bg-gray-600",
      "text-white",
      "ease-in-out",
      "duration-500"
    );
    navMenu.classList.add("left-[-100%]");
  }
}

// --------------------------
document.addEventListener("DOMContentLoaded", function () {
  function navbar() {
    const navbarHTML = `
    <div class="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 lg:px-0 text-black border-b-2 border-b-[#5C5958]">
      <div>
        <a href="#" class="flex items-center p-2 px-2 ml-4 md:ml-0">
          <img src="../images/logo.jpg" alt="Logo" class="h-14 w-32 md:h-16 md:w-48 mr-2" />
        </a>
      </div>
      <ul class="hidden md:flex bg-gray-600 text-white rounded-2xl  lg:mr-[350px] md:mr-[50px] text-center mx-4">
      <a  href="../index.html"><li class="p-2 my-2 mr-2 ml-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">Home</li></a>
      <a href="/pages/about.html"><li class="p-2 my-2 mr-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">About</li></a>
      <a href="/pages/gallery.html"><li class="p-2 my-2 mr-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">Gallery</li></a>
      <a href="/pages/story.html"><li class="p-2 my-2 mr-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">Story</li></a>
      <a href="/pages/blog.html"><li class="p-2 my-2 mr-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">Blog</li></a>
      <a href="/pages/infohub.html"><li class="p-2 my-2 mr-2 hover:bg-[#CAF100] hover:text-blue-600 duration-300 rounded-lg min-w-[80px] cursor-pointer">Info Hub</li></a>
      </ul>
      <div onclick="handleNav()" class="block md:hidden cursor-pointer" id="navIcon">
        <span id="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H2a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg></span>
      </div>
      <div id="navMenu" class="fixed left-[-100%] z-10 w-[60%] h-full border-r border-r-gray-900 bg-[#310000] text-white ease-in-out duration-500">
        <img src="../images/logo.jpg" alt="Logo">
        <ul class="uppercase p-4">
        <a href="../index.html"><li class="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">Home</li></a>
        <a href="/pages/about.html"><li class="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">About</li></a>
        <a href="/pages/gallery.html"><li class="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">Gallery</li></a>
        <a href="/pages/story.html"><li class="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">Story</li></a>
        <a href="/pages/blog.html"><li class="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">Blog</li></a>
        <a href="/pages/infohub.html"><li class="p-4 cursor-pointer hover:bg-[#CAF100] hover:text-blue-600 rounded-lg">Info Hub</li></a>
        </ul>
    </div>`;
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
  }
  navbar();
  highlightCurrentNavLink();
});

function highlightCurrentNavLink() {
  const currentPage = window.location.pathname;
  const activePage = currentPage === "/build/" ? "/index.html" : currentPage;
  const navLinks = document.querySelectorAll(".navlink");
  navLinks.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add(
        "text-green-800",
        "border-2",
        "border-green-700",
        "hover:border-[#caf100]"
      );
    } else {
      link.classList.remove(
        "text-green-800",
        "border-2",
        "border-green-700",
        "hover:border-[#caf100]",
        "rounded-md",
        "shadow"
      );
    }
  });
}

// -------------------------
//Carousel
const slides = [
  {
    url: "https://cdn.pixabay.com/photo/2020/09/18/21/12/person-5582976_640.jpg",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5JTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGtpZCUyMHNvbHZpbmclMjBwdXp6bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.pexels.com/photos/8617569/pexels-photo-8617569.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

let currentIndex = 0;

// Function to start automatic sliding
function startAutoSwipe() {
  autoSwipeInterval = setInterval(nextSlide, 3000); // Start interval and store its ID
}

// Function to reset the automatic sliding interval
function resetAutoSwipe() {
  clearInterval(autoSwipeInterval); // Clear the existing interval
  startAutoSwipe(); // Start a new interval
}

// Function to handle previous slide
const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  currentIndex = newIndex;
  updateBackground();
  resetAutoSwipe(); // Reset the automatic sliding interval
};

// Function to handle next slide
const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  currentIndex = newIndex;
  updateBackground();
  resetAutoSwipe(); // Reset the automatic sliding interval
};

// Function to handle going to a specific slide
const goToSlide = (slideIndex) => {
  currentIndex = slideIndex;
  updateBackground();
  resetAutoSwipe(); // Reset the automatic sliding interval
};

// Function to update background image
const updateBackground = () => {
  const backgroundImage = `url(${slides[currentIndex].url})`;
  document.querySelector(".Carousel-Image").style.backgroundImage =
    backgroundImage;
};

// Call startAutoSwipe function to initiate automatic sliding
updateBackground();
startAutoSwipe();

//Hero - Testimonial

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// Reveal elements
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowlength = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowlength - revealpoint) {
      reveals[i].classList.add("active");
    }
    // ucomment if want the emelnts to hide after scroll up
    // else {
    //   reveals[i].classList.remove("active");
    // }
  }
}
