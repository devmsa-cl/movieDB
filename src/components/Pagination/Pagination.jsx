import React, { useRef } from "react";
import "./Pagination.css";
import HtmlToReactParser from "html-to-react";
const Parser = HtmlToReactParser.Parser;
const htmlParser = new Parser();
/**
 *
 * @param {*} param0
 * @returns
 */
let display = 3;
function Pagination({ current, total, setPage }) {
  const setPageNumber = (e) => {
    setPage(+e.target.textContent);
  };
  const ulRef = useRef();

  const items = [];
  for (let i = current; i > Math.abs(current - display); i--) {
    items.unshift(
      i - 1 !== 0 && (
        <li
          className={"pagination__button"}
          key={i}
          onClick={() => {
            setPage(i - 1);
          }}
        >
          {i - 1}
        </li>
      )
    );
  }

  const middle = [];

  for (let i = current; i < current + 5; i++) {
    middle.push(
      i <= total && (
        <li
          className={
            i === current ? "pagination__button active" : "pagination__button"
          }
          key={i}
          onClick={setPageNumber}
        >
          {i}
        </li>
      )
    );
  }

  return (
    <ul className="pagination" ref={ulRef}>
      {items}
      {middle}
    </ul>
  );
}

export default Pagination;

// 3
//
//
//  1 ...
