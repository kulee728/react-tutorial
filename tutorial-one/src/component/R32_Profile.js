import React,{useState} from "react";
import './Profile.css'

const Profile =()=>{
    const [selectedImage,setSelectedImage] = useState(null);


    const changeProfileImage = (e) =>{
       const files = e.target.files[0];

        if(files){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setSelectedImage(reader.result);// reader.result >> 이미지의 주소값으로 변경
            };
            reader.readAsDataURL(files); // 데이터 URL 읽기 시작. 주소는 String 문자열로 포현.
            
        }

    }

    return(
        <div className="profile-container">
            <h1>프로필 사진 변경</h1>
            <label htmlFor="profileImageInput"> 사진 선택하기</label>
            <input type="file" accept="image/*" onChange={changeProfileImage} id="profileImageInput" style={{display:'none'}}/>
            {selectedImage && (
                <div>
                    <h2> 선택한 이미지 미리보기</h2>
                    <img src={selectedImage}/>
                </div>
            )}
        </div>
    )
}
export default Profile;