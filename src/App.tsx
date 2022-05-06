import RepositoriesList from './components/RepositoriesList';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Search for your favorite NPM package</h1>
            <RepositoriesList />
        </div>
    );
}

export default App;
