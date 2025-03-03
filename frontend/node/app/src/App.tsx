import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./0_presentation/components/layouts/Layout";

const NotFound = React.lazy(
  () => import("./0_presentation/pages/core/NotFound")
);
const About = React.lazy(() => import("./0_presentation/pages/About"));
const Setting = React.lazy(() => import("./0_presentation/pages/Setting"));
const Main = React.lazy(() => import("./0_presentation/pages/Main"));
const Login = React.lazy(() => import("./0_presentation/pages/Login"));
const Game = React.lazy(() => import("./0_presentation/game/Game"));
const Profile = React.lazy(() => import("./0_presentation/profile/Profile"));

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/game" element={<Game></Game>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
