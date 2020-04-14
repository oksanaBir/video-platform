const getMenuButton = () => document.querySelector('.menu .hide');
const getMenuItems = () => [...document.querySelectorAll('.menu-item')];
const getVisibleSidebar = () => document.querySelector('.sidebar .visible');
const getSidebarItemHideButton = () => document.querySelector('.sidebar .hide');
const getSidebarItemMoreButton = () => document.querySelector('.sidebar .more');
const getSidebarHideButton = () => document.querySelector('.sidebar .title .icon');
const getSidebar = () => document.querySelector('.sidebar');
const getContent = () => document.querySelector('.main-content');
const getProfileImages = () => [...document.querySelectorAll('.sidebar .photo')];
const getSearchForm = () => document.querySelector('.sidebar .search-form');
const getSlides = () => [...document.querySelectorAll('.slide')];
const getSliderLeftButton = () => document.querySelector('.slider .left');
const getSliderRightButton = () => document.querySelector('.slider .right');
const getMoreArtButton = () => document.getElementById('art');
const getMoreActiveButton = () => document.getElementById('active');
const getArtChannel = () => document.querySelector('.recomended .art');
const getActiveChannel = () => document.querySelector('.recomended .active');
const getArtWrapper = () => document.querySelector('.wrapper-art');
const getActiveWrapper = () => document.querySelector('.wrapper-active');


document.addEventListener('DOMContentLoaded', () => {
    let isOpenMenu = true;
    let isOpenSidebarItems = true;
    let isOpenSidebar = true;
    let isOpenMoreActiveVideo = true;
    let isOpenMoreArtVideo = true;

    const slides = getSlides();

    const toggleMenu = () => {
        if(isOpenMenu) {
            isOpenMenu = false;  
            getMenuItems().map((item) => {
                item.style.display = 'flex';
            });
        } else {
            isOpenMenu = true;
            getMenuItems().map((item) => {
                item.style.display = 'none';
            });
        }
    }

    const toggleSidebarItems = () => {
        if(isOpenSidebarItems) {
            isOpenSidebarItems = false;
            getVisibleSidebar().style.overflow = 'hidden';
            getSidebarItemHideButton().style.display = 'none';
            getSidebarItemMoreButton().style.display = 'block';
        } else {
            isOpenSidebarItems = true;
            getVisibleSidebar().style.overflow = 'visible';
            getSidebarItemHideButton().style.display = 'block';
            getSidebarItemMoreButton().style.display = 'none';
        }
    }

    const toggleSidebar = () => {
        if(isOpenSidebar) {
            isOpenSidebar = false;
            getSidebar().style.left = '-240px';
            getContent().style.paddingLeft = '60px';
            getSearchForm().style.display = 'none';
            getProfileImages().map((image) => {
                image.style.float = 'right';
            });
        } else {
            isOpenSidebar = true;
            getSidebar().style.left = '0px';
            getSearchForm().style.display = 'flex';
            getProfileImages().map((image) => {
                image.style.float = 'left';
            });
            getContent().style.paddingLeft = '300px';
        }
    }

    const toggleActiveVideo = () => {
        if(isOpenMoreActiveVideo) {
            openActiveVideo();
        } else {
            closeActiveVideo();
        }
    }

    const openActiveVideo = () => {
        isOpenMoreActiveVideo = false;
        getActiveWrapper().style.height = getActiveChannel().offsetHeight + 'px';
    }

    const closeActiveVideo = () => {
        isOpenMoreActiveVideo = true;
        getActiveWrapper().style.height = '290px';
    }

    const toggleArtVideo = () => {
        if(isOpenMoreArtVideo) {
            openArtVideo();
        } else {
            closeArtVideo();
        }
    }

    const openArtVideo = () => {
        isOpenMoreArtVideo = false;
        getArtWrapper().style.height = getArtChannel().offsetHeight + 'px';
    }

    const closeArtVideo = () => {
        isOpenMoreArtVideo = true;
        getArtWrapper().style.height = '290px';
    }

    const closeVideo = () => {
        closeActiveVideo();
        closeArtVideo();
    }

    window.onresize = closeVideo;

    const slidesStyles = [
        { transform: 'translateX(-180px) scale(0.8)', zIndex: 1 },
        { transform: 'translateX(-90px) scale(0.9)', zIndex: 2 },
        { transform: 'translateX(0px) scale(1)', zIndex: 3 },
        { transform: 'translateX(90px) scale(0.9)', zIndex: 2 },
        { transform: 'translateX(180px) scale(0.8)', zIndex: 1 },
    ];

    let i = 5;

    const changeSlidesStyles = () => {
        slides.slice(i).concat(slides.slice(0,i)).map((slide,key) => {
            slide.style.transform = `${slidesStyles[key].transform}`;
            slide.style.zIndex = ` ${slidesStyles[key].zIndex}`;
        });
    }

    const moveSlidesLeft = () => {
        i == 1 ? i = 5 : i--;
        changeSlidesStyles();
    }

    const moveSlidesRight = () => {
        i == 5 ? i = 1 : i++;
        changeSlidesStyles();
    }

    getMenuButton().onclick = toggleMenu;
    getSidebarItemHideButton().onclick = toggleSidebarItems;
    getSidebarItemMoreButton().onclick = toggleSidebarItems;
    getSidebarHideButton().onclick = toggleSidebar;
    getMoreArtButton().onclick = toggleArtVideo;
    getMoreActiveButton().onclick = toggleActiveVideo;
    getSliderLeftButton().onclick = moveSlidesLeft;
    getSliderRightButton().onclick = moveSlidesRight;
    changeSlidesStyles();
});