import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import BlogHome from './components/BlogHome';
import BlogDetails from './components/BlogDetails';
import CreateBlogEntry from './components/CreateBlogEntry';

import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={BlogHome} />
        <Route path='/posts/:id' component={BlogDetails} />
        <Route path='/create' component={CreateBlogEntry} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
