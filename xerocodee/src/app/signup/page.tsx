"use client";
import React, { FormEvent, useState } from "react";
import { appwriteService } from "../../appwrite/config";
import useAuth from "../../context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const router = useRouter();
  const { authStatus, setAuthStatus } = useAuth();

  if (authStatus) {
    router.replace("/profile");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userData = await appwriteService.createUserAccount({
        email: formData.email,
        password: formData.password,
        firstname: formData.firstname,
        lastname: formData.lastname,
      });
      if (userData) {
        setAuthStatus(true);
        router.push("/profile");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontWeight: "fontWeightBold",
        background:
          "linear-gradient(to top, #4192FF 0%, #4192FF 1%, #C6DEFF 82%, #C6DEFF 0%)",
        px: { xs: 2, md: 4 },
        py: 5,
        width: "100%",
        border: 1,
        borderColor: "black",
        boxShadow: 4,
        maxWidth: "100%",
        fontFamily: "Nunito, Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          pt: 5,
          pb: 10,
          mt: 8,
          mb: 1,
          ml: 6,
          maxWidth: "100%",
          backgroundColor: "white",
          border: 1,
          borderColor: "black",
          boxShadow: 1,
          width: { xs: "100%", md: 1114 },
          fontFamily: "Nunito, Arial, sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            mb: 1,
            maxWidth: "100%",
            width: { xs: "100%", md: 516 },
            flexWrap: { xs: "wrap", md: "nowrap" },
            fontFamily: "Nunito, Arial, sans-serif",
          }}
        >
          <Box sx={{ flexGrow: 1, mt: 4, width: "fit-content" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-end",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "capitalize",
                flexWrap: { xs: "wrap", md: "nowrap" },
                fontFamily: "Nunito, Arial, sans-serif",
              }}
            >
              <Divider sx={{ flexShrink: 0, mt: 2, width: 150 }} />
              <Box sx={{ flexDirection: "column" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#4A4A4A",
                    fontFamily: "Nunito, Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  Hello!
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    textAlign: "center",
                    fontSize: 14,
                    color: "#4A4A4A",
                    fontFamily: "Nunito, Arial, sans-serif",
                  }}
                >
                  Create your Account
                </Typography>
              </Box>
              <Divider sx={{ flexShrink: 0, mt: 2, width: 150 }} />
            </Box>
            <form onSubmit={create}>
              <Typography
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  color: "#4A4A4A",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                First Name
              </Typography>
              <TextField
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  width: "100%",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  color: "#4A4A4A",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Last Name
              </Typography>
              <TextField
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  width: "100%",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  color: "#4A4A4A",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Email-id
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  width: "100%",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  color: "#4A4A4A",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Password
              </Typography>
              <TextField
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  width: "100%",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  color: "#4A4A4A",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  width: "100%",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              />
              {error && (
                <Typography
                  color="error"
                  sx={{ mt: 2, fontFamily: "Nunito, Arial, sans-serif" }}
                >
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "blue",
                  color: "white",
                  width: "100%",
                  textTransform: "capitalize",
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Sign Up
              </Button>
            </form>
            <Typography
              sx={{
                mt: 2,
                textAlign: "center",
                fontWeight: "fontWeightBold",
                color: "#4A4A4A",
                fontFamily: "Nunito, Arial, sans-serif",
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                colour: "black",
                flexWrap: { xs: "wrap", md: "nowrap" },
                fontFamily: "Nunito, Arial, sans-serif",
              }}
            >
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                sx={{
                  flex: 1,
                  colour: "black",
                  py: 1,
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Sign Up with Google
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                variant="outlined"
                sx={{
                  flex: 1,
                  py: 1,
                  fontFamily: "Nunito, Arial, sans-serif",
                }}
              >
                Sign Up with GitHub
              </Button>
            </Box>
            <Typography
              sx={{
                mt: 2,
                textAlign: "center",
                color: "black",
                fontFamily: "Nunito, Arial, sans-serif",
              }}
            >
              Already have an Account?{" "}
              <Link href="/login" passHref>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    fontFamily: "Nunito, Arial, sans-serif",
                  }}
                >
                  LOGIN
                </span>
              </Link>
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ fontFamily: "Nunito, Arial, sans-serif" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
