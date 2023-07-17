import React from 'react';
import Labs from './labs'
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* <Route path='/hello' element={<HelloWorld />} /> */}
          <Route index element={<HelloWorld />} />
          <Route path='/labs/*' element={<Labs />} />
          <Route path='/tuiter/*' element={<Tuiter />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
