import './App.css';
import ComposantC from './components/ComposantC';
import DataFetchAll from './components/DataFetchAll';
import DataFetchAllContacts from './components/DataFetchAllContacts';
import DataFetchFilm from './components/DataFetchFilm';
import DataFetchTodos from './components/DataFetchTodos';
import DataFetchingOne from './components/DataFetchingOne';
import DatafetchReducer from './components/DatafetchReducer';
import Formulaire from './components/Formulaire';
import Inline from './components/Inline';
import NameList from './components/NameList';
import Newsletter from './components/Newsletter';
import Stylesheets from './components/Stylesheets';
// import AdminTest from './components/AdminTest';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import SuperHeros from './components/SuperHeros';
// import UserGreetings from './components/UserGreetings';
// import Welcome from './components/Welcome';

import { UserProvider } from './components/userContext';

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
      {/* <DataFetchTodos /> */}
      <DatafetchReducer />


    </div>
  );
}

export default App;
