import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Root from './components/root';
import configureStore from './store/store';

// const httpLink = new HttpLink({ uri: 'http://localhost:3000/' });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(
    <Root store={store} />
    , root);
});