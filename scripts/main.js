import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import SearchContacts from './searchContacts';
import ContactPage from './contactPage';

ReactDOM.render((
	<Router>
    <Route path="/" component={App}>
    	<IndexRoute component={SearchContacts} />
      <Route path="search/:terms" component={SearchContacts} />
      <Route path="contact/:contact" component={ContactPage} />
    </Route>
  </Router>
), document.getElementById('view'));

