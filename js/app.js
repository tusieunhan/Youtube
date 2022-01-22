
const PlatList = "PL0NlNYU99BSPdY4LRpWTFcXf3EWPZyYD8"
const APIURL =
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=20&playlistId=${PlatList}&key=AIzaSyC3x0nIWqBt0f6mPKkf2-YT-BZhynqnTBA`


const main = document.querySelector('.video_list')


// initially get fav movies
getMovies(APIURL);
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData)
    Promise
    .then(
        showMovies(respData.items),
        showMovie(respData.items),
        showHinh(respData.items),
        app()
    )
}
function showHinh(movies){
    const hinh = document.querySelectorAll('.video_item-photo')
     
    hinh.forEach((item, index) =>{
        item.innerHTML =
         `
            <img src="${movies[index].snippet.thumbnails.medium.url}" alt="hinh">
            
        `
    })
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";
    movies.forEach((movie, index) => {
        // const { snippet, title, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        const today = new Date()
        const up = new Date(movie.snippet.publishedAt)
        const mons = Math.floor((today - up) / (1000*60*60*24*30))
        let mon;
        let view = Math.floor(( today - up) / 100000000) 
            if ( mons >= 12){
                monY = Math.floor(mons / 12)
                mon =  monY + ' năm trước'
            }else{
                mon = mons + ' tháng trước'
            }
            movieEl.innerHTML = `
            <li class="video_item">
                <ul class="video_item-photo">
                <img src="./Image/img1.jpg" alt="hinh">
                </ul>
                <ul class="video_item_hover">
                    <div class="video_item-photo-hover">
                        <ul class="video_item-photo-hover1">
                            <li><i class='bx bx-play'></i></li>
                        </ul>
                        <ul class="video_item-photo-hover2">
                            <li><i class='bx bxs-time'></i></li>
                            <li><i class='bx bx-list-ul'></i></li>
                        </ul>
                     </div>
                </ul>
                <ul class="video_item-info">
                    <li>
                        <a  class="video_item-info-title">${movie.snippet.title}</a>
                    </li>
                    <li>
                        <span class="video_item-info-channel">${movie.snippet.channelTitle} <i class='bx bxs-check-circle'></i></span>
                    </li>
                    <li>
                        <span class="video_item-info-viewer"><span>${view} N lượt xem <i class='bx bxs-circle'></i> ${mon} </span></span>
                    </li>
                    <li><p class='video_item-info-tag' >Mới</p></li>
                </ul>
            </li>
            `;
        main.appendChild(movieEl);
    });
}


const video_main = document.querySelector('.content-left')

function showMovie(videos) {

    const title_video = document.querySelectorAll('.video_item')
    // const index = 1;
        title_video.forEach((element, index) => {
           element.addEventListener('click', function(){
            const dayP = videos[index].snippet.publishedAt
            const year = dayP.slice(0,4)
            const mon = dayP.slice(5,7)
            const day = dayP.slice(8,10)
            const today = new Date()
            const up = new Date(videos[index].snippet.publishedAt)
            let view1 = Math.floor(( today - up) / 100000000) 
            let view2 = view1 + 69
            let like = Math.floor(view1/10)
            let dislike = Math.floor(view1/9) + 351
            video_main.innerHTML =  `
            <div class="content-video">
            <iframe class="video" width="100%" height="720" src="https://www.youtube.com/embed/${videos[index].snippet.resourceId.videoId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ul class="play_center play_center-active">
            </ul>
        
            <div class="content-title">
                <h3 class="content_heading">${videos[index].snippet.title}</h3>
                <div class="content_info">
                    <div class="content_info-view">
                        <span class="content_info-viewer">${view1}.${view2} lượt xem</span>
                        <i class='bx bxs-circle'></i>
                        <span class="content_info-day">${day} thg ${mon}, ${year} </span>
                    </div>
                    <div class="content_info-social">
                        <ul class="content_info-social-list">
                            <li class="content_info-social-item content_info-like1 ">
                                <i class='bx bxs-like '>
                                    <div class="btn-line_line"></div>
                                </i>  
                                <a>${like}N</a>
                            </li>
                            <li class="content_info-social-item content_info-like2">
                                <i class='bx bxs-dislike' ></i>  
                                <a>${dislike}</a>
                            </li>
                            <li class="content_info-social-item content_info-share">
                                <i class='bx bxs-share' ></i>  
                                <a>CHIA SẼ</a>
                            </li>
                            <div class="modal_blur"></div>
                            <div class="share-box">
                                <div class="share-box_header">
                                    <h5 class="share-box_header-title">Chia sẻ</h5>
                                    <h5 class="share-box_header-close share-box_header-close-fix"><i class='bx bx-x'></i></h5>
                                </div>
                                <ul class="share-box_list">
                                    <li class="share-box-item">
                                        <div class="share-box-icon code "><i class='bx bx-code'></i></div>
                                        <p>Nhúng</p>
                                    </li>
                                    <li class="share-box-item">
                                        <div class="share-box-icon facebook"><i class='bx bxl-facebook'></i></div>
                                        <p>Facebook</p>
                                    </li>
                                    <li class="share-box-item">
                                        <div class="share-box-icon whatsapp"><i class='bx bxl-whatsapp' ></i></div>
                                        <p>Whatsapp</p>
                                    </li>
                                    <li class="share-box-item">
                                        <div class="share-box-icon twitter"><i class='bx bxl-twitter' ></i></div>
                                        <p>Twitter</p>
                                    </li>
                                    <li class="share-box-item">
                                        <div class="share-box-icon mail"><i class='bx bx-mail-send'></i></div>
                                        <p>Email</p>
                                    </li>
                                    <li class="share-box-item">
                                        <div class="share-box-icon github"><i class='bx bxl-github'></i></div>
                                        <p>Github</p>
                                    </li>
                                </ul>
                                <div class="share-box-copy">
                                    <p class="share-box-copy-content">https://youtu.be/${videos[index].snippet.resourceId.videoId}</p>
                                    <h4 class="share-box-copy-action">SAO CHÉP</h4>
                                </div>
                                <div class="share-box-footer">
                                    <input type="checkbox">
                                    <p>Bắt đầu tại</p>
                                </div>
                            </div>
                            <li class="content_info-social-item content_info-social-item2">
                                <i class='bx bx-list-plus' ></i>  
                                <a>LƯU</a>
                            </li>
                            <div class="save-box">
                                <div class="save-box-header">
                                    <p class="modal_box-title">Lưu vào...</p>
                                    <i class='bx modal_box-title-close bx-x'></i>
                                </div>
                                <ul class="save-box-list">
                                    <li class="save-box-item">
                                        <div class="save-box-item2">
                                            <input type="checkbox">
                                            <p>Xem sau</p>
                                        </div>
                                        <i class='bx bxs-lock'></i>
                                    </li>
                                    <li class="save-box-item">
                                        <div class="save-box-item2">
                                            <input type="checkbox">
                                            <p>Javascript</p>
                                        </div>
                                        <i class='bx bxs-lock'></i>
                                    </li>
                                    <li class="save-box-item">
                                        <div class="save-box-item2">
                                            <input type="checkbox">
                                            <p>F8 Official</p>
                                        </div>
                                        <i class='bx bxs-lock'></i>
                                    </li>
                                </ul>
                                <div class="btn-listnew">
                                    <i class='bx bx-plus'></i>
                                    <p>Tạo danh phát sách mới</p>
                                </div>
                                <ul class="save-box-footer">
                                    <li class="save-box-footer-item">
                                        <label for="">Tên</label>
                                        <input type="text" placeholder="Nhập tên danh sách phát...">
                                        <label class="coclassrieng" for="">0/150</label>
                                    </li>
                                    <li class="save-box-footer-item">
                                        <label for="">Quyền riêng tư</label>
                                        <select name="" id="">
                                            <option value="">Riêng tư</option>
                                            <option value="">Không công khai</option>
                                            <option value="">Công khai</option>
                                        </select>
                                    </li>
                                    <li class="save-box-footer-item">
                                        <h4>TẠO</h4>
                                    </li>   
        
                                </ul>
                            </div>
                            <li class="content_info-social-item btn-report">
                                <i class='bx bx-dots-horizontal-rounded'></i> 
                                <div class="box-report">
                                    <ul class="box-report-list">
                                        <li class="box-report-item">
                                            <i class='bx bxs-flag-alt'></i>
                                            <p>Báo cáo vi phạm</p>
                                        </li>
                                        <li class="box-report-item">
                                            <i class='bx bxs-face'></i>
                                            <p>Tư đấm vào mặt</p>
                                        </li>
                                    </ul>
                                </div> 
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-info">
            <ul class="content-info-channel">
                <li class="content-info-channel_list ">
                    <img src="./Image/16_dolc.jpg" alt="" class="content-info-avt">
                </li>
                <li class="content-info-channel_list">
                    <a href="">${videos[index].snippet.channelTitle} <i class='bx bxs-check-circle'></i></a>
                    <p>101 N người đăng kí</p>
                </li>
            </ul>
            <div class="btn-channel-box">
                <button class="btn-channel btn-channel-active">ĐĂNG KÍ</button>
                <div class="icon-bell">
                    <i class='bx bx-bell' ></i>
                </div>
            </div>
            
        </div>
        <div class="content-info2">
            <div class="content-desc">
                <p class="content-desc-text tag_link ">#chill #NhacBuon #NhacCu #Acoustic #Album</p> 
                < class="content-desc-text">Mail: levantu.iuh@gmail.com </p>
                <p class="content-desc-text">${videos[index].snippet.description}</p>
                <br>
                <p class="content-desc-text">--------------------------------------------</p>
                <p class="content-desc-text">Facebook cá nhân: <a href="https://www.facebook.com/Vantusieunhan" class="tag_link">https://www.facebook.com/Vantusieunhan</a></p>
                <p class="content-desc-text">Instagram: <a href="https://www.instagram.com/tu.x923" class="tag_link">https://www.instagram.com/tu.x923/</a></p>
                <p class="content-desc-text">Github: <a  href="https://github.com/tusieunhan"class="tag_link">https://github.com/tusieunhan</a></p>
                <p class="content-desc-text">--------------------------------------------</p>
                <p class="content-desc-text">If you have a copyright issue feel free to message me on twitter and we can get it resolved: levantu.iuh@gmail.com</p>
                <br>
        
                <div class="content-desc-copyright">
                    <p class="content-copyright-title">Nhạc trong video này</p>
                    <p class="content-copyright-title">Tìm hiểu thêm</p>
                    <p class="content-copyright-content">
                        <span>Bài hát</span>
                        <a class="content-copyright-text">Muon roi ma sao con code</a>
                    </a>
                    <p class="content-copyright-content">
                        <span>Coder</span>
                        <a class="content-copyright-text">Tu Sieu Nhan</a>
                    </a>
                    <p class="content-copyright-content">
                        <span>Bên cấp phép cho YouTube</span>
                        <a class="content-copyright-text">Tu và 3 Hiệp hội bảo vệ quyền FronEnd</a>
                    </a>
                </div>
            </div>
            <p class="content-desc-more ">HIỂN THỊ THÊM</p>
        </div>
        <div class="content-comments">
            <div class="comments-header">
                <a class="comments-header_num">291 bình luận</a>
                <span class="comments-header_sort"><i class='bx bx-menu-alt-left'></i>SẮP XẾP THEO </span>
            </div>
            <div class="comments-user">
                <img src="./Image/user.jpg" alt="" class="comments-user-avt">
                <div class="comments-user-input">
                    <input type="text" placeholder="Bình luận công khai...">
                    <div class="comments-user-btn">
                        <button class="comments_btn-cancel color_main">HỦY</button>
                        <button class="comments_btn-cmt">BÌNH LUẬN</button>
                    </div>
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/2.jpg" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">Hạ Mây</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                        2020 tôi mất cậu , cậu hãy nhớ rằng tôi vẫn đợi cậu nhé 😊
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item  ">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >68</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt comments_rep">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="comments_btn_more tag_link"><i class='bx bxs-down-arrow'></i>Xem 3 câu trả lời</a>
                    <div class="comments_box-list">
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/channels4_profile.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">F8 Official</a><span class="comments-time">1 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Yêu đường gì tầm này quay kênh tôi học code đi 
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >34</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number"></p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/channels4_profile2.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Next Sport</a><span class="comments-time">1 tuần trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Đôi khi cô đơn giết anh từng cơn , em hỡi !
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >2</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Tu Sieu Nhan</a><span class="comments-time">4 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Ai vừa nghe vừa đọc bình luận điểm danh ❤️❤️
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >100</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/1.png" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">Nam Huynh</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                        Vào đây không phải là thất tình hay buồn phiền gì hết 
                        Chỉ đơn giản là thấy quá trống vắng và cô đơn
                        Miên man với nhiều suy nghĩ đến cuối cũng chẳng biết đang suy nghĩ gì nữa
                        Tiếp tục nghe nhạc vậy
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >12</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>                                  
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/channels4_profile.jpg" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">F8 Official</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                        Chắc mấy bạn đang cô đơn
                        Đang cảm thấy nhạt nhẻo vs chiếc điện thoại của mình...
                        Đang suy nghĩ về người mình  mình yêu thương.. mà mình không có được☺️
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >122</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt comments_rep">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="comments_btn_more tag_link"><i class='bx bxs-down-arrow'></i>Xem 5 câu trả lời</a>
                    <div class="comments_box-list">
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/channels4_profile.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">F8 Official</a><span class="comments-time">1 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                    "Liệu rằng câu hát em yêu anh, có đến bên anh"...
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >34</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number"></p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/channels4_profile2.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Next Sport</a><span class="comments-time">1 tuần trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Đôi khi cô đơn giết anh từng cơn , em hỡi !
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >2</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Tu Sieu Nhan</a><span class="comments-time">4 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Ai vừa nghe vừa đọc bình luận điểm danh ❤️❤️
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >100</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/16_dolc.jpg" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">Bich Phuong</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                            Thứ 1: thằng con trai có thể ăn mì tôm ở nhà thuê nhưng xe nó đi phải xịn
                            <br>
                            Thứ 2: mấy đứa con gái xinh mà bỏ nhà đi theo trai thì đừng tin con lol nào hết
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >12</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>                                  
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/channels4_profile2.jpg" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">Van Nam</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                            Nghe đi nghe lại vẫn thấy hay . Ai thấy giống cho xin1 like😍 😍 😍
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >12</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt comments_rep">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="comments_btn_more tag_link"><i class='bx bxs-down-arrow'></i>Xem 3 câu trả lời</a>
                    <div class="comments_box-list">
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/thum3.jpg alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">F8 Official</a><span class="comments-time">1 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Yêu đường gì tầm này quay kênh tôi học code đi 
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >34</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number"></p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/channels4_profile2.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Next Sport</a><span class="comments-time">1 tuần trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Đôi khi cô đơn giết anh từng cơn , em hỡi !
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >2</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-user comments-user_rep2">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input">
                                <a href="#" class="comments-name">Tu Sieu Nhan</a><span class="comments-time">4 tháng trước</span>
                                <div class="comments-user_text">
                                    <p class="comments-user_text_text2">
                                        Ai vừa nghe vừa đọc bình luận điểm danh ❤️❤️
                                    </p>
                                    <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                                    <div class="comments-report">
                                        <li>
                                            <i class='bx bxs-flag-alt' ></i>
                                            <p>Báo cáo</p>
                                        </li>
                                    </div>
                                </div>
                                <ul class="comments-action">
                                    <li class="comments-action-item">
                                        <i class='bx bxs-like ' ></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="like_number" >100</p>
                                    </li>
                                    <li class="comments-action-item">
                                        <i class='bx bxs-dislike'></i>
                                    </li>
                                    <li class="comments-action-item">
                                        <p class="dislike_number">1</p>
                                    </li>
                                    <li class="comments-action-item comments-action-item2">
                                        <p class="comments_rep">PHẢN HỒI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="comments-user comments-user_rep">
                <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt2">
                <div class="comments-user-input">
                    <a href="#" class="comments-name">Son Tung Mtp</a><span class="comments-time">1 tháng trước</span>
                    <div class="comments-user_text">
                        <p class="comments-user_text_text2">
                            ❤❤❤❤❤❤❤❤❤❤❤
                        </p>
                        <i class=' comments-user_text_icon  bx bx-dots-vertical-rounded'></i>
                        <div class="comments-report">
                            <li>
                                <i class='bx bxs-flag-alt' ></i>
                                <p>Báo cáo</p>
                            </li>
                        </div>
                    </div>
                    <ul class="comments-action">
                        <li class="comments-action-item">
                            <i class='bx bxs-like ' ></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="like_number" >999</p>
                        </li>
                        <li class="comments-action-item">
                            <i class='bx bxs-dislike'></i>
                        </li>
                        <li class="comments-action-item">
                            <p class="dislike_number">1</p>
                        </li>
                        <li class="comments-action-item comments-action-item2">
                            <p class="comments_rep comments_rep_fix">PHẢN HỒI</p>
                        </li>
                    </ul>
                    <div class="comments_rep_box comments_rep_box-fix">
                        <div class="comments-user comments-user_rep">
                            <img src="./Image/user.jpg" alt="" class="comments-user-avt comments-user-avt3">
                            <div class="comments-user-input comments-user-input2">
                                <input type="text" placeholder="Phản hồi công khai...">
                                <div class="comments-user-btn">
                                    <button class="comments_btn-cancel color_main comments_rep_box_cancel">HỦY</button>
                                    <button class="comments_btn-cmt">PHẢN HỒI</button>
                                </div>
                            </div>
                        </div>
                    </div>                                  
                </div>
            </div>
        
        </div>
            
            `;
            if (index != null){
                app();
            }
            })
            
        });
}

function app(){



    
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
    
    
}
