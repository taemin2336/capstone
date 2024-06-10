import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MyProfile = () => {
    const selectAll=async()=>{
        alert("selectAll!")
        const result=await axios.get('/image')
        console.log(result)
    }

    const [profileData, setProfileData] = useState({
        nickname: '',
        bio: '',
        profile_image: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 로컬 스토리지에서 이메일 정보 가져오기
                const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
                console.log('loggedInUser:', loggedInUser);
                if (!loggedInUser || !loggedInUser.email) {
                    // 로그인되어 있지 않으면 로그인 페이지로 이동
                    window.location.href = "/LoginPage"; // 로그인 페이지 경로에 따라 수정
                    return;
                }

                // 로그인한 이메일을 사용하여 프로필 정보 가져오기
                const response = await axios.post('/getProfile', { email: loggedInUser.email });
                console.log('Profile Data Response:', response.data);
                setProfileData(response.data); // 프로필 데이터 설정
            } catch (error) {
                console.error('프로필 정보를 가져오는 데 실패했습니다:', error);
            }
        };

        fetchData();
    }, []);

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
            borderRadius: '35px',
        },
        profileP: {
            marginLeft: '15px',
            width: '112px',
        },
        profileSection: {
            width: '762px',
            margin: '0 auto',
            border: '1px solid #cccccc',
            boxSizing: 'border-box',
            backgroundColor: '#f9f9f9',
        },
        profileHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0',
        },
        profileInfo: {
            display: 'flex',
            alignItems: 'center',
        },
        profileInfoImg: {
            padding: '20px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginRight: '20px',
        },
        profileInfoDiv: {
            display: 'flex',
            flexDirection: 'column',
        },
        username: {
            fontWeight: 'bold',
            fontSize: '24px',
        },
        bio: {
            color: 'gray',
            marginTop: '5px',
        },
        profileStats: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        profileStatsDiv: {
            marginRight: '20px',
            textAlign: 'center',
        },
        label: {
            fontWeight: 'bold',
        },
        profileFollow: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
        },
        profileEdit: {
            padding: '5px 10px',
            border: '1px solid #cccccc',
            borderRadius: '5px',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
        },
        tabs: {
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid #cccccc',
            borderBottom: '1px solid #cccccc',
        },
        tab: {
            flex: 1,
            textAlign: 'center',
            padding: '10px 0',
            cursor: 'pointer',
        },
        tabNotLastChild: {
            borderRight: '1px solid #cccccc',
        },
        tabSelected: {
            fontWeight: 'bold',
        },
        post: {
            width: '200px',
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #cccccc',
            margin: '20px',
            cursor: 'pointer',
        },
        postMain: {
            width: '100%',
            height: '200px',
            marginBottom: '5px',
            border: '1px solid #cccccc',
        },
        postP: {
            margin: 0,
            textAlign: 'center',
        },
        postActions: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '10px',
        },
        postActionsImg: {
            width: '18px',
            height: '18px',
            marginRight: '5px',
            cursor: 'pointer',
        },

    };


    return (
        <>
            <div>
                <div style={styles.header} className="header">
                    <p style={styles.mainLogo}
                       className="main-logo"
                       onClick={() => window.location.href = 'Main'}
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
                <div style={styles.profileSection} className="profile-section">
                    <div style={styles.profileHeader} className="profile-header">
                        <div style={styles.profileInfo} className="profile-info">
                            <img style={styles.profileImg}
                                 alt="프로필 이미지"
                                 src={profileData.profileImage}
                            />
                            <div style={styles.profileInfoDiv}>
                                <p style={styles.username} className="username">
                                    {profileData.nickname}
                                </p>
                                <p style={styles.bio} className="bio">
                                    {profileData.bio}
                                </p>
                            </div>
                        </div>
                        <div style={styles.profileStats} className="profile-stats">
                            <div style={styles.profileEdit} className="profile-edit"
                                 onClick={() => window.location.href = 'ProfileEdit'}
                            >
                                프로필 수정
                            </div>
                            <div style={styles.profileFollow} className="profile-follow">
                                <div>
                                    <p style={styles.label} className="label">
                                        내 팔로워
                                    </p>
                                    <p style={styles.profileP}>
                                        150
                                    </p>
                                </div>
                                <div>
                                    <p style={styles.label} className="label">
                                        내 팔로우
                                    </p>
                                    <p style={styles.profileP}>
                                        20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.tabs} className="tabs">
                        <div style={styles.tabSelected} className="tab selected">
                            게시물
                        </div>
                        <div style={styles.tab} className="tab">
                            쇼트비디오
                        </div>
                    </div>
                    <div className="posts">
                        <div style={styles.post}
                             className="post"
                             onClick="location.href='ProductPage.html'"
                        >
                            <img
                                alt="게시글 이미지"
                                className="postMain"
                                src="image/product-soap.png"
                            />
                            <div style={styles.postActions} className="post-actions">
                                <img style={styles.postActionsImg}
                                     alt="좋아요 아이콘"
                                     src="image/like.png"
                                />
                                <img style={styles.postActionsImg}
                                     alt="북마크 아이콘"
                                     src="image/dibs.png"
                                />
                                <img style={styles.postActionsImg}
                                     alt="공유 아이콘"
                                     src="image/share.png"
                                />
                            </div>
                            <p>
                                친환경적이어서 피부에 안전한 비누
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;