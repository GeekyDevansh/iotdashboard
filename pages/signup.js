import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from 'next/router'

const signup = () => {

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
      
          fontWeight: "500",
          color: "blue",
        }} variant="h4" gutterBottom>
          Sign Up Here
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
            label="Name"
            variant="outlined"
          />

          <TextField
            sx={{
              width: "100%",
              my: 1,
            }}
            id="outlined-basic"
            label="Personal Email"
            variant="outlined"
          />

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

          <TextField
            sx={{
              width: "100%",
              my: 1,
            }}
            id="outlined-basic"
            label="Mobile No"
            variant="outlined"
          />

          <TextField
            sx={{
              width: "100%",
              my: 1,
            }}
            id="outlined-basic"
            label="Roll No/Emp Id"
            variant="outlined"
          />

          <TextField
            id="select"
            sx={{
              width: "100%",
              my: 1,
            }}
            label="Category"
            select
          >
            <MenuItem value={1}>Faculty</MenuItem>
            <MenuItem value={2}>Non Teaching Staff</MenuItem>
            <MenuItem value={3}>Student</MenuItem>
          </TextField>

          <input
            type="file"
            className="my-2 block w-full text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-violet-100"
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
            
            Register
            
          </Button>
        </FormControl>

        

      </Box>
    </Container>
    </>
  )
}

export default signup