
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
    