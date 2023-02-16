import { BeachAccess, Bookmark, BookmarkBorder, Favorite, FavoriteBorder, Groups2, Home, LightbulbOutlined, LockOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Container, CssBaseline, Divider, FormControl, FormControlLabel, Grid, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";
import { useEffect, useState } from "react";


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


const IdeaDetails = () => {
    const { id } = useParams();
    const { data: idea, isLoading, error } = useFetch('http://10.70.4.74:8080/api/v1/idea/' + id);
    const [userId, setUserId] = useState(3);
    const [shortlist2, setShortlist] = useState(0);
    const [upvote2, setUpvote] = useState(0);

    const handleShortlist = (myid) => {
        axios
            .post(`http://10.70.4.74:8080/api/v1/4/${myid}`).then((res) => {
                // console.log(res.data);
                console.log("line 55");
            })
            .then(res => {
                return axios.get('http://10.70.4.74:8080/api/v1/idea/' + id).then((res) => {
                    console.log("line 67");
                    // console.log("res.data.shortlist");
                    console.log(res.data.shortlist);
                    setShortlist(res.data.shortlist);
                    alert(`${idea.ideaTitle} has been shortlisted`);
                });
            })
    }

    const removeShortlist = (myid) => {
        axios
            .post(`http://10.70.4.74:8080/api/v1/remove/4/${myid}`).then((res) => {
                // console.log(res.data);
                console.log("line 81");
            })
            .then(res => {
                return axios.get('http://10.70.4.74:8080/api/v1/idea/' + id).then((res) => {
                    console.log("line 67");
                    // console.log("res.data.shortlist");
                    console.log(res.data.shortlist);
                    setShortlist(res.data.shortlist);
                    alert(`${idea.ideaTitle} has been un shortlisted`);
                });
            })
    }

    const handleUpvote = (myid) => {

        const upvoteobj = {
            ideaId: id,
            userId: myid,
            useridea_id: 0
        }

        // axios.post('http://10.70.4.74:8080/api/v1/addUpvote', upvoteobj).then((res) => {
        //     console.log("line 74");
        //     // console.log("res.data.shortlist");
        //     console.log(res.data.upvote);
        //     setUpvote(res.data.upvote);
        //     alert(`${idea.ideaTitle} has been upvoted`);
        // });

        axios
            .post('http://10.70.4.74:8080/api/v1/addUpvote', upvoteobj).then((res) => {
                // console.log(res.data);
                console.log("line 55");
            })
            .then(res => {
                return axios.get('http://10.70.4.74:8080/api/v1/idea/' + id).then((res) => {
                    console.log("line 67");

                    console.log(res.data.upvote);
                    setUpvote(res.data.upvote);
                    alert(`${idea.ideaTitle} has been upvoted`);
                });
            })

    }

    const removeUpvote = (myid) => {

        const upvoteobj = {
            ideaId: id,
            userId: myid,
            useridea_id: 0
        }

        axios
            .delete(`http://10.70.4.74:8080/api/v1/${myid}/${id}`).then((res) => {
                // console.log(res.data);
                console.log("line 55");
            })
            .then(res => {
                return axios.get('http://10.70.4.74:8080/api/v1/idea/' + id).then((res) => {
                    console.log("line 67");

                    console.log(res.data.upvote);
                    setUpvote(res.data.upvote);
                    alert(`${idea.ideaTitle} has been un upvoted`);
                });
            })

    }

    useEffect(() => {
        const abortCont = new AbortController();

        axios.get('http://10.70.4.74:8080/api/v1/admin').then((res) => {
            console.log("admin");
            console.log(res.data);
        });

        axios.get('http://10.70.4.74:8080/api/v1/idea/' + id).then((res) => {
            console.log("line 85");
            setShortlist(res.data.shortlist);
            setUpvote(res.data.upvote);

        });

        return () => abortCont.abort();

    }, []);


    return (
        <>

            <Grid container component="main" maxWidth="xl" sx={{ marginX: "auto", marginY: 5 }} height="80vh">
                <CssBaseline />

                {/* Hero unit */}
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 0, pb: 0 }}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Idea Details
                    </Typography>
                </Container>
                {/* End hero unit */}

                <Grid item xs={12} sm={8} md={8} component={Paper} elevation={8} sx={{ borderRadius: 6, marginX: "auto" }}>
                    {error && <div>{error}</div>}
                    {isLoading && <p>Loading...</p>}

                    {idea && (
                        <>
                            <Container maxWidth="lg" component="main">
                                <Grid container spacing={5} alignItems="flex-start">


                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea Name"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Typography component="h2" variant="h3" color="text.primary">
                                                        {idea.ideaTitle}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea ID"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Typography component="h2" variant="h3" color="text.primary">
                                                        {idea.ideaId}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea Description"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Typography component="h4" variant="h5" color="text.secondary">
                                                        {idea.ideaDescription}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea Category"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Typography component="h4" variant="h3" color="text.primary">
                                                        {idea.cat1}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={3}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea Upvotes"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-around',
                                                            mt: 3
                                                        }}
                                                    >
                                                        <Box>
                                                            <Button onClick={() => handleShortlist(idea.ideaId)}>
                                                                SL
                                                            </Button>
                                                        </Box>

                                                        <Box>
                                                            <Button onClick={() => removeShortlist(idea.ideaId)}>
                                                                Rm SL
                                                            </Button>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={3}
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Idea Shortlisted"
                                                titleTypographyProps={{ align: 'center' }}


                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-around',
                                                            mt: 3
                                                        }}
                                                    >
                                                        <Box>
                                                            <Button onClick={() => handleUpvote(idea.ideaId)}>
                                                                Uv
                                                            </Button>
                                                        </Box>

                                                        <Box>
                                                            <Button onClick={() => removeUpvote(idea.ideaId)}>
                                                                Rm Uv
                                                            </Button>
                                                        </Box>


                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Container>
                            {/* <Box
                                sx={{
                                    m: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                }}
                            >
                                <Typography variant="h5">
                                    <b>Idea ID: </b>{idea.ideaId}
                                </Typography>

                                <Typography variant="h5">
                                    <b>Idea Name: </b>{idea.ideaTitle}
                                </Typography>
                                <Typography variant="h5">
                                    <b>Description: </b>{idea.ideaDescription}
                                </Typography>
                                <Typography variant="h5">
                                    <b>Category: </b>{idea.cat1}
                                </Typography>
                                <Typography variant="h5">
                                    <b>Upvotes: </b>{upvote2}
                                </Typography>
                                <Typography variant="h5">
                                    <b>Shortlist: </b>{shortlist2}
                                </Typography>

                            </Box> */}



                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    {/* <Card>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                ooooo
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card> */}
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>




                        </>
                    )}

                </Grid>

                <Grid
                    item
                    component={Paper}
                    elevation={8}
                    xs={false}
                    sm={4}
                    md={3}
                    sx={{
                        borderRadius: 6,
                        marginX: "auto",

                    }}

                // sx={{
                //     backgroundImage: 'url(https://source.unsplash.com/d96PxKZrJN8)',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundColor: (t) =>
                //         t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     borderRadius: 6
                // }}
                >
                    <Box
                        sx={{
                            m: 4,
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "skyblue" }}>
                            <Groups2 />
                        </Avatar>
                        <Typography component="h2" variant="h6">
                            Team ID
                        </Typography>
                        <Typography component="h1" variant="h5">
                            The Avengers
                        </Typography>

                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={0}>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar('Tony Stark')} />
                                        </ListItemAvatar>
                                        <ListItemText primary="Tony Stark" secondary="tony@avengers.com" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar('Steve Rogers')} />
                                        </ListItemAvatar>
                                        <ListItemText primary="Steve Rogers" secondary="steve@avengers.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar('Bruce Banner')} />
                                        </ListItemAvatar>
                                        <ListItemText primary="Bruce Banner" secondary="bruce@avengers.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar('Scott Lang')} />
                                        </ListItemAvatar>
                                        <ListItemText primary="Scott Lang" secondary="scott@avengers.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar {...stringAvatar('Dr Strange')} />
                                        </ListItemAvatar>
                                        <ListItemText primary="Dr Strange" secondary="strange@avengers.com" />
                                    </ListItem>
                                </List>
                            </Grid>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    mt: 3
                                }}
                            >
                                {/* <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Divider />
                                    <Typography>Upvote</Typography>
                                    <Checkbox
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        size="medium" />
                                    <Typography>69</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Typography>Shortlist</Typography>
                                    <Checkbox
                                        icon={<BookmarkBorder />}
                                        checkedIcon={<Bookmark />}
                                        size="medium"
                                    />
                                    <Typography>Yes</Typography>
                                </Box> */}

                                <Box>
                                    <Button onClick={() => handleShortlist(idea.ideaId)}>
                                        SL
                                    </Button>
                                </Box>

                                <Box>
                                    <Button onClick={() => removeShortlist(idea.ideaId)}>
                                        Rm SL
                                    </Button>
                                </Box>

                                <Box>
                                    <Button onClick={() => handleUpvote(idea.ideaId)}>
                                        Uv
                                    </Button>
                                </Box>

                                <Box>
                                    <Button onClick={() => removeUpvote(idea.ideaId)}>
                                        Rm Uv
                                    </Button>
                                </Box>


                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default IdeaDetails;