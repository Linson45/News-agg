import React, { useContext, useState, useEffect } from "react";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";

export default function InshortTabs() {
  const [layout, setLayout] = useState({ width: window.innerWidth });
  
  useEffect(() => {
    const handleResize = () => {
      setLayout({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = (key) => {
    switch (key) {
      case 'first':
        return <DiscoverScreen />;
      case 'second':
        return <NewsScreen />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: layout.width }}>
      <TopNavigation index={index} setIndex={setIndex} />
      {renderScene(routes[index].key)}
    </div>
  );
}
