import { Link } from "react-router-dom";
import { Stack, Button, Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

const NavbarOld = () => {
    return (
        <>
            {/* old navbar */}
            {/* <nav className="navbar">
            <h1>Moneyon Hackathon</h1>
            <div className="links">
                <Link to="/ideas">Idea List</Link>
                <Link to="/submit" style={{
                    color: 'white',
                    backgroundColor: '#04e762',
                    borderRadius: '8px'
                }}>Submit Idea</Link>
            </div>
        </nav> */}

            {/* new navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Moneyon Hackathon
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Link to="*">
                            <Button variant="contained">404 Page</Button>
                        </Link>

                        <Link to="/ideas/1">
                            <Button variant="outline">1st Idea</Button>
                        </Link>

                        <Link to="/ideas">
                            <Button variant="contained">Idea List</Button>
                        </Link>

                        <Link to="/submit">
                            <Button variant="contained">Submit Idea</Button>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>

        </>
    );
}

export default NavbarOld;