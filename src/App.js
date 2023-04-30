import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='px-3'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
