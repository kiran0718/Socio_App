import "./sidebar.css"
import {RssFeed , Chat , PlayCircle , Group , Bookmark , HelpOutline , Work , Event , School} from '@mui/icons-material'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <Chat className="sidebarIcon"/>
              <span className="sidebarListItemText">Chat </span>
          </li>
          <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon"/>
              <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups </span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks </span>
          </li>
          <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">Questions </span>
          </li>
          <li className="sidebarListItem">
              <Work className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs </span>
          </li>
          <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events </span>
          </li>
          <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className = "sidebarFriendImg" src="./assets/person/1.png" alt="" />
            <span className = "sidebarFriendName">Mrunal Thakur</span>
          </li>
          <li className="sidebarFriend">
            <img className = "sidebarFriendImg" src="./assets/person/2.jpg" alt="" />
            <span className = "sidebarFriendName">Deepika</span>
          </li>
          <li className="sidebarFriend">
            <img className = "sidebarFriendImg" src="./assets/person/3.avif" alt="" />
            <span className = "sidebarFriendName">Ayushi</span>
          </li>
          <li className="sidebarFriend">
            <img className = "sidebarFriendImg" src="./assets/person/4.jpg" alt="" />
            <span className = "sidebarFriendName">Chrisi</span>
          </li>
          <li className="sidebarFriend">
            <img className = "sidebarFriendImg" src="./assets/person/3.avif" alt="" />
            <span className = "sidebarFriendName">Riana</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
