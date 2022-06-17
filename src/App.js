import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CataloguePage from "./components/pages/CataloguePage";
import Header from "./components/Header";
import {USERS_URL, POSTS_URL} from "./utils/Constants";

function App() {
    return (
        <>
            {/*штука чтобы чекать, какой путь стоит в браущере и перенаправлять соответствующе*/}
            {/*http://localhost:3000/ - значит HomePage*/}
            {/*http://localhost:3000/catalogur - значит CataloguePage*/}
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path={POSTS_URL} element={<CataloguePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
