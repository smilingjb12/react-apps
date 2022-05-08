import { Box, CssBaseline, StyledEngineProvider } from "@mui/material";
import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  RecoilRoot
} from 'recoil';
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { APP_HEADER_HEIGHT } from "./constants";
import Counter from "./pages/Counter/Counter";
import Home from "./pages/Home/Home";
import Library from "./pages/Music/components/Library";
import Trending from "./pages/Music/components/Trending";
import Music from "./pages/Music/Music";
import Todo from "./pages/Todo/Todo";

function App(): ReactElement {
  return (
    <RecoilRoot>

      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <React.Suspense fallback={<Loader />}>
            <Box
              height={`calc(100vh - ${APP_HEADER_HEIGHT})`}
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ background: 'whitesmoke' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/music" element={<Music />}>
                  <Route path="library" element={<Library />} />
                  <Route path="trending" element={<Trending />} />
                </Route>
              </Routes>
            </Box>
          </React.Suspense>
        </BrowserRouter>
      </StyledEngineProvider>

    </RecoilRoot>
  );
}

export default App;