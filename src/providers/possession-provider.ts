import { possessionsApi } from '../api';
import { HarenakoProviderTemplate } from '../types/type';
import { addIdentifier, getPossessionTypeValue } from './utils';
import { Possession, PossessionAvecType } from '@harena-com/typescript-client';

const addPossessionId = (possession: PossessionAvecType) => {
  return addIdentifier(getPossessionTypeValue(possession), 'nom');
};

export const possessionProvider: HarenakoProviderTemplate<Possession> = {
  getOne: async (nomPossession, { nomPatrimoine }) => {
    return possessionsApi()
      .getPatrimoinePossessionByNom(nomPatrimoine, nomPossession)
      .then((response) => addPossessionId(response.data));
  },
  getList: async (page, pageSize, _filter, _sort, { nomPatrimoine }) => {
    return possessionsApi()
      .getPatrimoinePossessions(nomPatrimoine, page, pageSize)
      .then((response) => response.data.data!.map((possession) => addPossessionId(possession)));
  },
  saveOrUpdate: async (payload, { nomPatrimoine }) => {
    return possessionsApi()
      .crupdatePatrimoinePossessions(nomPatrimoine as string, 0, 0, {
        data: [payload as any],
      })
      .then((response) => addPossessionId(response.data.data![0]));
  },
  delete: async (nomPossession, { nomPatrimoine }) => {
    return possessionsApi().deletePatrimoinePossessionByNom(nomPatrimoine, nomPossession).then();
  },
};
