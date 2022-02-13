import React, { useEffect } from 'react'
import './Profile.css';
import Post from './Post';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from './firebase';

function Profile({profileName, profilePic}) {
  const [posts, setPosts] = React.useState([]);

  //useEffect Runs a piece of code based on a specific code.
  useEffect(
    () => 
      onSnapshot(collection(db, "posts"), (snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({ post: doc.data(), id: doc.id})))
      ),
      []
  );


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
        posts.map(({id, post}) => (
          <Post key={id} postImage={post.postImage} postDescription={post.postDescription} />
        ))
      }

    </div>
  )
}

export default Profile