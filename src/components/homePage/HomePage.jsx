import React from "react";
import useCount from "../../hooks/useCount";
const HomePage = () => {
  const { total, count } = useCount(0);
  return <div>HomePage</div>;
};

export default HomePage;
