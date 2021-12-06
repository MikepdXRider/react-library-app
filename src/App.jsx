import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="Home">Home</NavLink>
        <NavLink to="Books">Books</NavLink>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
