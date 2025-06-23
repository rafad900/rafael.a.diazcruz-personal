import './App.css';
import Blog from './blog/Blog';
// import MatrixRain from './blog/components/MatrixRain';


function App() {

  return (
    <div className="App">
      {/* <div className="matrix-background-container">
        <MatrixRain />
      </div> */}
      <div className="main-content">
        <Blog />
      </div>
    </div>
  );
}

export default App;
