import './App.css';
import Header from './comp/Header'
import FooterC from './comp/Footer';
import Container from './comp/Container';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  React.useEffect(() => {
    window.addEventListener('resize', updateWidthHeight);
    return () => window.removeEventListener('resize', updateWidthHeight);
  })
  return (
    <div className="main-comp">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Container page='home'></Container>
          </Route>
          <Route path="/products">
            <Container page='products'></Container>
          </Route>
          <Route path="/about">
            <Container page='about'></Container>
          </Route>
        </Switch>
        <FooterC />
      </Router>
    </div>
  );
}

export default App;
