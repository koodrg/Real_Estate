import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/screens/Homepage/Homepage'
import ApartmentRent from './components/screens/ViewAll/ApartmentRent'
import HometownRent from './components/screens/ViewAll/HometownRent'
import ApartmentSale from './components/screens/ViewAll/ApartmentSale'
import HometownSale from './components/screens/ViewAll/HometownSale'
import Detail from './components/screens/ViewDetail/Detail'
import SignUp from './components/screens/SignUp/SignUp';
import SignIn from './components/screens/SignIn/SignIn';
import { React, useEffect, createContext, useReducer,useContext } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { reducer, initialState } from './reducers/dataReducer'

const UserContext = createContext()

export {UserContext}

const Routing = () => {
  const history = useHistory()
  const { state1, dispatch1 } = useContext(UserContext)
  const { state, dispatch } = useContext(UserContext)

  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    dispatch1({type:"USER",payload:user})
  }, [])

  useEffect(() => {
    const data = [localStorage.getItem("address"),localStorage.getItem("category"), localStorage.getItem("price_min"), localStorage.getItem("price_max")]
    console.log(data)
    dispatch({type:"DATA",payload:data})
    
  }, [])
  
  
  
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/cho-thue/can-ho">
        <ApartmentRent />
      </Route>
      <Route path="/cho-thue/nha-pho">
        <HometownRent />
      </Route>
      <Route path="/mua-ban/can-ho">
        <ApartmentSale />
      </Route>
      <Route path="/mua-ban/nha-pho">
        <HometownSale />
      </Route>
      <Route path="/chi-tiet/:id">
        <Detail />
      </Route>
      <Route path="/dang-ki">
        <SignUp />
      </Route>
      <Route path="/dang-nhap">
        <SignIn />
      </Route>
    </Switch>
)
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [state1, dispatch1] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{ state, dispatch, state1, dispatch1}}>
      <BrowserRouter>
        <div className="app">
          <header>
            <Header />
          </header>
          <Routing></Routing>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
