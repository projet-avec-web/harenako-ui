import { Create, DateInput, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const PatrimoineCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="nom" label="Nom" required />
        <DateInput source="t" label="Date" required />
        <TextInput source="possesseur.nom" label="Possesseur" required />
        <NumberInput source="valeur_comptable" required />
      </SimpleForm>
    </Create>
  );
};
