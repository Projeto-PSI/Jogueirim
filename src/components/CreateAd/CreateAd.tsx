import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Typography
} from "@mui/material/";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import { useNavigate } from "react-router-dom";

export const CreateAd: React.FC = () => {
  // const navigate = useNavigate();

  // const [user, setUser] = React.useState("");
  // const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  // const [gender, setGender] = React.useState("");
  // const [contact, setContact] = React.useState("");
  // const [showPassword, setShowPassword] = React.useState(false);


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
        <Button sx={{ all: "unset" }}>
          <Box
            sx={{
              margin: "2rem",
              width: "90vw",
              height: "15rem",
              borderRadius: "5px",
              borderColor: "322514",
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
                  <input hidden accept="image/*" multiple type="file" />
                  <PhotoCamera fontSize="large" sx={{ color: "#322514" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: "18px" }}>Incluir Fotos</Typography>
              </Grid>
            </Grid>
          </Box>
        </Button>
      </Grid>
      <Grid sx={{ backgroundColor: "#FFFFFF", margin: "1.5rem 0 0 1rem" }}>
        <TextField
          sx={{
            width: "90vw"
          }}
          id="adName"
          label="Título da atividade"
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
    </Box>
  );
};
