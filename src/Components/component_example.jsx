import { sortData } from "../Services/service_example";
import { useState, useEffect } from "react";

export default function Component_Example()
{

    const [posts, setPosts] = useState([]);

  useEffect(() => {
   setPosts( sortData());

  }, []);
    return( 
    <>

<p>hi</p>
<ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
    )
       
    



}

