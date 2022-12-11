import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton
} from "@mui/material/";
import { ReactComponent as Logo } from "../../_assets/icons/logo.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };

  const handleLogin = () => {
    navigate("/showAds");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#322514"
      }}
    >
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: "69px",
            height: "69px"
          }}
        >
          <Logo />
        </Box>
      </Grid>
      <Grid container justifyContent="center">
        <Box
          sx={{
            marginTop: "3rem",
            width: "80vw",
            height: "30rem",
            borderRadius: "20px",
            backgroundColor: "#FFFFFF"
          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              marginTop: "4rem"
            }}
          >
            <TextField
              sx={{
                width: "60vw"
              }}
              id="user"
              label="Usuário"
              variant="standard"
            />
          </Grid>
          <Grid
            container
            justifyContent="center"
            sx={{
              marginTop: "4rem"
            }}
          >
            <TextField
              sx={{
                width: "60vw"
              }}
              id="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              // onChange={someChangeHandler}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button
              sx={{
                marginTop: "4rem",
                borderRadius: "20px",
                backgroundColor: "#000000",
                width: "60vw",
                height: "2.6rem"
              }}
              variant="contained"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              sx={{
                marginTop: "2rem",
                borderRadius: "20px",
                backgroundColor: "#6B7B8C",
                width: "60vw",
                height: "2.6rem"
              }}
              variant="contained"
              onClick={handleCreateAccount}
            >
              Criar Conta
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
