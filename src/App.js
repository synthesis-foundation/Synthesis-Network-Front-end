import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './assets/css/App.css';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { Identities } from './pages/Identities';
import { CustomNode } from './pages/CustomNode';

function App() {
  return (
    <main className='main'>
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='settings' element={<Settings/>}/>
            <Route path='identities' element={<Identities/>}/>
            <Route path='custom-node' element={<CustomNode/>}/>
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
