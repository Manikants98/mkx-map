import { Chip, Paper } from "@mui/material";
import React from "react";
import FeaturedAttraction from "../../Components/FeaturedAttraction";
import MapComponent from "../../Components/Map";

const Home = () => {
  const [category, setCategory] = React.useState("Education");
  return (
    <Paper className="!rounded-none h-full">
      <div className="flex items-center hide-scroll overflow-x-auto p-2 gap-2">
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "Education" ? "filled" : "outlined"}
          label="Education"
          onClick={() => setCategory("Education")}
        />
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "Sports" ? "filled" : "outlined"}
          label="Sports"
          onClick={() => setCategory("Sports")}
        />
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "School" ? "filled" : "outlined"}
          label="School"
          onClick={() => setCategory("School")}
        />
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "College" ? "filled" : "outlined"}
          label="College"
          onClick={() => setCategory("College")}
        />
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "Government Offices" ? "filled" : "outlined"}
          label="Government Offices"
          onClick={() => setCategory("Government Offices")}
        />
        <Chip
          clickable
          color="error"
          className="!h-9 !rounded-full"
          variant={category === "Home" ? "filled" : "outlined"}
          label="Home"
          onClick={() => setCategory("Home")}
        />
      </div>
      <MapComponent />
      <FeaturedAttraction />
    </Paper>
  );
};

export default Home;
