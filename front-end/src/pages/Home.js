import React from "react";
import { useState, useEffect } from "react";
import GenericHeader from "../components/GenericHeader";
import MainNav from "../components/MainNav";
import OutfitPost from "../components/OutfitPost/OutfitPost";
import axios from "axios";
import { requestURL } from "../requestURL";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const [viewable, setViewable] = useState([]);
  const [me, setMe] = useState("");

  useEffect(() => {
    async function fetchFeed() {
      const response = await axios.get(requestURL + "posts/feed");
      const results = response.data.feed.map((post) => {
        // each element is a post by a followed user!
        return <OutfitPost key={post._id} post={post} />;
      });

      console.log(response.data.feed);

      setViewable(results);
    }

    fetchFeed();

    return () => {};
  }, []);

  return (
    <div>
      <GenericHeader pageName="HighVintage"></GenericHeader>
      <div className="mt-14 flex flex-col justify-center items-center space-y-4"></div>
      {viewable.length > 0 ? (
        viewable
      ) : (
        <div className="flex flex-col items-center justify-center h-40">
          <p className="text-gray-500 text-sm text-center mb-2">
            You aren't following anyone yet!
          </p>
          <p className="text-gray-500 text-sm text-center">
            Try following other users to view your home feed and discover new
            content that you'll love.
          </p>
        </div>
      )}
      <div className="mt-14">
        <MainNav linkToMe={me} />
      </div>
    </div>
  );
}
