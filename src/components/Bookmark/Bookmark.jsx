import { useState } from "react";
import { BsBookmarksFill } from "react-icons/bs";
import Collapse from "./Collapse/Collapse";
import "./Bookmark.css";
import { useAppContext } from "../../contextAPI";
function Bookmark({ movies }) {
  const { bookmark, clearBookmark } = useAppContext();
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="bookmark-container">
      <div className="bookmark">
        <BsBookmarksFill onClick={() => setCollapse(!collapse)} />
        <span>{bookmark.length}</span>
      </div>
      <div className={`bookmark-collapse${collapse ? " show" : ""}`}>
        <ul>
          {bookmark.length > 0 ? (
            <>
              <Collapse onRequestCollapseClose={setCollapse} />
            </>
          ) : (
            <li className="no-bookmark">No bookmark!</li>
          )}
        </ul>
        {bookmark.length > 0 && (
          <button className="bookmark-btn-clear" onClick={clearBookmark}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default Bookmark;
