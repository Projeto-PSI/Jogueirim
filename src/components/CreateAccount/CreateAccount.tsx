import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import { ReactComponent as Logo } from "../../_assets/icons/logo.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

export const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = React.useState("");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [gender, setGender] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleBackToHomePage = () => {
    navigate("/");
  };

  const handleDate = (event: any) => {
    setDate(event.target.value);
  };

  const handleUser = (event: any) => {
    setUser(event.target.value);
  };

  const handleGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleContact = (event: any) => {
    setContact(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#322514",
      }}
    >
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: "69px",
            height: "69px",
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
            backgroundColor: "#FFFFFF",
          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              marginTop: "0.5rem",
            }}
          >
            <TextField
              sx={{
                width: "60vw",
              }}
              id="user"
              label="Usuário"
              variant="standard"
              value={user}
              onChange={handleUser}
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            sx={{
              marginTop: "1.5rem",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TextField
                sx={{
                  width: "60vw",
                }}
                id="date"
                label="Data de nascimento"
                variant="standard"
                type="date"
                value={date}
                onChange={handleDate}
                defaultValue={new Date()}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid
            container
            sx={{
              marginTop: "0.5rem",
            }}
            justifyContent="center"
          >
            <TextField
              sx={{
                width: "60vw",
              }}
              value={gender}
              onChange={handleGender}
              variant="standard"
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
              label="Sexo"
            >
              <option value=""> </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </TextField>
          </Grid>

          <Grid
            sx={{
              marginTop: "0.5rem",
            }}
            container
            justifyContent="center"
          >
            <TextField
              sx={{
                width: "60vw",
              }}
              id="user"
              label="Contato"
              variant="standard"
              value={contact}
              onChange={handleContact}
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            sx={{
              marginTop: "0.5rem",
            }}
          >
            <TextField
              sx={{
                width: "60vw",
              }}
              id="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              variant="standard"
              value={password}
              onChange={handlePassword}
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
                ),
              }}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button
              sx={{
                marginTop: "2rem",
                borderRadius: "20px",
                backgroundColor: "#000000",
                width: "60vw",
                height: "1.9rem",
              }}
              variant="contained"
            >
              Criar Conta
            </Button>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              sx={{
                marginTop: "2rem",
                borderRadius: "20px",
                backgroundColor: "#6B7B8C",
                width: "60vw",
                height: "1.9rem",
              }}
              variant="contained"
              onClick={handleBackToHomePage}
            >
              Sair
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
