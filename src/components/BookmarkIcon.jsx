import React from "react";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
function BookmarkIcon({ clickHandle, fill }) {
  if (fill) {
    return <BsBookmarkCheckFill onClick={clickHandle} />;
  } else {
    return <BsBookmarkCheck onClick={clickHandle} />;
  }
}

export default BookmarkIcon;
