import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenericHeader from "../components/GenericHeader";
import { dummyComments } from "../dummy/comments";
import Comment from "../components/Comments/Comment";
import AddComment from "../components/Comments/AddComment";
import axios from "axios";
import { requestURL } from "../requestURL";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [userPhoto, setUserPhoto] = useState("");
  const [userName, setUserName] = useState("");

  const params = useParams();

  console.log(comments);

  useEffect(() => {
    async function fetchComments(query) {
      const response = await axios.get(requestURL + "comments/view/" + query);
      setComments(response.data.comments);
      setUserPhoto(response.data.userPhoto);
      setUserName(response.data.username);
    }

    fetchComments(params.postID);

    return () => {};
  }, []);

  const commentComponents = comments.map((comment) => (
    <Comment
      username={comment.user}
      body={comment.body}
      photo={comment.photo}
      id={comment.id}
    />
  ));
  return (
    <>
      <GenericHeader pageName="Comments" />

      <section className="mt-16 w-10/12 mr-auto ml-auto">
        {comments.length > 0 ? (
          commentComponents
        ) : (
          <p className="text-center mt-24">
            {" "}
            No comments on this post. Be the first to comment!
          </p>
        )}
      </section>

      <AddComment photo={userPhoto} username={userName} />
    </>
  );
}
