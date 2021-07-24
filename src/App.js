import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import LikedPage from './pages/LikedPage/LikedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/favorites">
          <LikedPage />
        </Route>
        <Route path="/album/:name/:id">
          <AlbumPage />
        </Route>
        <Route path="/">
          <ArtistPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
