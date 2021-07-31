
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
    const mic_active = document.querySelector('.mic-content-box')
    const mic_active2 = document.querySelector('.mic-content-box .bxs-microphone')
    const mic_noti = document.querySelector('.mic-noti')
    const mic_title = document.querySelector('.mic-content-title')
    
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    const recodnition = new SpeechRecognition();

    console.log(btn_microphone)

    recodnition.lang = 'vi-VI'
    recodnition.continuous = false;

    btn_microphone.addEventListener('click',function(e){
        mic_title.innerHTML = "Đang nghe..."
        e.preventDefault();
        recodnition.start();
        modal_microphone.classList.toggle('active');
        btn_mic.classList.toggle('mic-active');
    })

    recodnition.onspeeched = () => {
            recodnition.stop();
    }
    recodnition.onerror = (err) => {
        let text = err.type
        console.log(text)

        if(text == 'error'){
        mic_title.innerHTML = "Tôi chưa nghe rõ. Mời bạn nói lại."
            mic_noti.style.display = 'block'
            mic_active.classList.remove('mic-active')
        }
        
    }   
    recodnition.onresult = (e) => {
        let input_search = document.querySelector('.input-search')
        console.log(e)
        mic_title.innerHTML = e.results[0][0].transcript
        setTimeout(() => {
            modal_microphone.classList.toggle('active');
            btn_mic.classList.toggle('mic-active');
            input_search.value = e.results[0][0].transcript
        }, 2000);
    }

    btn_x.addEventListener('click', function(){
        modal_microphone.classList.toggle('active');
        btn_mic.classList.toggle('mic-active');
        recodnition.stop();
    })
    mic_sub.addEventListener('click', function(){
        modal_microphone.classList.toggle('active');
        btn_mic.classList.toggle('mic-active');
        recodnition.stop();
    })

    mic_active2.addEventListener('click', function(e){
        mic_active.classList.add('mic-active')
        mic_noti.style.display = 'none'
        e.preventDefault();
        recodnition.start();
        mic_title.innerHTML = "Đang nghe..."

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
    