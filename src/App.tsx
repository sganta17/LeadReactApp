import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsForm from './forms/DetailsForm';
import Header from './components/Header';
function App() {
  return (
    <div style={{ overflowX: 'hidden', height: '100vh'}}>
      {/* <Header/> */}
      <DetailsForm/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
