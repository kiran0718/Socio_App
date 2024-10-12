import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className = "birthdayImg" src="./assets/person/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 Other friends</b> have birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="./assets/person/adds.jpg" alt="" />
        <h4 className="rightbarFriends">Online Friends</h4>
        <ul className="rightbarFriendsList">
          <l1 className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img className='rightbarProfileImg' src="./assets/person/4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">May Bell</span>
          </l1>
          <l1 className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img className='rightbarProfileImg' src="./assets/person/2.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Jae</span>
          </l1>
          <l1 className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img className='rightbarProfileImg' src="./assets/person/1.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Kiara</span>
          </l1>
          <l1 className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img className='rightbarProfileImg' src="./assets/person/3.avif" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Riana</span>
          </l1>
        </ul>
      </div>
    </div>
  )
}
