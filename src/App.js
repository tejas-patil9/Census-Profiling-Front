import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/layouts/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Register from './Components/layouts/signup/Register';
import UserProfile from './Components/pages/UserProfile';
import AdminProfile from './Components/pages/AdminProfile';
import NotFound from './Components/pages/NotFound';
import ListUser from './Components/layouts/ListUser';
import ViewUser from './Components/layouts/ViewUser';
import AddUser from './Components/layouts/AddUser';
import logout from './Components/pages/logout';
import Footer from './Components/layouts/Footer';
import EditUser from './Components/pages/user/EditUser';
import AddUsers from './Components/pages/user/AddUsers';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path= "/adminprofile" component={AdminProfile}/>
            <Route exact path="/userprofile" component={UserProfile}/>
            <Route exact path="/notfound" component={NotFound}/>
            <Route exact path="/listUser" component={ListUser}/>
            <Route exact path="/viewUser/:uid" component={ViewUser}/>
            <Route exact path="/addUser/_add" component={AddUser}/>
            <Route exact path="/logout" component={logout} />
            <Route exact path="/userprofile/edituser/:id" component={EditUser}/>
            <Route exact path="/userprofile/addUser/:id" component={AddUsers}/>
          </Switch>   
          <Footer/>   
      </div>
    </Router>
  );
}

export default App;
