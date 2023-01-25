import React ,{useEffect} from 'react'
import '../styles/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
// import { useStateValue } from '../StateProvider';
// import { auth } from '../Firebase';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  // const [dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged(user=>{
  //     dispatch({
  //       type:"SET_USER",
  //       user:user
  //     })
  //   })
  // }, [])
  
    return (
          <Router>
            <Routes>
              <div className="App">
                <div className="app__body">
                  <Sidebar/>
                  <Route exact path="/">
                    <Chat/>
                  </Route>
                  <Route path="/room/:roomId">
                    <Chat/>
                  </Route> 
                </div>
              </div>  
            </Routes>
          </Router>
    );
  }

export default App;
