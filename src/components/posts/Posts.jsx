import React, {useState, useEffect} from "react";
import myPosts from "./myPosts";
import PostItem from "./PostItem";
import axios from "axios";


function Posts() {

    const [posts, setPosts] = useState(myPosts);

    useEffect(() => {
        axios.get("http://localhost:9000/someone/posts")
        .then(res => {
            // console.log(res);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const col1List = posts.filter((_, i) => (i % 4 === 0));
    const col2List = posts.filter((_, i) => (i % 4 === 1));
    const col3List = posts.filter((_, i) => (i % 4 === 2));
    const col4List = posts.filter((_, i) => (i % 4 === 3));

    return (
        <div className="posts-base-container">
            <div className="posts-container">
                <div className="posts-title" style={{ textAlign: "center", padding:"2% 0 3% 0" }}>
                    <p>Posts</p>
                </div>

                <div className="posts-grid-container">

                    <div className="row">
                        <div className="column">
                            {col1List.map((value) => (
                                <PostItem
                                    postItem={value}
                                />
                            ))}
                        </div>

                        <div className="column">
                            {col2List.map((value) => (
                                <PostItem
                                    postItem={value}
                                />
                            ))}
                        </div>

                        <div className="column">
                            {col3List.map((value) => (
                                <PostItem
                                    postItem={value}
                                />
                            ))}
                        </div>

                        <div className="column">
                            {col4List.map((value) => (
                                <PostItem
                                    postItem={value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;