import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';

export const PatrimoineCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="nom" label="Nom" required />
        <DateInput source="t" label="Date" required />
        <TextInput source="possesseur.nom" label="Possesseur" required />
      </SimpleForm>
    </Create>
  );
};
