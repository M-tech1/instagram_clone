import {useState, useEffect} from 'react';
import { collection } from 'firebase/firestore';
import { onSnapshot, orderBy, query } from 'firebase/firestore';
// import Post from './Post';
import { db, storage } from '../../firebase';
import ImageUpload from './ImageUpload';




function Posts(user) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
   onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(snapshot.docs);
    })
   
  }, [db]);
  return (
        <div>
           {posts.map((post) => (
            <ImageUpload key={post.id}
            id={post.id}
            uid={post.data().uid}
            img={post.data().image}
            caption={post.data().captionRef}
         
            />
           ))}
        </div>
 
    
  )
}

export default Posts
