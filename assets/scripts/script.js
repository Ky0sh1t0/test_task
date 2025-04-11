
const backdropModal = document.createElement('div');
const backdropMenu = document.createElement('div');

const videoplayerEl = document.getElementById('videoplayer');
let videoDuration = null;

// function declared background el for all modals e.t.c
function addBackdrop(backdropEl, className, functionName) {
    document.body.classList.add('noscroll')
    backdropEl.classList.add(className);
    backdropEl.onclick = functionName;
    document.body.insertAdjacentElement('beforeend', backdropEl);
}

function deleteBackDrop(elClassName) {
    document.body.classList.remove('noscroll');
    const elForDel = document.querySelector(elClassName);
    document.body.removeChild(elForDel)
}


//Modal popup
function showModal() {
    addBackdrop(backdropModal, 'backdropModal', closeModal);
    document.querySelector('.modal').classList.remove('d-none');
}

function closeModal() {
    document.querySelector('.modal').classList.add('d-none')
    deleteBackDrop('.backdropModal')
    if (burgerMenuEl.classList.contains('d-visible')) {

    }
}

// menuDrop
const burgerMenuEl = document.querySelector('.burger-menu-content');

function openMenu() {
    burgerMenuEl.classList.add('d-visible');
    addBackdrop(backdropMenu, 'backdropShadow', closeMenu);
}

function closeMenu() {
    burgerMenuEl.classList.remove('d-visible');
    deleteBackDrop('.backdropShadow');
}


function playVideo() {
    
    videoDuration = parseFloat(videoplayerEl.duration / 2);

    if(videoplayerEl.classList.contains('playing')) {
        videoplayerEl.pause();
        videoplayerEl.classList.remove('playing');
        document.querySelector('.btn-play').classList.remove('d-opacity')   
    } else {
        videoplayerEl.play();
        videoplayerEl.classList.add('playing');
        document.querySelector('.btn-play').classList.add('d-opacity')        
    }    
}



$(document).ready(function() {
    
    // slider activation
    $('.tm__WhyDlex .tm__WhyDlex-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        appendArrows: $('.slick-nav-custom'),
        appendDots: $('.slick-nav-custom .slick-nav-custom-dots'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    adaptiveHeight: true,
                    dots: false,
                    arrows: false,
                    centetMode: true,
                    centerPadding: 30,
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                }
            }
        ]
    })
    

    // timeline video modal popup
    let videotime = null;
    videoplayerEl.addEventListener('timeupdate', (el) => {
    
        if (videotime < videoDuration) {
            videotime += .25;
        } else {
            showModal();
            videoplayerEl.pause();
            videotime = 0;
            videoplayerEl.classList.remove('playing');
            document.querySelector('.btn-play').classList.remove('d-none')   
        }
    })
})
