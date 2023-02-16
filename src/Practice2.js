import { Bookmark, BookmarkBorder, CenterFocusStrongTwoTone, Favorite, FavoriteBorder, Send } from "@mui/icons-material";
import { Checkbox, Paper, Box, Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Practice = () => {
    const { id } = useParams();
    const { data: idea, isLoading, error } = useFetch('http://10.70.4.74:8080/api/v1/idea/getIdea');
    return (
        <>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>


                {idea && (

                    <Box
                        sx={{
                            m: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                        }}
                    >
                        {/* <Typography variant="h5">
        <b>Idea Name: </b>{idea.idea_name}
    </Typography>
    <Typography variant="h5">
        <b>Description: </b>{idea.idea_desc}
    </Typography>
    <Typography variant="h5">
        <b>Category: </b>{idea.category}
    </Typography> */}


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

                    </Box>
                )}

            </Box>


            <Container maxWidth="sm">
                <Grid justifyContent="center">
                    {/* <Button
                        variant="contained"
                        startIcon={<Send />}
                    ></Button> */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox
                            icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />}
                        />
                    </Box>
                </Grid>
            </Container>



        </>
    );
}

export default Practice;