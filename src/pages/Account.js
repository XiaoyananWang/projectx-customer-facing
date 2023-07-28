import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const AccountPage = () => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState("Elva");
  const [editingUsername, setEditingUsername] = useState(false);

  const handleSignOut = () => {
    console.log("Signing out...");
  };

  const handleDeleteAccount = () => {
    console.log("Deleting account...");
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const toggleEditingUsername = () => {
    setEditingUsername(!editingUsername);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          bgcolor: "background.default",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Avatar alt={username} src={avatar} />
        {editingUsername ? (
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            variant="outlined"
            onBlur={toggleEditingUsername}
          />
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6">{username}</Typography>
            <IconButton onClick={toggleEditingUsername} size="small">
              <EditIcon />
            </IconButton>
          </Box>
        )}
        <Typography variant="body1">elva@example.com</Typography>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="avatar-upload"
          type="file"
          onChange={handleAvatarChange}
        />
        <label htmlFor="avatar-upload">
          <Button variant="contained" color="primary" component="span">
            Change Avatar
          </Button>
        </label>
        <Button variant="contained" color="primary" onClick={handleSignOut}>
          Sign Out
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default AccountPage;
