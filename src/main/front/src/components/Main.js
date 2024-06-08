import React, {useState} from 'react';
import axios from 'axios';
import LoginPage from "./LoginPage";

const Main = () => {
    const selectAll=async()=>{
        alert("selectAll!")
        const result=await axios.get('/image')
        console.log(result)
    }


    const styles = {
        header: {
            width: '100%',
            height: '90px',
            display: 'flex',
            justifyContent: 'space-between', // 양쪽으로 우선 정렬
            alignItems: 'center',
            borderBottom: '1px solid black'
        },
        mainlogo: {
            paddingLeft: '20px',
            fontSize: '40px',
            color: '#7C6E14',
            cursor: 'pointer'
    },
        searchBox: {
            width: '500px',
            height: '45px',
            position: 'relative',
            border: '2px solid black',
            borderRadius: '3px',
        },
        searchBoxInput: {
            width: '100%',
            height: '100%',
            border: 'none',
            fontSize: '18px',
            paddingLeft: '10px',
            paddingRight: '40px',
            boxSizing: 'border-box',
            color: '#4e4e4e',
        },
        searchBoxImg: {
            position: 'absolute',
            width: '30px',
            height: '30px',
            right: '10px',
            top: '8px',
            cursor: 'pointer',
        },
        profile: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '28px',
            cursor: 'pointer',
        },
        profileImg: {
            width: '50px',
            height: '50px',
            borderRadius: '35px',
        },
        profileP: {
            marginLeft: '15px',
            width: '112px',
        },
        center: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
        },
        leftSidebar: {
            width: '250px',
            height: '700px',
            backgroundColor: '#f5f5dc',
            fontSize: '14px',
            border: '1px solid #DDDDDD',
            position: 'relative',
        },
        leftSidebarH2: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        leftSidebarH2Img: {
            width: '20px',
            height: '20px',
        },
        category: {
            margin: '0',
            padding: '10px',
            borderBottom: '1px solid black',
        },
        footer: {
            width: '100%',
            fontSize: '18px',
            position: 'absolute',
            bottom: '5px',
        },
        footerUl: {
            listStyleType: 'none',
            padding: '10px',
            margin: '0',
        },
        footerUlLi: {
            padding: '5px 0',
            display: 'flex',
            alignItems: 'center',
        },
        footerUlLiImg: {
            width: '24px',
            height: '24px',
            marginRight: '20px',
        },
        rightSidebar: {
            width: '250px',
            height: '700px',
            fontSize: '14px',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
        },
        section: {
            borderBottom: '1px solid #ddd',
        },
        sectionH3: {
            margin: '0 0 10px',
            fontSize: '16px',
            padding: '10px 10px 0 10px',
        },
        sectionUl: {
            listStyleType: 'none',
            paddingLeft: '10px',
        },
        sectionUlLi: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        },
        sectionUlLiImg: {
            width: '24px',
            height: '24px',
            marginRight: '10px',
            backgroundColor: '#ccc',
            borderRadius: '15px',
        },
        middle: {
            width: '762px',
        },
        tabMenu: {
            width: '500px',
            fontSize: '14px',
            display: 'flex',
            borderBottom: '1px solid #ccc',
            padding: '5px 0',
            margin: '0 auto',
        },
        tabMenuDiv: {
            textAlign: 'center',
            flex: '1',
        },
        tabMenuDivSelect: {
            fontWeight: 'bold',
        },
        cursorOn: {
            cursor: 'pointer',
        },
        banner: {
            height: '200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            borderBottom: '1px solid #CCCCCC',
        },
        arrow: {
            fontSize: '24px',
            color: '#CCCCCC',
            padding: '10px',
        },
        bannerImage: {
            fontSize: '24px',
            textAlign: 'center',
        },
        product: {
            width: '762px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            margin: '0 auto',
        },
        productItem: {
            width: '200px',
            marginBottom: '10px',
            padding: '20px',
        },
        productItemImg: {
            width: '200px',
            height: '200px',
        },
        productItemP: {
            margin: '5px 0',
        },
        productItemRating: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
        },
        productItemRatingImg: {
            width: '14px',
            height: '14px',
        },
        productItemRatingSpan: {
            marginLeft: '5px',
        },
    };


    return (
        <>

            <div style={styles.header} className="header">
                <p style={styles.mainlogo} className="main-logo" onClick="location.href='Main.html'">
                    공방친구
                </p>
                <div style={styles.searchBox} className="search-box">
                    <label>
                        <input style={styles.searchBoxInput} type="text" placeholder="찾고 싶은 상품을 검색하세요"/>
                    </label>
                    <img style={styles.searchBoxImg} src="../image/search.png" alt="검색 아이콘"/>
                </div>
                <div style={styles.profile} className="profile" onClick="location.href='MyProfile.html'">
                    <img style={styles.profileImg} src="../image/profile.jpg" alt="프로필 아이콘"/>
                    <p style={styles.profileP}>권순광</p>
                </div>
            </div>
            <div style={styles.center} className="center">
                <div style={styles.leftSidebar} className="left-sidebar">
                    <h2 style={styles.leftSidebarH2} className="category">
                        식품
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        패션
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        뷰티
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        스포츠
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        가구/인테리어
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        생활
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        건강
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <h2 style={styles.leftSidebarH2} className="category">
                        도서
                        <img style={styles.leftSidebarH2Img} src="../image/plus.png" alt="플러스 아이콘"/>
                    </h2>
                    <div style={styles.footer} className="footer">
                        <ul style={styles.footerUl}>
                            <li style={styles.footerUlLi}>
                                <img style={styles.footerUlLiImg} src="../image/setting.png" alt="쇼츠 아이콘"/> 쇼츠
                            </li>
                            <li style={styles.footerUlLi}>
                                <img style={styles.footerUlLiImg} src="../image/setting.png" alt="북마크 아이콘"/> 북마크
                            </li>
                            <li style={styles.footerUlLi}>
                                <img style={styles.footerUlLiImg} src="../image/setting.png" alt="프로필 수정 아이콘"/> 프로필 수정
                            </li>
                            <li style={styles.footerUlLi}>
                                <img style={styles.footerUlLiImg} src="../image/setting.png" alt="기념일 수정 아이콘"/> 기념일 수정
                            </li>
                            <li style={styles.footerUlLi}>
                                <img style={styles.footerUlLiImg} src="../image/setting.png" alt="설정 아이콘"/> 설정
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={styles.middle} className="middle">
                    <div style={styles.tabMenu} className="tab-menu">
                        <div style={styles.tabMenuDivSelect} className="select">상품</div>
                        <div style={styles.cursorOn} className="cursorOn" onClick="location.href='Main_Post.js'">
                            게시글
                        </div>
                        <div style={styles.cursorOn} className="cursorOn" onClick={LoginPage}>
                            쇼트비디오
                        </div>
                    </div>
                    <div style={styles.banner} className="banner">
                        <div style={styles.arrow} className="arrow">&lt;</div>
                        <div style={styles.bannerImage} className="banner-image">배너</div>
                        <div style={styles.arrow} className="arrow">&gt;</div>
                    </div>
                    <div style={styles.product} className="product">
                        <div style={styles.productItem}
                            className="product-item  cursorOn"
                            onClick="location.href='ProductPage.html'"
                        >
                            <img style={styles.productItemImg} src="../image/product-soap.png" alt="상품 이미지"/>
                            <p style={styles.productItemP}>상품이름</p>
                            <p className="price">10,000원</p>
                            <div style={styles.productItemRating} className="rating">
                                <img style={styles.productItemRatingImg} src="../image/star.png" alt="별점 아이콘"/>
                                <img style={styles.productItemRatingImg} src="../image/star.png" alt="별점 아이콘"/>
                                <img style={styles.productItemRatingImg} src="../image/star.png" alt="별점 아이콘"/>
                                <img style={styles.productItemRatingImg} src="../image/star.png" alt="별점 아이콘"/>
                                <img style={styles.productItemRatingImg} src="../image/star.png" alt="별점 아이콘"/>
                                <span style={styles.productItemRatingSpan}>(99)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.rightSidebar} className="right-sidebar">
                    <div style={styles.section} className="section">
                        <h3 style={styles.sectionH3}>추천 카테고리</h3>
                        <ul style={styles.sectionUl}>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리1
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리2
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리3
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리4
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리5
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리6
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리7
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="카테고리 아이콘"/>
                                카테고리8
                            </li>
                        </ul>
                    </div>
                    <div style={styles.section} className="section">
                        <h3 style={styles.sectionH3}>추천 작가</h3>
                        <ul style={styles.sectionUl}>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가1
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가2
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가3
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가4
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가5
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가6
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가7
                            </li>
                            <li style={styles.sectionUlLi}>
                                <img style={styles.sectionUlLiImg} src="../image/setting.png" alt="작가 아이콘"/>
                                작가8
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;