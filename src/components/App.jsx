import { Route, Routes } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import About from "./About";
import EditPost from "./EditPost";
import Home from "./Home";
import Layout from "./Layout";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path="edit/:id" element={<EditPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
