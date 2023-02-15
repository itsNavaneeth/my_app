import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

import NotFound from './NotFound';
import IdeaSubmit from './IdeaSubmit';
import IdeaDetails from './IdeaDetails';
import Practice from './Practice';
function App() {
  return (
    <Router>
      <CssBaseline>
        <Navbar />
        <Box>
          <Routes>
            <Route exact path='/ideas' element={<Home />} />
            <Route exact path='/ideas/:id' element={<IdeaDetails />} />
            <Route exact path='/submit' element={<IdeaSubmit />} />
            {/* <Route path='*' element={<NotFound />} /> */}
            <Route path='*' element={<Practice />} />
          </Routes>
        </Box>

      </CssBaseline>
    </Router>
  );
}

export default App;
