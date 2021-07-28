const btn_video = document.querySelector('.bxs-video-plus')
const dropdown_video = document.querySelector('.video-dropdown-list')

const btn_grid = document.querySelector('.bxs-grid')
const dropdown_grid = document.querySelector('.gird-dropdown')

const btn_user = document.querySelector('.user-img')
const dropdown_user = document.querySelector('.user-dropdown')

const btn_bell = document.querySelector('.bxs-bell')
const dropdown_bell = document.querySelector('.bell-dropdown')

const btn_microphone = document.querySelector('.bxs-microphone')
const btn_mic = document.querySelector('.mic-content-box')
const btn_x = document.querySelector('.btn-x')
const modal_microphone = document.querySelector('.modal-microphone')
const mic_sub = document.querySelector('.mic-sub')


function audio_mic(){
    let mic_title = document.querySelector('.mic-content-title')
    let mic_noti = document.querySelector('.mic-noti')
    mic_noti.style.display = 'none'
    btn_mic.classList.toggle('mic-active');
    setTimeout(() => {
        btn_mic.classList.remove('mic-active');
        mic_noti.style.display = 'block'
        mic_title.innerHTML = 'Tôi chưa nghe rõ. Mời bạn nói lại.'
    }, 5000);
}

btn_mic.addEventListener('click', function(){
    let mic_title = document.querySelector('.mic-content-title')
    let mic_noti = document.querySelector('.mic-noti')
    mic_noti.style.display = 'none'
    btn_mic.classList.toggle('mic-active');
    mic_title.innerHTML ='Đang nghe...'
    setTimeout(() => {
        btn_mic.classList.remove('mic-active');
        mic_noti.style.display = 'block'
        mic_title.innerHTML = 'Tôi chưa nghe rõ. Mời bạn nói lại.'
    }, 5000);
});

btn_microphone.addEventListener('click', function(){
    modal_microphone.classList.toggle('active');
    // btn_mic.classList.add('mic-active');
    audio_mic()
});
btn_x.addEventListener('click', function(){
    modal_microphone.classList.toggle('active');
})
mic_sub.addEventListener('click', function(){
    modal_microphone.classList.remove('active');
})

btn_user.addEventListener('click', function(){
    dropdown_user.classList.toggle('active');
    document.querySelector('.gird-dropdown.active').classList.remove('active')
    document.querySelector('.video-dropdown-list.active').classList.remove('active')
    document.querySelector('.bell-dropdown.active').classList.remove('active')
});
btn_video.addEventListener('click', function(){
    dropdown_video.classList.toggle('active');
    document.querySelector('.gird-dropdown.active').classList.remove('active')
    document.querySelector('.user-dropdown.active').classList.remove('active')
});
btn_grid.addEventListener('click', function(){
    dropdown_grid.classList.toggle('active');
    document.querySelector('.user-dropdown.active').classList.remove('active')
    document.querySelector('.video-dropdown-list.active').classList.remove('active')

});
btn_bell.addEventListener('click', function(){
    dropdown_bell.classList.toggle('active');
    document.querySelector('.video-dropdown-list.active').classList.remove('active')
    document.querySelector('.user-dropdown.active').classList.remove('active')
});


// End header

const btn_sidebar1 = document.querySelector('.btn-sidebar1')
const btn_sidebar2 = document.querySelector('.btn-sidebar2')
const sidebar = document.querySelector('.sidebar')
const sidebar_sub = document.querySelector('.sidebar-sub')

btn_sidebar1.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar-active');
    sidebar_sub.classList.add('active')
    
});
btn_sidebar2.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar-active');
    sidebar_sub.classList.remove('active')
});
sidebar_sub.addEventListener('click', function(){
    sidebar_sub.classList.remove('active')
    sidebar.classList.remove('sidebar-active');
})


// input header

const inputSearch = document.querySelector('input')
const inputList = document.querySelector('.input-dropdowm-list')
const input_dropdowm = document.querySelector('.input-dropdowm')

inputSearch.onkeyup = (e) => {
    let user_data = e.target.value;
    let array = [];
    if (user_data){
        array = listS.filter((data)=> {
            return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
        });
        array = array.map((data)=> {
            return data = 
            `<li class="input-dropdowm-item">
                <a class="input-dropdowm-item_heading" href="#">${data}</a>
            </li>`
        })
    }else{
        inputList.innerHTML = `${data}`
    }
    showHistory(array)
}


function showHistory(list){
    let list_data;
    if(!list.length){
        userValue = inputSearch.value;
        list_data = 
        `<li class="input-dropdowm-item">
            <a class="input-dropdowm-item_heading" href="#">${userValue}</a>
        </li>`
    } else{
        list_data = list.join('');
    }
    inputList.innerHTML = list_data;
}

// sidebar 

const btn_add = document.querySelector('.btn-add');
const btn_add_hai = document.querySelector('.btn-add-hai');

btn_add.addEventListener('click', function(){
    let btn_more_down = document.querySelector('.btn_more_down')
    let sidebar_more = document.querySelector('.sidebar-center-list-more')
    let sidebar_more_title = document.querySelector('.sidebar_more_title')
    let sidebar_more2 = document.querySelector('.sidebar-center-list-more.add_more')
    sidebar_more.classList.toggle('add_more');
    btn_more_down.classList.toggle('btn_more_up')

    if(!sidebar_more2){
        sidebar_more_title.innerHTML = 'Ẩn bớt'
    } else {
        sidebar_more_title.innerHTML = 'Hiển thị thêm'
    }
})
btn_add_hai.addEventListener('click', function(){
    let btn_more_down = document.querySelector('.btn_more_down2')
    let sidebar_more = document.querySelector('.sidebar-center2-list-more')
    let sidebar_more_title = document.querySelector('.sidebar_more_title2')
    let abc_xyz = document.querySelector('.sidebar-top-list.sidebar-center2-list-more.add_more')
    sidebar_more.classList.toggle('add_more');
    btn_more_down.classList.toggle('btn_more_up')

    if(!abc_xyz){
        sidebar_more_title.innerHTML = 'Ẩn bớt'
    } else {
        sidebar_more_title.innerHTML = 'Hiển thị thêm'
    }
})

// Video Loading

const btn_play = document.querySelector('.bxs-right-arrow')
const btn_pause = document.querySelector('.bxs-right-arrow')
const video = document.querySelector('video')



video.addEventListener('click', function(){
    btn_action()
    playPause()
})
btn_play.addEventListener('click', function(){
    btn_action()
    playPause()
})

function btn_action(){
    let bx_pause = document.querySelector('.bx-pause-fix.btn_Action')
    let bx_pause2 = document.querySelector('.bx-pause-fix')
    let bx_play2 = document.querySelector('.bxs-right-arrow-fix')
    if(bx_pause){
        bx_play2.classList.toggle('btn_Action')
        bx_pause.classList.toggle('btn_Action')
    }else{
        bx_pause2.classList.add('btn_Action')
        bx_play2.classList.remove('btn_Action')
    }
}

function playPause() { 
    if (video.paused) 
      video.play(); 
    else 
      video.pause(); 
} 

// Footer Video

const inputProgressVideo = document.querySelector('.btn_video-line input')
const inputProgressAudio = document.querySelector('.btn_video-box input')
const btn_volume = document.querySelector('.btn-volume')
const btn_setting = document.querySelector('.btn-setting')
const  fullscreen = document.querySelector('.bx-fullscreen')
const  picture = document.querySelector('.bx-rectangle')

btn_volume.addEventListener('click', function(){
    let volume_action = document.querySelector('.btn-volum-off')
    let result = volume_action.classList.toggle('volum-active');
    if(result){
        // volume_action.classList.add('volum-active')
        video.volume = 0;
    } else {
        volume_action.classList.remove('volum-active')
        video.volume = inputProgressAudio.value;
    }
    
});

inputProgressAudio.addEventListener('click', function(){
    let volume_off = document.querySelector('.btn-volum-off')
    if(video.volume == '0' ){
        volume_off.classList.add('volum-active');
    } else{
        volume_off.classList.remove('volum-active');
        video,play()
    }
});

inputProgressAudio.onchange = function(e){
    const seekVolume =  e.target.value ;
    // console.log(e.target.value)
    video.volume = seekVolume;
}
video.ontimeupdate = function(){
    if(video.duration){
        const progress = Math.floor(video.currentTime / video.duration * 100);
        inputProgressAudio.value = progress;
    }
}

video.ontimeupdate = function(){
    if(video.duration){
        const progress = Math.floor(video.currentTime / video.duration * 100);
        inputProgressVideo.value = progress;
    }
}

inputProgressVideo.onchange = function(e){
    const seekTime = video.duration / 100 * e.target.value;
    video.currentTime = seekTime;
}

setInterval(() => {
    let currentMins = document.querySelector('.currentMins')
    let currentSeconds = document.querySelector('.currentSeconds')
    let durationMins = document.querySelector('.durationMins')
    let durationSeconds = document.querySelector('.durationSeconds')
    let cuMins = Math.floor(video.currentTime / 60 )
    let cuSeconds = Math.floor(video.currentTime % 60)
    let duMins = Math.floor(video.duration / 60 )
    let duSeconds = Math.floor(video.duration % 60)

    currentMins.innerHTML = cuMins;
    currentSeconds.innerHTML = cuSeconds;
    durationMins.innerHTML = duMins;
    durationSeconds.innerHTML = duSeconds;

}, 1000);

fullscreen.addEventListener('click', () => {
    openFullscreen();
})

function openFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }

  
  picture.addEventListener("click", async () => {
        if (video.requestPictureInPicture) {
          video.requestPictureInPicture();
        } 
  });

btn_setting.addEventListener("click", () => {
     let box_seting = document.querySelector('.box-seting')
     box_seting.classList.toggle('volum-active')
});




const social1 = document.querySelector('.content_info-like1')
const social2 = document.querySelector('.content_info-like2')
const social_share = document.querySelector('.content_info-share')
const social_save = document.querySelector('.content_info-social-item2')
const social_report = document.querySelector('.btn-report')

const btn_off = document.querySelector('.share-box_header-close-fix')
const modal_box = document.querySelector('.share-box')

social1.addEventListener('click', function(){
    this.classList.toggle('like-active')
    document.querySelector('.content_info-like2.like-active').classList.remove('like-active')
})
social2.addEventListener('click', function(){
    this.classList.toggle('like-active')
    document.querySelector('.content_info-like1.like-active').classList.remove('like-active')
})

const modal_blur = document.querySelector('.modal_blur')

function moda_box(){
    modal_box.classList.toggle('active')
}
function moda_blur() {
    modal_blur.classList.toggle('active')
}

social_share.addEventListener('click', function(){
    moda_box()
    moda_blur()
})
btn_off.addEventListener('click', function(){
    moda_box()
    moda_blur()
})
// modal_blur.addEventListener('click', function(){
//     moda_box()
//     moda_blur()
// })

const modal_box__off =document.querySelector('.modal_box-title-close')
const btn_listnew = document.querySelector('.btn-listnew')

btn_listnew.addEventListener('click',function(){
    let save_footer = document.querySelector('.save-box-footer')
        this.style.display = 'none'
        save_footer.classList.add('active')
})
social_save.addEventListener('click', function(){
    moda_blur()
    let save_box = document.querySelector('.save-box');
    save_box.classList.add('active')
})
modal_box__off.addEventListener('click', function(){
    moda_blur()
    let save_box = document.querySelector('.save-box');
    save_box.classList.remove('active')
})
social_report.addEventListener('click', function(){
    document.querySelector('.box-report').classList.toggle('active')
})

video.play()
