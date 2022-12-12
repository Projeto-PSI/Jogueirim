import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
  ImageList
} from "@mui/material/";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import db from "../../config/db";

export const CreateAd: React.FC = () => {
  const navigate = useNavigate();

  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [adName, setAdName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files!;
    if (file) {
      const fileRef = file[0] || "";
      const fileType: string = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };
  const handleAdName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdName(e.target.value);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ok");

    db.collection("ads")
      .add({
        adName: adName,
        description: description,
        category: category,
        price: price,
        image: image
      })
      .then((docRef: any) => {
        console.log("Data Successfully Submitted");
      })
      .catch((error: any) => {
        console.error("Error adding document: ", error);
      });

    navigate("/showAds");
    // addAd(adName)
  };
  // console.log(category);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFFFFF"
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{
          backgroundColor: "#F9F6EE"
        }}
      >
        {!image && (
          <Button sx={{ all: "unset" }}>
            <Box
              sx={{
                margin: "2rem",
                width: "90vw",
                height: "15rem",
                borderRadius: "5px",
                borderColor: "#322514",
                borderStyle: "dotted"
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      value={image}
                      onChange={handleImage}
                    />
                    <PhotoCamera fontSize="large" sx={{ color: "#322514" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: "18px" }}>
                    Incluir Fotos
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Button>
        )}
        {image && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "1rem 0" }}
          >
            <img
              src={image}
              width="400"
              height="400"
              alt={"Activity"}
              loading="lazy"
            />
          </Grid>
        )}
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <TextField
          sx={{
            width: "90vw"
          }}
          id="adName"
          label="Título da atividade"
          value={adName}
          onChange={handleAdName}
          variant="outlined"
        />
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <TextField
          sx={{
            width: "90vw"
          }}
          id="description"
          label="Descrição"
          value={description}
          onChange={handleDescription}
          multiline
          rows={4}
        />
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <TextField
          sx={{
            width: "90vw"
          }}
          id="category"
          label="Categoria"
          value={category}
          onChange={handleCategory}
          select
          SelectProps={{
            native: true
          }}
        >
          <option value=""> </option>
          <option value="Aluguel">Aluguel</option>
          <option value="Convite">Convite</option>
          <option value="Campeonato">Campeonato</option>
        </TextField>
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <TextField
          sx={{
            width: "90vw"
          }}
          id="price"
          label="Preço"
          value={price}
          onChange={handlePrice}
          variant="outlined"
        />
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#1E847F", width: "90vw" }}
        >
          Inserir anúncio
        </Button>
      </Grid>
    </Box>
  );
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     addAd: (ad: any) => dispatch(addAd(ad))
//   };
// };
// export default connect(null, mapDispatchToProps)(CreateAd);
