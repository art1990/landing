//react
import React from "react";
import PropTypes from "prop-types";
//assets

const Arrow = ({ hover }) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill={hover ? "#F61067" : "white"} />
      <circle cx="13.5" cy="13.5" r="13" stroke="#F61067" strokeOpacity="0.5" />
      <path
        d="M17.7911 13.8536C17.9863 13.6583 17.9863 13.3417 17.7911 13.1464L14.6091 9.96447C14.4138 9.7692 14.0972 9.7692 13.902 9.96447C13.7067 10.1597 13.7067 10.4763 13.902 10.6716L16.7304 13.5L13.902 16.3284C13.7067 16.5237 13.7067 16.8403 13.902 17.0355C14.0972 17.2308 14.4138 17.2308 14.6091 17.0355L17.7911 13.8536ZM9.5625 14H17.4375V13H9.5625V14Z"
        fill={hover ? "white" : "#F61067"}
      />
    </svg>
  );
};

Arrow.propTypes = {
  hover: PropTypes.bool,
};

export default Arrow;
