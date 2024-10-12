import './post.css'
import { MoreVert, FavoriteBorder , Comment , Send} from '@mui/icons-material';
import {Users} from "../../dummyData";
export default function Post({post}) {
    console.log(post);
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorder />
                        <span className="num1">100k</span>
                        <Comment/>
                        <span className="num2">50k</span>
                        <Send/>
                        <span className="num3">10k</span>
                    </div>
                    
                </div>
                {/* <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={post.photo} alt="" />
                        <span className="postUsername">Mrunal </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <img className="postImg" src= {post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorder />
                        <span className="num1">100k</span>
                        <Comment/>
                        <span className="num2">50k</span>
                        <Send/>
                        <span className="num3">10k</span>
                    </div>
                    
                </div> */}
            </div>
        </div>
    )
}
