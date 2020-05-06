import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';

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

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: monsters,
      searchText: '',
    }
  }

  render(){
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
  });

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search monster..' handleChange={e => this.setState({searchText: e.target.value})}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
