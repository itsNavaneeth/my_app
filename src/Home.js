import { Stack, Button, Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import IdeaList from "./IdeaList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: ideas, isLoading, error } = useFetch('http://192.168.71.184:8080/api/v1/idea/getIdea');

    return (
        <>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {/* <div className="home"> */}
                {error && <div>{error}</div>}
                {isLoading && <p>Loading...</p>}
                {ideas && <IdeaList ideas={ideas} title="Ideas List" />}
                {/* </div> */}
            </Box>
        </>
    );
}

export default Home;
