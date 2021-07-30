const $ = document.querySelector.bind(document)

 const content_desc = $('.content-desc-more')
 
 content_desc.addEventListener('click', function(){
     $('.content-desc').classList.toggle('desc_more')
     let more = $('.content-desc.desc_more')
     if(more){
        content_desc.innerHTML = "ẨN BỚT"
     } else {
        content_desc.innerHTML = "HIỂN THỊ THÊM"

     }
 })

 const btn_subscribe = $('.btn-channel')

 btn_subscribe.addEventListener('click', () =>{
    let btn_sub_active = $('.btn-channel.btn-channel-active')
    if(btn_sub_active){
        btn_subscribe.classList.toggle('btn-channel-active')
        btn_subscribe.innerHTML = 'HỦY ĐĂNG KÍ'
        $('.icon-bell').classList.toggle('active');
    } else{
        btn_subscribe.classList.toggle('btn-channel-active')
        btn_subscribe.innerHTML = 'ĐĂNG KÍ'
        $('.icon-bell').classList.toggle('active');
    }
    
 })

 const input_cmts = document.querySelectorAll('.comments-user-input input')
 const comments_btn_cmt = document.querySelectorAll('.comments_btn-cmt')
 const  comments_user_btn = document.querySelectorAll('.comments-user-btn')
input_cmts.forEach((input_cmt, index) => {

    input_cmt.onkeyup = (e) => {
        // console.log(e)
        let user_cmt = e.target.value;
        if(user_cmt){
           comments_user_btn[index].style.display = 'block';
           comments_btn_cmt[index].classList.add('cmt_active')
        } else {
           comments_btn_cmt[index].classList.remove('cmt_active')
          comments_user_btn[index].style.display = 'none';
        }
     }
})

 const comments_reports = document.querySelectorAll('.comments-user_text_icon')
 let report_btns = document.querySelectorAll('.comments-report')

comments_reports.forEach((item, index)=>{
    item.addEventListener('click',function(){
        console.log(report_btns[index])
        report_btns[index].classList.toggle('active')
    })
})


let linked_num = document.querySelectorAll('.like_number')
let dislinked_num = document.querySelectorAll('.dislike_number')
let dislinked_num2 = dislinked_num.innerHTML
let likes_btn = document.querySelectorAll('.comments-action-item .bxs-like')
let like_btn = document.querySelectorAll('.comments-action-item .bxs-like')
let dislikes_btn = document.querySelectorAll('.comments-action-item .bxs-dislike')
let dislike_btn = document.querySelectorAll('.comments-action-item .bxs-dislike')


likes_btn.forEach((item, index) =>{
    item.addEventListener('click',function(){
        let ktNum = this.classList.toggle('tag_link')
        let linked_num2 = linked_num[index].innerHTML

            if(ktNum){
                linked_num[index].innerHTML = Number(linked_num2) + 1
                 dislike_btn[index].classList.remove('tag_link')

            } else{
                linked_num[index].innerHTML = Number(linked_num2) - 1
            }
    })
})

dislikes_btn.forEach((item, index) =>{
item.addEventListener('click',function(){
    let ktNum = this.classList.toggle('tag_link')
    let dislinked_num2 = dislinked_num[index].innerHTML

        if(ktNum){
            dislinked_num[index].innerHTML = Number(dislinked_num2) + 1
            like_btn[index].classList.remove('tag_link')
        } else{
            dislinked_num[index].innerHTML = Number(dislinked_num2) - 1
        }
    })
})



const comments_reps = document.querySelectorAll('.comments_rep_fix')
const comments_rep_box_cancels = document.querySelectorAll('.comments_rep_box_cancel')
const comment_user_rep = document.querySelectorAll('.comments_rep_box-fix')

comments_reps.forEach((item, index) => {
    item.addEventListener('click',function(){
        if(comment_user_rep[index]){
            comment_user_rep[index].classList.add('active')
        }
    })
})
comments_rep_box_cancels.forEach((item, index) => {
    item.addEventListener('click',function(){
        if(comment_user_rep[index]){
            comment_user_rep[index].classList.remove('active')
        }
    })
})


const comments_btn_more = document.querySelectorAll('.comments_btn_more')
const comments_box_list = document.querySelectorAll('.comments_box-list')

console.log(comments_btn_more.children)
comments_btn_more.forEach((item,index) => {
    item.addEventListener('click',function(){
        let result = comments_box_list[index].classList.toggle('active')
        let resultNum = comments_box_list[index].children.length
        console.log(resultNum)
        if(result){
            this.innerHTML = `Ẩn ${resultNum} phản hồi`
        } else{
            this.innerHTML = `Xem ${resultNum} câu trả lời`
        }
    })
})


  

setInterval(() => {
    reponsiveYT()
}, 1000);

function reponsiveYT(){
    const heightListVideo =  document.querySelector('.video_list').offsetHeight
    const content_comments = document.querySelector('.content-comments')
    const content = document.querySelector('.content').offsetWidth
    if(content <= 1000){
        content_comments.style.marginTop = heightListVideo + 'px'
    } else {
        content_comments.style.marginTop = ''
    }

}

