import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin title="patrimoine admin" dataProvider={dataProvider}>
    <Resource name="users" edit={EditGuesser} show={ShowGuesser} list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} show={ShowGuesser} />
    <Resource name="comments" edit={EditGuesser} show={ShowGuesser} list={ListGuesser} />
  </Admin>
);

export default App;
