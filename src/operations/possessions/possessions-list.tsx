import { Datagrid, DateField, List, FunctionField, TextField, TopToolbar, CreateButton } from 'react-admin';
import { renderMoneyWithAriary } from '../util';

const PossessionListAction = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

const PossessionsList = () => (
  <List resource="possessions" actions={<PossessionListAction />} filter={{ type: 'ARGENT' }}>
    <Datagrid>
      <DateField source="t" label="Date" />
      <TextField source="nom" label="Name" />
      <FunctionField
        render={(possession) => renderMoneyWithAriary(possession.valeur_comptable)}
        label="Valeur comptable"
      />
      <FunctionField render={(possession) => possession.devise.nom} label="Currency Name" />
      <FunctionField render={(possession) => possession.devise.code} label="Currency Code" />
    </Datagrid>
  </List>
);

export default PossessionsList;
