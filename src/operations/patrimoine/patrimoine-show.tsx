import { EditButton, Show, SimpleShowLayout, TopToolbar, TextField, DateField, FunctionField } from 'react-admin';
import { useParams } from 'react-router-dom';
import { renderMoneyWithAriary } from '../util';

const PatrimoinShowAction = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export const PatrimoineShow = () => {
  const { id } = useParams();
  return (
    <Show id={id} actions={<PatrimoinShowAction />}>
      <SimpleShowLayout>
        <TextField source="nom" label={'Nom'} />
        <TextField source="possesseur.nom" label={'Possesseur'} />
        <DateField source="t" label={'Date'} />
        <FunctionField
          label={'Valeur comptable'}
          source="valeur_comptable"
          render={(patrimoine) => renderMoneyWithAriary(patrimoine.valeur_comptable)}
        />
      </SimpleShowLayout>
    </Show>
  );
};
