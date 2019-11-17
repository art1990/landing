//react
import React from "react";
import PropTypes from "prop-types";

const TextList = ({ color, listArr, className }) => {
  return (
    <div style={{ color }} className={className}>
      {listArr &&
        listArr.map((elem, i, arr) => (
          <React.Fragment key={`container${i}`}>
            <p key={i}>{elem}</p>
            {i + 1 !== arr.length && <p key={`empty${i}`} />}
          </React.Fragment>
        ))}
    </div>
  );
};

TextList.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  listArr: PropTypes.array,
};

export default TextList;
