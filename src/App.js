import React from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

const monsters = [
  {
    name: 'Ariel',
    email: 'ariel@gmail.com'
  },{
    name: 'Tato',
    email: 'tato@gmail.com'
  },{
    name: 'Yero',
    email: 'yero@gmail.com'
  },{
    name: 'Arnold',
    email: 'arnold@gmail.com'
  },{
    name: 'Marlon',
    email: 'marlon@gmail.com'
  },{
    name: 'Gilberto',
    email: 'gilberto@gmail.com'
  },{
    name: 'Osvaldo',
    email: 'osvaldo@gmail.com'
  },{
    name: 'Yacel',
    email: 'yacel@gmail.com'
  },{
    name: 'Raul',
    email: 'raul@gmail.com'
  }
]

function App() {
  return (
    <div className="App">
      <SearchBox placeholder='Search monster..'/>
    </div>
  );
}

export default App;
