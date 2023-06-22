import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import About from "./About";
import EditPost from "./EditPost";
import Home from "./Home";
import Layout from "./Layout";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path="edit/:id" element={<EditPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
