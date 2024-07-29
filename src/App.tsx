import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/data-provider';
import { patrimoine_ui } from './operations/patrimoine';
import { CustomLayout } from './components/layout/layout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InventoryIcon from '@mui/icons-material/Inventory';
import { possessions_ui } from './operations/possessions';

const App = () => (
  <Admin title="patrimoine admin" layout={CustomLayout} dataProvider={dataProvider}>
    <Resource icon={AccountBalanceIcon} name="patrimoines" {...patrimoine_ui} />
    <Resource icon={InventoryIcon} name="possessions" {...possessions_ui} />
  </Admin>
);

export default App;
