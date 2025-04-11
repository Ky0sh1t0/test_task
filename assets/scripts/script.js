
const backdropModal = document.createElement('div');

const videoplayerEl = document.querySelector('.videoplayer');
let videoDuration = null;

function showModal() {
    backdropModal.classList.add('backdropModal');
    backdropModal.onclick = closeModal;
    document.body.insertAdjacentElement('beforeend', backdropModal);
    document.body.classList.add('noscroll')
    document.querySelector('.modal').classList.remove('d-none');
}

function closeModal() {
    document.querySelector('.modal').classList.add('d-none')
    document.body.classList.remove('noscroll');
    const elForDel = document.querySelector('.backdropModal');
    document.body.removeChild(elForDel)
}

function playVideo() {
    if(videoplayerEl.classList.contains('playing')) {
        videoplayerEl.pause();
        videoplayerEl.classList.remove('playing');
        document.querySelector('.btn-play').classList.remove('d-none')   
    } else {
        videoplayerEl.play();
        videoplayerEl.classList.add('playing');
        document.querySelector('.btn-play').classList.add('d-none')        
    }    
}



$(document).ready(function() {
    $('.tm__WhyDlex .tm__WhyDlex-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        appendArrows: $('.slick-nav-custom'),
        appendDots: $('.slick-nav-custom .slick-nav-custom-dots'),
    })

    videoplayerEl.onloadedmetadata = function() {
        console.log(videoplayerEl)
        videoDuration = parseFloat(videoplayerEl.duration / 2);
        console.log(videoDuration)
    }
    
    let videotime = null;

    videoplayerEl.addEventListener('timeupdate', (el) => {
    
        if (videotime < videoDuration) {
            videotime += .25;
            console.log(videotime);
        } else {
            showModal();
            videoplayerEl.pause;
            videotime = 0;
        }
    })
})
