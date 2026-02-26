const header = document.getElementById('main-header');
const mobileSearchBtn = document.querySelector('.mobile-search-icon');
const headerCenter = document.getElementById('search-container');
const searchInput = document.getElementById('main-search');

const backBtn = document.createElement('i');
backBtn.className = 'fa-solid fa-arrow-left back-btn icon-btn';
headerCenter.prepend(backBtn);

mobileSearchBtn.addEventListener('click', () => {
    header.classList.add('search-active');
    searchInput.focus();
});

backBtn.addEventListener('click', () => {
    header.classList.remove('search-active');
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.innerWidth > 651) {
        header.classList.remove('header-hidden');
        return; 
    }

    if (header.classList.contains('search-active')) return;

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScrollY = window.scrollY;
});


document.addEventListener('click', (e) => {
    if (!createWrapper.contains(e.target)) {
        createDropdown.classList.remove('show-menu');
    }
});


const mobileSearchIcon = document.querySelector('.mobile-search-icon');
const headerElement = document.getElementById('main-header');

mobileSearchIcon.addEventListener('click', () => {
    headerElement.classList.add('search-active');
    setTimeout(() => document.getElementById('main-search').focus(), 100);
});

const backButton = document.querySelector('.back-btn'); 
if(backButton) {
    backButton.addEventListener('click', () => {
        headerElement.classList.remove('search-active');
    });
}


const filterBar = document.getElementById('category-bar');
const drawerTrigger = document.getElementById('explore-drawer-trigger'); 
const menuBtn = document.getElementById('menu-btn');                   
const closeBtn = document.getElementById('close-menu');          
const sideDrawer = document.getElementById('sidebar-drawer');
const sideOverlay = document.getElementById('sidebar-overlay');

let previousScrollY = window.scrollY;


const openDrawer = (event) => {
    if (event) event.stopPropagation();
    sideDrawer.classList.add('open');
    sideOverlay.classList.add('active');
    document.body.style.overflow = "hidden"; 
};

const closeDrawer = () => {
    sideDrawer.classList.remove('open');
    sideOverlay.classList.remove('active');
    document.body.style.overflow = "auto";  
};


if (menuBtn) menuBtn.addEventListener('click', openDrawer);
if (drawerTrigger) drawerTrigger.addEventListener('click', openDrawer);


if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
if (sideOverlay) sideOverlay.addEventListener('click', closeDrawer);


document.addEventListener('click', (event) => {
    const isDrawerOpen = sideDrawer.classList.contains('open');
    const isClickInsideDrawer = sideDrawer.contains(event.target);

    if (isDrawerOpen && !isClickInsideDrawer) {
        closeDrawer();
    }
});



window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;


    if (window.innerWidth <= 651) {

        const isDrawerOpen = sideDrawer.classList.contains('open');
        
        if (!isDrawerOpen) {
            if (currentScrollY > previousScrollY && currentScrollY > 50) {

                filterBar.style.transform = "translateY(-112px)";
            } else {

                filterBar.style.transform = "translateY(0)";
            }
        }
    } else {

        filterBar.style.transform = "translateY(0)";
    }
    
    previousScrollY = currentScrollY;
});


let lastScroll = window.scrollY;
const mobileNav = document.getElementById('mobile-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (window.innerWidth <= 651) {
        if (currentScroll > lastScroll && currentScroll > 50) {

            mobileNav.classList.add('nav-hidden');
        } else {
            mobileNav.classList.remove('nav-hidden');
        }
    }
    
    lastScroll = currentScroll;
});




window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (window.innerWidth > 651) {
        if (currentScroll < lastScroll && currentScroll < 50) {

            mobileNav.classList.add('nav-hidden');
        } else {
            mobileNav.classList.remove('nav-hidden');
        }
    }
    
    lastScroll = currentScroll;
});









    document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.onclick = function() {

        const parent = this.closest('.nav-section');
        const hiddenContent = parent.querySelector('.hidden-items');
        const toggleText = this.querySelector('.toggle-text');
        const toggleIcon = this.querySelector('.toggle-icon');

        hiddenContent.classList.toggle('show');
        this.classList.toggle('active');

        if (hiddenContent.classList.contains('show')) {
            toggleText.innerText = "Show less";
            if(toggleIcon) toggleIcon.style.transform = "rotate(180deg)";
        } else {
            toggleText.innerText = "Show more";
            if(toggleIcon) toggleIcon.style.transform = "rotate(0deg)";
        }
    };
});

    

    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoTitle = card.querySelector('h3').innerText;
            console.log("Playing: " + videoTitle);
        });
    });

    const adjustLayout = () => {
        const content = document.querySelector('.content');
        if (window.innerWidth <= 768) {
            content.style.marginLeft = "0";
        } else {
        }
    };

    window.addEventListener('resize', adjustLayout);



    const avatars = document.querySelectorAll('.sub-profilo');
        
        const colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#00bcd4', '#4caf50', '#ff9800', '#795548'];

        avatars.forEach(avatar => {

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            avatar.style.backgroundColor = randomColor;
        });
