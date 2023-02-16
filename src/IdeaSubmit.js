import { BeachAccess, Groups2, Home, LightbulbOutlined, LockOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, Divider, FormControl, FormControlLabel, Grid, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

const IdeaSubmit = () => {
    const [team_name, setTeamName] = useState('Sentinels');
    const [idea_name, setIdeaName] = useState('');
    const [idea_desc, setIdeaDesc] = useState('');
    const [categories, setCategories] = useState('Other');
    const [upvotes, setUpvotes] = useState(69);
    const navigate = useNavigate();

    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const idea = { team_name, idea_name, idea_desc, category, upvotes };
        // const idea = { ideaTitle, ideaDescription, cat1, upvote: 0, shortlist: 0 }


        // fetch('http://localhost:8000/ideas', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(idea)
        // }).then(() => {
        //     // console.log("New blog added");
        //     navigate('/ideas');
        // })

        const idea = {
            ideaTitle: idea_name,
            ideaDescription: idea_desc,
            cat1: category,
            upvote: 0,
            shortlist: 0
        }
        axios.post('http://10.70.4.74:8080/api/v1/idea/addIdea', idea).then(() => {
            console.log("idea submission");
            navigate('/ideas');

        });


    }

    const resetForm = (event) => {
        setIdeaName("");
        setIdeaDesc("");
        setCategory("Other");
    }


    return (
        <>
            {/* <div className="create">
                <h2>Submit your idea: </h2>
                <form onSubmit={handleSubmit}>
                    <label>Idea Name: </label>
                    <input
                        type="text"
                        required
                        value={idea_name}
                        onChange={(e) => setIdeaName(e.target.value)}
                    />
                    <label>Idea Description: </label>
                    <textarea
                        required
                        value={idea_desc}
                        onChange={(e) => setIdeaDesc(e.target.value)}
                    />
                    <select
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Sustainability">Sustainability</option>
                        <option value="Virtual Reality">Virtual Reality</option>
                        <option value="Waste Reduction">Waste Reduction</option>
                        <option value="Education">Education</option>
                        <option value="Social Impact">Social Impact</option>
                        <option value="Mental Health">Mental Health</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Other">Other</option>
                    </select>

                    <button>Submit Idea</button>
                </form>
            </div> */}
            {/* <Container component="main" maxWidth="lg"> */}
            {/* <CssBaseline /> */}
            {/* <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "skyblue" }}>
                        <LightbulbOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Submit your Idea
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="idea-name"
                                    name="ideaName"
                                    required
                                    fullWidth
                                    id="ideaName"
                                    label="Idea Name"
                                    autoFocus

                                    value={idea_name}
                                    onChange={(e) => setIdeaName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="idea-description"
                                    label="Idea Description"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}

                                    value={idea_desc}
                                    onChange={(e) => setIdeaDesc(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="idea-category-label">Category</InputLabel>
                                        <Select
                                            labelId="idea-category-label"
                                            id="idea-category"
                                            value={category}
                                            label="Category"
                                            onChange={handleCategoryChange}
                                        >
                                            <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                                            <MenuItem value="Sustainability">Sustainability</MenuItem>
                                            <MenuItem value="Virtual Reality">Virtual Reality</MenuItem>
                                            <MenuItem value="Waste Reduction">Waste Reduction</MenuItem>
                                            <MenuItem value="Education">Education</MenuItem>
                                            <MenuItem value="Social Impact">Social Impact</MenuItem>
                                            <MenuItem value="Mental Health">Mental Health</MenuItem>
                                            <MenuItem value="Agriculture">Agriculture</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Box>

                            </Grid>

                            <Grid item xs={8}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, bgcolor: "success.main" }}
                                >
                                    Submit Idea
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="reset"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Clear Form
                                </Button>
                            </Grid>

                        </Grid>

                    </Box>
                </Box> */}

            <Grid container component="main" maxWidth="xl" sx={{ marginX: "auto", marginY: 5 }} height="80vh">
                <CssBaseline />

                <Grid item xs={12} sm={8} md={8} component={Paper} elevation={8} sx={{ borderRadius: 6, marginX: "auto" }}>
                    <Box
                        sx={{
                            m: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "skyblue" }}>
                            <LightbulbOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Submit your Idea
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="idea-name"
                                        name="ideaName"
                                        required
                                        fullWidth
                                        id="ideaName"
                                        label="Idea Name"
                                        autoFocus

                                        value={idea_name}
                                        onChange={(e) => setIdeaName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="idea-description"
                                        label="Idea Description"
                                        required
                                        fullWidth
                                        multiline
                                        rows={8}

                                        value={idea_desc}
                                        onChange={(e) => setIdeaDesc(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="idea-category-label">Category</InputLabel>
                                            <Select
                                                labelId="idea-category-label"
                                                id="idea-category"
                                                value={category}
                                                label="Category"
                                                onChange={handleCategoryChange}
                                            >
                                                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                                                <MenuItem value="Sustainability">Sustainability</MenuItem>
                                                <MenuItem value="Virtual Reality">Virtual Reality</MenuItem>
                                                <MenuItem value="Waste Reduction">Waste Reduction</MenuItem>
                                                <MenuItem value="Education">Education</MenuItem>
                                                <MenuItem value="Social Impact">Social Impact</MenuItem>
                                                <MenuItem value="Mental Health">Mental Health</MenuItem>
                                                <MenuItem value="Agriculture">Agriculture</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Box>

                                </Grid>

                                <Grid item xs={8}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, bgcolor: "success.main" }}
                                    >
                                        Submit Idea
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        type="reset"
                                        fullWidth
                                        variant="outlined"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={() => resetForm()}
                                    >
                                        Clear Form
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
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
                            flexDirection: 'column',
                            alignItems: 'center',
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
                        </Box>
                    </Box>
                </Grid>

            </Grid>


            {/* </Container> */}
        </>
    );
}

export default IdeaSubmit;