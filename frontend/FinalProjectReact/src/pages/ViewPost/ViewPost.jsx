import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import CustomizedRating from "../../componentes/HeartsRating/HeartsRating";
import { getOnePost } from "../../services/postService";
import { useParams } from "react-router-dom";

function ViewPost() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const { result } = await getOnePost(postId);
      setPost(result);
    };
    getPost();
  }, [postId]);

  if (!post) return null;

  return (
    <div id="detailed-post-container">
      <div id="detailed-post-card">
        <div id="dpo-left">
          <div id="detailed-post-picture">
            <img src={post.media} alt="Picture" />
          </div>

          <div id="detailed-post-hearts">
            <CustomizedRating />
          </div>
        </div>

        <div id="dpo-right">
          <div id="dpo-header">
            <div id="detailed-post-avatar">
              <img src={post.user?.avatar} alt="Avatar" />
            </div>

            <div id="detailed-post-title">
              <h1>{post.title}</h1>
            </div>
          </div>

          <div id="detailed-post-description">{post.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
