import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './pages/Header';
import Register from './user/Register';
import Home from './pages/Home';
import Loggin from './pages/Loggin';
import ProfilAdmin from './admin/ProfilAdmin';

import PostCategory from './admin/PostCategory';
import PostArticle from './admin/PostArticle';
import Profil from './user/Profil';
import UpdateInfos from './admin/UpdateInfos';
import UpdateArticle from './admin/UpdateArticle';
import Footer from './footer/Footer';
import AllProducts from './articles/AllProducts';
import Cart from './pages/Cart';
import Payement from './user/Payement';
import ModifierInfo from './user/ModifierInfo';
import Commandes from './pages/Commandes';
import Remboursement from './user/Remboursement';
import ResetPassword from './user/ResetPassword';
import Recupe from './user/Recupe'
import { CssBaseline } from '@material-ui/core';
import Contact from './contact/Contact';

const App=()=> {
  return (
    <>
    <CssBaseline />
    <Router>
     <Header />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/product' component={AllProducts} />
       <Route path='/cart' component={Cart} />
       <Route path='/register' component={Register} />
       <Route path='/loggin'   component={Loggin} />
       <Route path='/admin'    component={ProfilAdmin} />
       <Route path='/postCategory' component={PostCategory} />
       <Route path='/postArticle' component={PostArticle} />
       <Route path='/profil' component={Profil} />
       <Route path='/updateInfos' component={UpdateInfos} />
       <Route path='/updateArticle/:id' component={UpdateArticle} />
       <Route path='/payement' component={Payement} />
       <Route path='/userInfo' component={ModifierInfo} />
       <Route path='/commandes' component={Commandes} />
       <Route path='/remboursement' component={Remboursement} />
       <Route path='/resetPassword' component={ResetPassword} />
       <Route path='/changerPassword/:token/:id' component={Recupe} />
       <Route path='/contact' component={Contact} />
     </Switch> 
     <Footer />
     </Router>
    
    </>
  );
}

export default App;
