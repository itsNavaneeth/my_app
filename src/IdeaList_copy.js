import { Stack, Button, Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Avatar } from "@mui/material";

import { Link } from 'react-router-dom';
const IdeaList2 = ({ ideas, title }) => {
    // console.log(ideas);

    return (
        <>
            <div className='outer_most_container'>
                {/* {shortlistbanner(shortlist)} */}
                <div className='card_container'>
                    <Card className='container' sx={{ width: 800 }}>
                        <div className='image_container'>
                            <Avatar
                                sx={{ height: 80, width: 80, marginLeft: 2, marginTop: 2 }}
                                alt="Jack Sparrow"
                            // src={team_image}
                            />
                            <Typography sx={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical",
                            }} >
                                {/* {team_name} */}
                                hello
                            </Typography>

                        </div>

                        <div className='idea_container'>

                            <Typography sx={{
                                fontSize: 17,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                fontWeight: 'bold',
                                WebkitBoxOrient: "vertical",
                            }} >
                                {/* {team_idea} */}
                                hello there

                            </Typography>


                            <Typography sx={{
                                fontSize: 13,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical",
                                color: "#565378"
                            }} >
                                {/* {idea_description} */}
                                idea desc
                            </Typography>


                            <Stack direction="row" spacing={0.5} sx={{ marginTop: 1 }}>

                                {/* {
                                categories.split('').map((char, index) => {
                                    console.log("line no 24" + char);
                                    return <Chip label={"#" + hashmap[char]} size='small' sx={{ bgcolor: '#0B733E', color: '#ffffff', fontWeight: 'bold' }} />
                                })

                            } */}
                            </Stack>



                        </div>

                        <div className='count_section'>




                            <div className='end_container' >

                                <img className='upvote' alt="fireSpot" />

                                <Typography sx={{ fontSize: 12, color: "#000000", fontWeight: 'bold', marginLeft: 1, marginRight: 0.5 }}>member_count</Typography>

                            </div>

                            {/* <div className='end_container' onChange={upvoteChange} >

                                <img className='upvote' src={image} alt="fireSpot" />

                                <Typography sx={{ fontSize: 12, color: "#000000", fontWeight: 'bold', marginLeft: 1, marginRight: 0.5 }} >{upvote}</Typography>

                            </div> */}

                            <div className='end_container'>

                                <img className='upvote' alt="fireSpot" />

                                <Typography sx={{ fontSize: 12, color: "#000000", fontWeight: 'bold', marginLeft: 1, marginRight: 0.5 }} >upvotteeeee</Typography>

                            </div>





                        </div>


                    </Card>

                </div>



            </div>
        </>
    );
}

export default IdeaList2;