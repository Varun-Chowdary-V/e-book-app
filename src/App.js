// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing the components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';
import ReviewForm from './components/ReviewForm/ReviewForm';
import ReviewerLogin from './components/ReviewerLogin/ReviewerLogin';
import ReviewerDashboard from './components/ReviewerDashboard/ReviewerDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddBook from './components/AddBook/AddBook';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/booklist" component={BookList} />
                    <Route path="/book/:id" component={BookDetail} />
                    <Route path="/review/:id" component={ReviewForm} />
                    <Route path="/login" component={ReviewerLogin} />
                    <Route path="/dashboard/reviewer" component={ReviewerDashboard} />
                    <Route path="/dashboard/admin" component={AdminDashboard} />
                    <Route path="/addbook" component={AddBook} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
