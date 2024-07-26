import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';

export const PatrimoineEdit = () => {
  const { id } = useParams();
  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput fullWidth source="nom" label={'Nom'} />
        <DateInput fullWidth source="t" label={'Date'} />
        <TextInput fullWidth source="possesseur.nom" label={'Possesseur'} />
      </SimpleForm>
    </Edit>
  );
};
