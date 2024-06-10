import React, {useState} from 'react';
import axios from 'axios';

const ProductPage = () => {
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
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid black',
        },
        mainLogo: {
            paddingLeft: '20px',
            fontSize: '40px',
            color: '#7C6E14',
            fontFamily: "'NanumDaHaengCe', sans-serif",
            cursor: 'pointer',
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
            fontFamily: "'Ownglyph_ryuttung-Rg', sans-serif",
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
            borderRadius: '50%',
        },
        profileP: {
            marginLeft: '15px',
            width: '112px',
        },
        product: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        productTop: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0 auto',
            padding: '20px',
            boxSizing: 'border-box',
        },
        productImage: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
        },
        productImageImg: {
            maxWidth: '100%',
            height: 'auto',
        },
        productInfo: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #ddd',
            padding: '20px',
            boxSizing: 'border-box',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
        },
        productInfoP: {
            textAlign: 'center',
            fontSize: '18px',
        },
        productButton: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            boxSizing: 'border-box',
            backgroundColor: '#f0f0f0',
        },
        productButtonButton: {
            flex: 1,
            padding: '10px 0',
            margin: '0 5px',
            fontSize: '18px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #CCCCCC',
            cursor: 'pointer',
        },
        productTab: {
            width: '100%',
            borderBottom: '1px solid #ccc',
            fontSize: '16px',
            display: 'flex',
        },
        tab: {
            flex: 1,
            textAlign: 'center',
            padding: '15px 0',
            cursor: 'pointer',
        },
        tabNotLastChild: {
            borderRight: '1px solid #ccc',
        },
        tabSelect: {
            fontWeight: 'bold',
        },
        productExplanation: {
            width: '70%',
            height: '70%',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ddd',
        },
        imageEx: {
            padding: '20px',
        },

    };


    return (
        <>
            <div>
                <div style={styles.header} className="header">
                    <p style={styles.mainLogo}
                        className="main-logo"
                        onClick="location.href='Main.html'"
                    >
                        공방친구
                    </p>
                    <div style={styles.searchBox} className="search-box">
                        <label>
                            <input style={styles.searchBoxInput}
                                placeholder="찾고 싶은 상품을 검색하세요"
                                type="text"
                            />
                        </label>
                        <img style={styles.searchBoxImg}
                            alt="검색 아이콘"
                            src="/image/search.png"
                        />
                    </div>
                    <div style={styles.profile}
                        className="profile"
                        onClick="location.href='MyProfile.html'"
                    >
                        <img style={styles.profileImg}
                            alt="프로필 아이콘"
                            src="/image/profile.jpg"
                        />
                        <p style={styles.profileP}>
                            권순광
                        </p>
                    </div>
                </div>
                <div style={styles.product} className="product">
                    <div style={styles.productTop} className="product-top">
                        <div style={styles.productImage} className="product-image">
                            <img style={styles.productImageImg}
                                alt="상품 이미지"
                                src="/image/product-soap.png"
                            />
                        </div>
                        <div style={styles.productInfo} className="product-info">
                            <p style={styles.productInfoP}>
                                상품 가격 및 배송 정보
                            </p>
                            <div style={styles.productButton} className="product-button">
                                <button style={styles.productButtonButton}>
                                    장바구니
                                </button>
                                <button style={styles.productButtonButton}>
                                    구매하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.productExplanation} className="product-explanation">
                        <div style={styles.productTab} className="product-tab">
                            <div style={styles.tabSelect} className="tab select">
                                상품상세
                            </div>
                            <div style={styles.tab} className="tab">
                                상품후기 (0)
                            </div>
                            <div style={styles.tab} className="tab">
                                상품문의
                            </div>
                            <div style={styles.tab} className="tab">
                                배송/교환/반품 안내
                            </div>
                        </div>
                        <p/>
                        <p>
                            피부에 민감한 사람들을 위해 준비했습니다
                        </p>
                        <img style={styles.imageEx}
                            alt="상품 설명"
                            className="image-ex"
                            src="/image/product-soap.png"
                        />
                        <img style={styles.imageEx}
                            alt="상품 설명2"
                            className="image-ex"
                            src="/image/soap-explanation.png"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductPage;