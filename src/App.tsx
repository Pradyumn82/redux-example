import "./App.css";
import Crud from "./todoList/Crud";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoListToolKit from "./reduxToolkitTodo/component/TodoListToolKit";
import TodoRedux from "./reduxTodo/components/TodoRedux";

function App() {
  return (
    <div>
      <Router>
        <div className="app-container">
          <nav className="nav-container">
            <ul className="nav-links">
              <li>
                <Link to="/crud">Crud</Link>
              </li>
              <li>
                <Link to="/todolist-redux">TodoList Redux</Link>
              </li>
              <li>
                <Link to="/todolist-redux-toolkit">TodoList Redux Toolkit</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/crud" element={<Crud />} />
            <Route path="/todolist-redux" element={<TodoRedux />} />
            <Route
              path="/todolist-redux-toolkit"
              element={<TodoListToolKit />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
