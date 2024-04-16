import {Route, Routes} from "react-router-dom"
import ChatRoom from "./pages/ChatRoom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext, useEffect } from "react";
import { Context } from ".";
import { observer } from 'mobx-react-lite'
import ProfilePage from "./pages/ProfilePage";
import * as signalR from "@microsoft/signalr" 

const App = observer(() => {
  const {store} = useContext(Context);
  
  useEffect(() => {
    store.refresh()
    console.log(store.isAuth)
  }, [store])

  if (store.isLoading) {
    return (
        <div className="container mx-auto my-auto">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
    )
  }

  return (
    <body>
      <Navbar />
      <main className="container mx-auto pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={
            <MainPage/>
          }
          />

          <Route path="/chat" element={ 
            <PrivateRoute>
              <ChatRoom/>
            </PrivateRoute>
          }          
          />
          <Route path="/profile" element={ 
            <PrivateRoute>
              <ProfilePage/>
            </PrivateRoute>
          }
          />
          <Route path="/private" element={ 
            <PrivateRoute>
              <div>Hello world</div>
            </PrivateRoute>
          }
          />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<div>404... not found </div>} />
        </Routes>
      </main>
    </body>
  );
});

export default App;
