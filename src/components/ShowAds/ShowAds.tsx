import React from "react";
import { Box, Grid, Button } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import teste from "../../_assets/teste/teste.json";
import { AdCard } from "../AdCard";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { getAds } from "../../redux/actions/adsActions";
import { useSelector, useDispatch } from "react-redux";

interface ShowAdsProps {
  ads?: any;
}

export const ShowAds: React.FC<ShowAdsProps> = ({ ads }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };

  const handleLogin = () => {
    navigate("/showAds");
  };
  React.useEffect(() => {
    dispatch(getAds());

    // eslint-disable-next-line
  }, []);

  const showingAds = ads!.map((data: any) => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "1rem 0" }}
      >
        <AdCard
          name={data.name}
          category={"Aluguel"}
          description={data.description}
          price={data.price}
          image={
            "https://img.freepik.com/fotos-gratis/figura-triangular-geometrica-legal-em-uma-luz-de-laser-neon-otima-para-fundos-e-papeis-de-parede_181624-9331.jpg?w=2000"
          }
        />
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
      {showingAds}
    </Box>
  );
};
