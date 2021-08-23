import TopBar from './components/TopBar'
import MenuHero from './components/MenuHero'
import { StateManagement } from './state';
import Main from './components/Main';

function App() {
  return (<div><StateManagement>
    <TopBar></TopBar>
    <MenuHero></MenuHero>
    <Main></Main>
  </StateManagement></div>);
}

export default App;
