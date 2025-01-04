import './App.module.css';
import './components/NavBar'
import { RouterProvider } from 'react-router-dom';
import router from './components/root-component';
import './api/axiosDefault'

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
