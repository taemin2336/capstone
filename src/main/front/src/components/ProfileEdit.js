import React, { useState } from 'react';

const styles = {
    container: {
        width: '50%',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxSizing: 'border-box',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    profileImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
    },
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
};

const ProfileEdit = () => {
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [bio, setBio] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 폼 제출 로직을 추가하세요
        console.log({ nickname, bio });
        alert('프로필이 업데이트되었습니다!');
        window.location.href = "/MyProfile";
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

            </div>
            <div style={styles.container}>
                <h2>프로필 수정</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>프로필 사진</label>
                        {profileImage && <img src={profileImage} alt="프로필 이미지" style={styles.profileImage}/>}
                        <input type="file" accept="image/*" onChange={handleImageChange}/>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>활동 닉네임</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>소개글</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            style={styles.textarea}
                        />
                    </div>
                    <button type="submit" style={styles.button}>저장하기</button>
                </form>
            </div>
        </>
    );
};

export default ProfileEdit;
