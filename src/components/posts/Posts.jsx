import React from "react";
import myPosts from "./myPosts";
import PostItem from "./PostItem";

function Posts() {

    const col1List = myPosts.filter((_, i) => (i % 4 === 0));
    const col2List = myPosts.filter((_, i) => (i % 4 === 1));
    const col3List = myPosts.filter((_, i) => (i % 4 === 2));
    const col4List = myPosts.filter((_, i) => (i % 4 === 3));

    return (
        <div className="posts-base-container">
            <div className="posts-container">
                <div className="posts-title" style={{ textAlign: "center" }}>
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