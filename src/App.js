import './App.css';
import reducer from './reducer/newsSlice'
import store from './reducer/store'
import Category from './component/Category';
import Newsdata from './component/Newsdata';

function App() {
  return (
    <div className='wrap'>
      <div className="wrap_i">
      <Category></Category>
      <Newsdata></Newsdata>
      </div>

    </div>
  );
}

export default App;
