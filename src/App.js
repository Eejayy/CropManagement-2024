
// function App() {
//     return (
//         <div className="App">
//             <PostList/>
//             {/*<AddNewPost/>*/}
//             {/*<SearchPost/>*/}
//         </div>
//     );
// }
// ReactDOM.render(<App />, document.getElementById('root'));
// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import AddNewPost from './components/AddNewPost';
import SearchPostList from './components/SearchPostList';
import MapComponent from './components/MapComponent'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/AddNewPost" element={<AddNewPost />} />
                <Route path="/SearchPostList" element={<SearchPostList />} />
                <Route path="/MapComponent" element={<MapComponent />} /> {/* Correct path */}
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
