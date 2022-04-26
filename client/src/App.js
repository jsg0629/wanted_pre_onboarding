import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tap from "./component/Tap";
import Feed from "./pages/Feed";
import MyPage from "./pages/MyPage";
import Message from "./pages/Message";

import "./App.css";
import "./reset.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <Tap />
            <section className="features">
              <Switch>
                <Route exact path={"/"}>
                  <Feed />
                </Route>
                <Route path={"/message"}>
                  <Message />
                </Route>
                <Route path={"/mypage"}>
                  <MyPage />
                </Route>
              </Switch>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
