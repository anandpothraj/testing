import React from "react";
import Profile from '../components/Home/Profile';
import Work from "../components/Home/Work";
import RecentProjects from '../components/Home/RecentProjects';

const Home = () => {
  return (
    <div className="bg-dark">
      <Profile/>
      <Work/>
      <RecentProjects/>
    </div>
  );
};
export default Home;