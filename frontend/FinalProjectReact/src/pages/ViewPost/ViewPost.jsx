import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import CustomizedRating from "../../componentes/HeartsRating/HeartsRating";
import { getOnePost, updatePost, deleteOnePost } from "../../services/postService";
import { useParams, useNavigate } from "react-router-dom";

function ViewPost() {
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
    title: "",
    description: "",
    media: "",
  });

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const { result } = await getOnePost(postId);
      setPost(result);
      setEditData({
        title: result?.title || "",
        description: result?.description || "",
        media: result?.media || "",
      });
    };
    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    await updatePost(postId, editData);

    setPost((prev) => ({
      ...prev,
      ...editData,
    }));

    setIsEditing(false);
  };

  const handleDelete = async () => {
    const ok = window.confirm("¿Seguro que quieres borrar este post?");
    if (!ok) return;

    await deleteOnePost(postId);

    // 👇 ruta correcta según tu router
    navigate("/app/ownprofile");
  };

  if (!post) return null;

  return (
    <div id="detailed-post-container">
      <div id="detailed-post-card">
        <div id="dpo-left">
          <div id="detailed-post-picture">
            <img src={isEditing ? editData.media : post.media} alt="Post" />
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

            {!isEditing ? (
              <div id="detailed-post-title">
                <h1>{post.title}</h1>
              </div>
            ) : (
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
              />
            )}
          </div>

          {!isEditing ? (
            <div id="detailed-post-description">{post.description}</div>
          ) : (
            <>
              <textarea
                name="description"
                value={editData.description}
                onChange={handleChange}
              />
              <input
                type="text"
                name="media"
                placeholder="URL de la imagen del post"
                value={editData.media}
                onChange={handleChange}
              />
            </>
          )}

          <div className="edit-buttons">
            {!isEditing ? (
              <>
                <button onClick={() => setIsEditing(true)}>Editar</button>
                <button className="danger" onClick={handleDelete}>
                  Borrar
                </button>
              </>
            ) : (
              <>
                <button onClick={handleSave}>Guardar</button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditData({
                      title: post.title || "",
                      description: post.description || "",
                      media: post.media || "",
                    });
                  }}
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
