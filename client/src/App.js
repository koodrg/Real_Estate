import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import ApartmentRent from './pages/ViewAll/ApartmentRent';
import HometownRent from './pages/ViewAll/HometownRent';
import ApartmentSale from './pages/ViewAll/ApartmentSale';
import HometownSale from './pages/ViewAll/HometownSale';
import Detail from './pages/ViewDetail/Detail';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/home/Home';


import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
//import UserList from './pages/userList/UserList';
//import User from './pages/user/User';
//import UtilitiesList from './pages/utilitiesList/UtilitiesList';
import CategoriesList from './pages/categoriesList/CategoriesList';
import Category from './pages/category/Category';
import UtilitiesList from './pages/utilitiesList/UtilitiesList';
import Utility from './pages/utility/Utility';



import { React, useEffect, createContext, useReducer,useContext } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { reducer, initialState } from './reducers/dataReducer'


const UserContext = createContext()

export {UserContext}

const isAdmin = false;

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


  if(!isAdmin)
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
  if (isAdmin)
    return (
      <Switch>
      <Route exact path="/admin">
        <Home />
      </Route>
      <Route path="/admin/users">
        {/* <UserList /> */}
      </Route>
      <Route path="/admin/categories">
        <CategoriesList />
      </Route>
      <Route path="/admin/category/:_id">
        <Category />
      </Route>
      <Route path="/admin/utilities">
        <UtilitiesList />
      </Route>
      <Route path="/admin/utility/:_id">
        <Utility />
      </Route>
    </Switch>
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [state1, dispatch1] = useReducer(reducer,initialState)
  if(!isAdmin)
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

  if(isAdmin){
    return(
      <UserContext.Provider value={{ state, dispatch, state1, dispatch1}}>
        <BrowserRouter>
          <Topbar/>
            <div className="container">
             <Sidebar />
             <Routing></Routing>
            </div>
            <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App;
