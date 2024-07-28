import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/data-provider';
import { patrimoine_ui } from './operations/patrimoine';
import { CustomLayout } from './components/layout/layout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const App = () => (
  <Admin title="patrimoine admin" layout={CustomLayout} dataProvider={dataProvider}>
    <Resource icon={AccountBalanceIcon} name="patrimoines" {...patrimoine_ui} />
  </Admin>
);

export default App;
