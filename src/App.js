import './App.css';
import Header from './component/Header';
import List from './component/List';
import Feature from './component/Feature';
import Choose from './component/Choose';
import News from './component/News';
import Facts from './component/Facts';

const App = () => {
    return (
        <div className="container">
            <Header />
            <List />
            <Feature />
            <Facts />
            <Choose />
            <News />
        </div>
    );
}

export default App;
