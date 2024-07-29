import { EditButton, Show, SimpleShowLayout, TopToolbar, TextField, DateField, FunctionField } from 'react-admin';
import { useParams } from 'react-router-dom';
import { renderMoneyWithAriary } from '../util';

const PossessionShowAction = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export const PossessionsShow = () => {
  const { id } = useParams();
  return (
    <Show id={id} actions={<PossessionShowAction />}>
      <SimpleShowLayout>
        <DateField source="t" label="Date" />
        <TextField source="nom" label="Name" />
        <FunctionField
          render={(possession) => renderMoneyWithAriary(possession.valeur_comptable)}
          label="Valeur comptable"
        />
        <FunctionField render={(possession) => possession.devise.nom} label="Currency Name" />
        <FunctionField render={(possession) => possession.devise.code} label="Currency Code" />
      </SimpleShowLayout>
    </Show>
  );
};
