import React from "react";
import { useState } from "react";
import { dummyUsers } from "../../dummy/users";
import OutfitUserInfo from "./OutfitUserInfo";
import OutfitMedia from "./OutfitMedia";
import OutfitPostInteraction from "./OutfitPostInteraction";
import OutfitText from "./OutfitText";

export default function OutfitPost() {
  const [users, setUsers] = useState(dummyUsers);

  return (
    // full outfit post - 4 children components combined
    <div className="grid grid-row-4 py-2 bg-white rounded-lg shadow-md">
      <OutfitUserInfo
        photo={users[0].photo}
        username={users[0].username}
        location={users[0].posts[0].postLoc}
        postDate={users[0].posts[0].postDate}
      />

      <div className="flex flex-row overflow-x-auto justify-self-center">
        <OutfitMedia media={users[0].posts[0].postMedia} />
      </div>

      <OutfitPostInteraction postID={users[0].posts[0].postId} />
      <OutfitText text={users[0].posts[0].postText} />
    </div>
  );
}
