// src/Main_Post.js
import React from 'react';
import axios from 'axios';

const Main_Post = () => {
    const selectAll = async () => {
        try {
            alert("selectAll!");
            const result = await axios.get('/image');
            console.log(result);
        } catch (error) {
            if (error.response) {
                // 서버가 2xx 외의 상태 코드를 반환한 경우
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // 요청이 만들어졌으나 응답을 받지 못한 경우
                console.error('Error request:', error.request);
            } else {
                // 요청을 설정하는 중에 오류가 발생한 경우
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div>
            <div className="header">
                <p className="main-logo" onClick="location.href='Main.html'">공방친구</p>
                <div className="search-box">
                    <label>
                        <input type="text" placeholder="찾고 싶은 상품을 검색하세요"/>
                    </label>
                    <img src="../image/search.png" alt="검색 아이콘"/>
                </div>
                <div className="profile" onClick="location.href='MyProfile.html'">
                    <img src="../image/profile.jpg" alt="프로필 아이콘"/>
                        <p>권순광</p>
                </div>
            </div>
            <div className="center">
                <div className="left-sidebar">
                    <h2 className="category">식품<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">패션<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">뷰티<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">스포츠<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">가구/인테리어<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">생활<img src="//image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">건강<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <h2 className="category">도서<img src="../image/plus.png" alt="플러스 아이콘"/></h2>
                    <div className="footer">
                        <ul>
                            <li><img src="../image/setting.png" alt="쇼츠 아이콘"/> 쇼츠</li>
                            <li><img src="../image/setting.png" alt="북마크 아이콘"/> 북마크</li>
                            <li><img src="../image/setting.png" alt="프로필 수정 아이콘"/> 프로필 수정</li>
                            <li><img src="../image/setting.png" alt="기념일 수정 아이콘"/> 기념일 수정</li>
                            <li><img src="../image/setting.png" alt="설정 아이콘"/> 설정</li>
                        </ul>
                    </div>
                </div>

                <div className="middle">
                    <div className="tab-menu">
                        <div className="cursorOn" onClick="location.href='Main.html'">상품</div>
                        <div className="select">게시글</div>
                        <div className="cursorOn" onClick="location.href='Main_Video.html'">쇼트비디오</div>
                    </div>

                    <div className="post-section">
                        <div className="post-header">
                            <div className="user-info">
                                <img src="../image/profile.jpg" alt="프로필 이미지"/>
                                    <div>
                                        <p className="username">권순광</p>
                                        <p className="view">조회수 123K</p>
                                    </div>
                            </div>
                            <div className="follow-btn">팔로우</div>
                        </div>
                        <img className="post-image" src="../image/product-soap.png" alt="게시글 이미지"/>
                            <div className="post-actions">
                                <img src="../image/like.png" alt="좋아요 아이콘"/>
                                    <img src="../image/dibs.png" alt="북마크 아이콘"/>
                                        <img src="../image/share.png" alt="공유 아이콘"/>
                            </div>
                            <div className="post-content">
                                친환경적이어서 피부에 안전한 비누 많이들 구매하세요~~~<br>
                                2개 구매시 할인 이벤트 중입니다!!</br>
                            </div>
                            <div className="comment-section">
                                <div className="comment">
                                    <img src="../image/soap-explanation.png" alt="댓글 작성자 이미지"/>
                                        <p><strong>김채영:</strong> 3번째 재구매 중입니다! 너무 좋아요~!</p>
                                </div>
                            </div>
                    </div>

                </div>

                <div className="right-sidebar">
                    <div className="section">
                        <h3>추천 카테고리</h3>
                        <ul>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리1</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리2</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리3</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리4</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리5</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리6</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리7</li>
                            <li><img src="../image/setting.png" alt="카테고리 아이콘"/>카테고리8</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>추천 작가</h3>
                        <ul>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가1</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가2</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가3</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가4</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가5</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가6</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가7</li>
                            <li><img src="../image/setting.png" alt="작가 아이콘"/>작가8</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main_Post;
