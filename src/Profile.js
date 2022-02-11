import React, { useEffect } from 'react'
import './Profile.css';
import Post from './Post';
import { db } from './firebase';

function Profile({profileName, profilePic}) {
  const [posts, setPosts] = React.useState([]);

  //useEffect Runs a piece of code based on a specific code.
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a change is made this code runs
      setPosts(snapshot.docs.map( doc => doc.data()));
    })
  }, []);


  return (
    <div className="profile">

      {/*centered profile pic*/}
      <div className="profile__image">
        <img src={profilePic} alt="profile-pic"/>
      </div>

      {/*centered username*/}
      <h4 className="profile__name">{profileName}</h4>

      {/*grid posts*/}

      {
        posts.map(post => (
          <Post postImage={post.postImage} postDescription={post.postDescription} />
        ))
      }

    </div>
  )
}

export default Profile