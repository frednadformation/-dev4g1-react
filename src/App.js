import './App.css';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import AllContacts from './components/Contacts/AllContacts';
import ComposantC from './components/ComposantC';
import DataFetchAll from './components/DataFetchAll';
import DataFetchAllContacts from './components/DataFetchAllContacts';
import DataFetchFilm from './components/DataFetchFilm';
import DataFetchTodos from './components/DataFetchTodos';
import DataFetchingOne from './components/DataFetchingOne';
import DatafetchReducer from './components/DatafetchReducer';
import Formulaire from './components/Formulaire';
import Home from './components/Home/Home';
import Inline from './components/Inline';
import NameList from './components/NameList';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Services from './components/Services/Services';
import Stylesheets from './components/Stylesheets';
// import AdminTest from './components/AdminTest';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import SuperHeros from './components/SuperHeros';
// import UserGreetings from './components/UserGreetings';
import Welcome from './components/Welcome';

import { UserProvider } from './components/userContext';
import { Routes, Route } from 'react-router-dom'
import OneContact from './components/Contacts/OneContact';
import AllBlogs from './components/Blogs/AllBlogs';
import OneBlog from './components/Blogs/OneBlog';
import { AppContainer } from './components/AppContainer.style';
import NewBlogs from './components/Blogs/NewBlogs';
import Inscription from './components/User/Inscription';
import Connexion from './components/User/Connexion';
import ImageUpload from './components/ImageUpload/ImageUpload';
import MultipleUpload from './components/ImageUpload/MultipleUpload';
import NewBlogImage from './components/Blogs/NewBlogImage';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Thomas" age = "21 ans">
        Thomas est un super gars parce qu'il adore React
      </Greet>
      <Greet name="Toto" age = "3 ans" />
      <Greet name="John" age = "49 ans" /> */}
      {/* <Welcome /> */}

      {/* <SuperHeros nom= "Bruce"  surnom="Batman">
        this is children props
      </SuperHeros>

      <SuperHeros nom= "Clark"  surnom="Superman"/>
      <SuperHeros nom= "Diana"  surnom="Wonder Woman"/> */}

      {/* <Welcome name="Thomas" age="21 ans">
        ceci est un test
      </Welcome>
      <Welcome name="Toto" age="3 ans" />
      <Welcome name="John" age="49 ans" /> */}

      {/* <Message /> */}
      {/* <Counter value={15} /> */}
      {/* <FunctionClick /> */}
{/* 
      <ClassClick />
      <UserGreetings />
      <AdminTest /> */}
      {/* <NameList /> */}
      {/* <Inline />
      <Stylesheets primary={false}/> */}

      {/* <Formulaire /> */}
      {/* <Newsletter /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchFilm /> */}

      {/* <UserProvider value="Fred">
        <ComposantC />
      </UserProvider> */}

      {/* <DataFetchAll /> */}
      {/* <DataFetchAllContacts /> */}
      
      {/* <DatafetchReducer /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} >
          <Route path='/services/developpement' element={<Developpement />} />
          <Route path='/services/marketing' element={<Marketing />} />
        </Route>
        <Route path='/admin' element={<Admin />} >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/gestionPost' element={<GestionPost />} />
        </Route>
        
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/allcontacts' element={<AllContacts />} />
        <Route path='/contact/:id' element={<OneContact />} />

        {/* Blogs */}
        <Route path='/allblogs' element={<AllBlogs />} />
        <Route path='/oneblog/:id' element={<OneBlog />} />
        <Route path='/newblog/' element={<NewBlogs />} />

        {/* User */}
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />

        {/* images */}

        <Route path='/imageUpload' element={<ImageUpload />} />
        <Route path='/multipleUpload' element={<MultipleUpload />} />
        <Route path='/newblogimage' element={<NewBlogImage />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
