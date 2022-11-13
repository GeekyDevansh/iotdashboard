import React from 'react';
import { useRouter } from 'next/router'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Home = () => {

  const router = useRouter();

  return (
    <>
        <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Typography sx={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "blue",
        }} variant="h4" gutterBottom>
          Sign In
        </Typography>

        <FormControl
          sx={{
            width: "66%",
          }}
        >
          <TextField
            sx={{
              width: "100%",
              my: 1,
            }}
            id="outlined-basic"
            label="Official Email"
            variant="outlined"
          />

          <TextField
            sx={{
              width: "100%",
              my: 1,
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <Button
            sx={{
              width: "100%",
              my: 1,
            }}
            fullWidth
            size="large"
            type="submit"
            variant="outlined"
            onClick={()=>{
              router.push('/home')
            }}
          >
            
            Sign In
            
          </Button>
        </FormControl>
        <Typography sx={{
           my:2,
          fontSize: "1rem"
        }} variant="h5" gutterBottom>
          Don't have an account? &nbsp;
          <Link href="/signup">
            Get Started
          </Link>
        </Typography>
      </Box>
    </Container>
    </>
  )
}

export default Home