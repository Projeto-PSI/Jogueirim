import React from "react";
import { Box, Grid, Button } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import teste from "../../_assets/teste/teste.json";
import { AdCard } from "../AdCard";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBar";
import db from "../../config/db";

export const ShowAds: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState<any[]>([]);

  window.addEventListener("load", () => {
    Fetchdata();
  });

  const Fetchdata = () => {
    db.collection("ads")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  const showingAds = info!.map((data: any) => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "1rem 0", width: "100%" }}
      >
        {/* height="100%"
      display="flex"
      justifyContent="center"
    flexDirection="column" */}
        <Box
          sx={{
            width: "100%",
            maxHeight: "33vh",
            height: "100%",
            // display: "flex",
            justifyContent: "center"
          }}
        >
          <div id="outer">
            <div id="inner" style={{ width: "50%", margin: "0 auto" }}>
              <AdCard
                name={data.adName}
                category={data.category}
                description={data.description}
                price={data.price}
                image={data.image}
              />
            </div>
          </div>
        </Box>
      </Grid>
    );
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFFFFF"
      }}
    >
      <NavBar />

      {showingAds}
    </Box>
  );
};
