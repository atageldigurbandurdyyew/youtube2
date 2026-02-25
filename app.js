document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const header = document.querySelector('.header');
    const mobileSearchIcon = document.querySelector('.mobile-search-icon');
    const searchBox = document.querySelector('.search-box');
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    menuBtn.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        } else {
            sidebar.classList.toggle('collapsed');
            content.classList.toggle('expanded');
            
            const isCollapsed = sidebar.classList.contains('collapsed');
            toggleLabels(!isCollapsed);
        }
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    function toggleLabels(show) {
        const labels = sidebar.querySelectorAll('span, .section-title, hr');
        labels.forEach(el => el.style.display = show ? 'block' : 'none');
        
        sidebar.querySelectorAll('.nav-item').forEach(item => {
            const icon = item.querySelector('i');
            if (!show) {
                item.style.flexDirection = 'column';
                item.style.height = '72px';
                item.style.justifyContent = 'center';
                if(icon) {
                    icon.style.marginRight = '0';
                    icon.style.marginBottom = '4px';
                    icon.style.fontSize = '24px';
                }
            } else {
                item.style.flexDirection = 'row';
                item.style.height = '40px';
                item.style.justifyContent = 'flex-start';
                if(icon) {
                    icon.style.marginRight = '24px';
                    icon.style.marginBottom = '0';
                    icon.style.fontSize = '20px';
                }
            }
        });
    }

    mobileSearchIcon.onclick = () => {
        if (window.innerWidth <= 992) {
            header.classList.add('search-mode-active');
            const input = searchBox.querySelector('input');
            setTimeout(() => input.focus(), 100);
            
            if (!document.getElementById('search-back-btn')) {
                const backBtn = document.createElement('i');
                backBtn.className = 'fa-solid fa-arrow-left icon-btn';
                backBtn.id = 'search-back-btn';
                backBtn.style.marginRight = '10px';
                header.prepend(backBtn);
                backBtn.onclick = () => {
                    header.classList.remove('search-mode-active');
                    backBtn.remove();
                };
            }
        }
    };

    document.querySelectorAll('.cat-item').forEach(btn => {
        btn.onclick = function() {
            const activeCat = document.querySelector('.cat-item.active');
            if(activeCat) activeCat.classList.remove('active');
            this.classList.add('active');
        };
    });
});