import './App.css';
import CatList from './components/CatList';
import DATA from './data.js';

function App() {
  
  return (
    <>
      <CatList catData={DATA}></CatList>
    </>
  );
}

export default App;
