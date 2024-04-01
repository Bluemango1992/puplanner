import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, Button, MenuItem, Input, Paper, TextField } from "@mui/material";
import Link from 'next/link'
import Navbar from "../component/Navbar";

const pages = ['How it works', 'Pricing', 'FAQ'];

export default function Login() {

    return (
    <div>
        <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <Paper elevation={3} className="flex items-center justify-center p-12" sx={{ rounded: 3 }}>
                <div className="flex flex-col items-center justify-center gap-6 min-w-[320px]">
            <Typography variant="h3">Welcome Back!</Typography>
            <TextField placeholder="Email" fullWidth variant="outlined" />
            <TextField placeholder="Password" type="password" fullWidth variant="outlined" />
            <Button variant="contained" color="primary" fullWidth>Login</Button>
            <Link href="/signup">
            <Button variant="text" color="primary">Don't have an account? Sign up!</Button>
            </Link>
                </div>
            </Paper>
            </div>
        </Container>
      </main>
    </div>
    );

}