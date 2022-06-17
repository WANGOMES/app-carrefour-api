import GlobalStyles from './commons/styles/global-styles';
import Main from './containers/Main'

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Main/>
      <input placeholder='Digite seu CEP aqui...'></input>
    </div>
    
  );
}

export default App;