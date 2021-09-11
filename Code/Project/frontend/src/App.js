import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Shipping from './components/cart/Shipping';
import ProductDetails from './components/product/ProductDetails';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Cart from './components/cart/Cart'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import Payment from './components/cart/Payment';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/order/ListOrders';
import Login from './components/user/Login'
import ProtectedRoute from './components/route/ProtectedRoute'
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList'
import { loadUser } from './actions/userActions'
import store from './store'
import OrderDetails from './components/order/OrderDetails';
import OrdersList from './components/admin/OrdersList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
    <div className="App">
    <Header/>
    <div className="container container-fluid">
    <Route path = "/" component={Home} exact/>
    <Route path = "/search/:keyword" component={Home} />
    <Route path = "/product/:id" component={ProductDetails} exact/>

    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <ProtectedRoute path="/me" component={Profile} exact/>
    <ProtectedRoute path="/me/update" component={UpdateProfile} exact/>
    <ProtectedRoute path="/password/update" component={UpdatePassword} exact/>
    <Route path="/password/forgot" component={ForgotPassword} exact/>
    <Route path="/password/reset/:token" component={NewPassword} exact/>

    <Route path = "/cart" component={Cart} exact/>
    <ProtectedRoute path = "/shipping" component={Shipping} />
    <ProtectedRoute path = "/confirm" component={ConfirmOrder}/>
    <ProtectedRoute path = "/success" component={OrderSuccess} />
    <ProtectedRoute path = "/Payment" component={Payment} />
    <ProtectedRoute path = "/orders/me" component={ListOrders} exact />
    <ProtectedRoute path = "/order/:id" component={OrderDetails} exact />
    </div>
    <ProtectedRoute path = "/dashboard" isAdmin={true} component={Dashboard} exact />
    <ProtectedRoute path = "/admin/products" isAdmin={true} component={ProductsList} exact />
    <ProtectedRoute path = "/admin/product" isAdmin={true} component={NewProduct} exact />
    <ProtectedRoute path = "/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
    <ProtectedRoute path = "/admin/orders" isAdmin={true} component={OrdersList} exact />
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
