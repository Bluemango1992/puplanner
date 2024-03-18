import React from "react";
import { TextField } from "@mui/material";
import Link from 'next/link'
import Navbar from "../../component/Navbar";
import Typography from "../../Typography/typograph";
import { Container, Box, Button, Divider} from "../../component";


export default function Login() {

    return (
    <div>
        <Navbar />
        <Container>
          <div className="flex flex-col items-center justify-center">
                <Box>
                <div className="flex flex-col items-center justify-center gap-6 min-w-[500px]">
            <Typography variant="h1">Welcome Back!</Typography>
            <TextField placeholder="Email" fullWidth variant="outlined" />
            <TextField placeholder="Password" type="password" fullWidth variant="outlined" />
            <div className="flex flex-1">
            <Link href="/dashboard">
            <Button variant="primary" size="full">Login</Button>
            </Link>
            </div>
            <Link href="/forgot-password">
            <Button variant="text" size="full">Forgot Password?</Button>
            </Link>
            <Divider />
            <Link href="/signup">
            <Button variant="text" size="full">Don't have an account? Sign up!</Button>
            </Link>
                </div>
                </Box>
            </div>
        </Container>
    </div>
    );

}