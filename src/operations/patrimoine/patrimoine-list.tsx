import { CreateButton, Datagrid, DateField, FunctionField, List, TextField, TopToolbar } from 'react-admin';
import { renderMoneyWithAriary } from '../util';

const PatrimoineListAction = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export const PatrimoineList = () => {
  return (
    <List actions={<PatrimoineListAction />}>
      <Datagrid>
        <TextField source="nom" label={'Nom'} />
        <TextField source="possesseur.nom" label={'Possesseur'} />
        <DateField source="t" label={'Date'} />
        <FunctionField
          label={'Valeur comptable'}
          render={(patrimoine) => renderMoneyWithAriary(patrimoine.valeur_comptable)}
        />
      </Datagrid>
    </List>
  );
};
