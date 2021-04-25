import './App.css';
import Header from './comp/Header'
import Hello from './comp/Hello';
import Counter from './comp/Counter';
import FooterC from './comp/Footer';
import Container from './comp/Container';

//*jsx: output js variables, perform js logic in the code using {}
function App() {
  return (
    <div className="main-comp">
      <Header/>
        <Container></Container>
      <FooterC/>
    </div>
  );
}

export default App;
