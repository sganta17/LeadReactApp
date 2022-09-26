import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsForm from './forms/DetailsForm';
import Header from './components/Header';
import IframeComponent from './components/IframeComponent';
function App() {
  return (
    <div style={{ overflowX: 'hidden', height: '100vh' }}>
      <Header />
      {/* <DetailsForm /> */}
      <IframeComponent>
        <DetailsForm />
      </IframeComponent>
    </div>
  );
}

export default App;
