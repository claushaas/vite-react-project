import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coffee from './pages/Coffee';
import CoffeeList from './pages/CoffeeList';
import Layout from './components/Layout';
import NavBar from './components/Nav-bar';
import NotFound from './pages/Not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="coffees" element={ <CoffeeList /> } />
        <Route path="coffees/:coffee" element={ <Coffee /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
