import React from "react";
import { useState, useEffect } from "react";
import StyleNav from "../StyleNav";
import OutfitUserInfo from "./OutfitUserInfo";
import OutfitMedia from "./OutfitMedia";
import OutfitPostInteraction from "./OutfitPostInteraction";
import OutfitText from "./OutfitText";

export default function OutfitPost(props) {
  const [imgSrcs, setImgSrcs] = useState([]);

  const details = props.post;
  console.log('details', details);

  function arrayBufferToBase64(buffer) {
    const binary = "";
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

   useEffect(() => {
     const newImgSrcs = details.photos.map((photo) => {
      // console.log('photo', photo)
      return "data:image/jpeg;base64," + photo.data;
    });
    setImgSrcs(newImgSrcs);
   }, []);
  
  // imgSrcs.length > 0 && console.log('imgSrcs', imgSrcs)

  return (
    // full outfit post - 4 children components combined
    <div className="grid grid-row-4 py-2 bg-white rounded-lg shadow-md">
      <OutfitUserInfo
        photo={details.authorPhoto}
        username={details.authorUsername}
        location={details.postLoc}
        postDate={details.date}
      />

      <div className="flex flex-row overflow-x-auto justify-self-center">
        <OutfitMedia
          username={details.authorUsername}
          media={imgSrcs}
        />
      </div>

      <OutfitPostInteraction
        username={details.authorUsername}
        postID={details.postId}
        // likes={details.postLike.length}
        likes={0}
        likeArray={details.postLike}
        comments={details.comments}
      />
      <OutfitText likes={0} text={details.postText} />
    </div>
  );
}
