
import './App.css'
import {Routes,Route} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {PostsPage} from "./pages/PostsPage.jsx";
import {EditPostPage} from "./pages/EditPostPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='posts' element={<PostsPage/>}/>
        <Route path='posts/:id/edit' element={<EditPostPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
