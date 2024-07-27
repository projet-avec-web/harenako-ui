import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/data-provider';
import { patrimoine_ui } from './operations/patrimoine';

const App = () => (
  <Admin title="patrimoine admin" dataProvider={dataProvider}>
    <Resource name="patrimoines" {...patrimoine_ui} />
  </Admin>
);

export default App;
