import React, { useEffect, useState } from "react";
import Rectangle13 from "../../assets/Rectangle13.png";
import "./Posts.css";
import "../../index.css";
import { client, urlFor } from "../client";

const Posts = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => {
      setpost(data);
    }, []);
  });

  return (
    <section id="posts" className="postPage">
      <div className="wrapper">
        <h1>Latest Posts</h1>
        <div className="postboxflex">
          {post.map((data) => (
            <div className="postbox">
              <button>{data.label}</button>
              <img src={urlFor(data.thumbnail)} alt="img not found" />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
        <button>All Posts</button>
      </div>
    </section>
  );
};

export default Posts;
