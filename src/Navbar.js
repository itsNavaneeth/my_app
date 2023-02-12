import { Link } from "react-router-dom";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

const Navbar = () => {
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
                </Toolbar>
            </AppBar>

        </>
    );
}

export default Navbar;