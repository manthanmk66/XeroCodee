import appwriteService from "../appwrite/config";
import useAuth from "../context/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "", // Add lastName field
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const { setAuthStatus } = useAuth();

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
        firstname: formData.firstName, // Corrected: firstname instead of name
        lastname: formData.lastName, // Add lastname field
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
        backgroundColor: "white",
        lineHeight: 1.5,
        px: { xs: 2, md: 4 },
        py: 5,
        width: "100%",
        border: 1,
        borderColor: "black",
        boxShadow: 4,
        maxWidth: "100%",
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
              }}
            >
              <Divider sx={{ flexShrink: 0, mt: 2, width: 150 }} />
              <Box sx={{ flexDirection: "column" }}>
                <Typography sx={{ textAlign: "center", fontSize: 30 }}>
                  Hello!
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    textAlign: "center",
                    fontSize: 14,
                    color: "#4A4A4A",
                  }}
                >
                  Create your Account
                </Typography>
              </Box>
              <Divider sx={{ flexShrink: 0, mt: 2, width: 150 }} />
            </Box>
            <form onSubmit={create}>
              <Typography
                sx={{ mt: 2, textTransform: "capitalize", color: "#4A4A4A" }}
              >
                First Name
              </Typography>
              <TextField
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "white", width: "100%" }}
              />
              <Typography
                sx={{ mt: 2, textTransform: "capitalize", color: "#4A4A4A" }}
              >
                Email-id
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "white", width: "100%" }}
              />
              <Typography
                sx={{ mt: 2, textTransform: "capitalize", color: "#4A4A4A" }}
              >
                Password
              </Typography>
              <TextField
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "white", width: "100%" }}
              />
              <Typography
                sx={{ mt: 2, textTransform: "capitalize", color: "#4A4A4A" }}
              >
                Confirm Password
              </Typography>
              <TextField
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "white", width: "100%" }}
              />
              {error && (
                <Typography color="error" sx={{ mt: 2 }}>
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
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                sx={{ flex: 1, py: 1 }}
              >
                Sign Up with Google
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                variant="outlined"
                sx={{ flex: 1, py: 1 }}
              >
                Sign Up with GitHub
              </Button>
            </Box>
            <Typography sx={{ mt: 2, textAlign: "center", color: "blue" }}>
              Already have an Account?{" "}
              <Link href="/login" passHref>
                <span style={{ fontWeight: "bold", color: "blue" }}>LOGIN</span>
              </Link>
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
