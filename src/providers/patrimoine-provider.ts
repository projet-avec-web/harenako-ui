import { patrimoineApi } from '../api';
import { Patrimoine } from '@harena-com/typescript-client';
import { HarenakoProviderTemplate } from '../types/type';
import { addIdentifier } from './utils';

export const patrimoineProvider: HarenakoProviderTemplate<Patrimoine> = {
  getOne: async function (name): Promise<Patrimoine> {
    return patrimoineApi()
      .getPatrimoineByNom(name)
      .then((res) => addIdentifier(res.data, 'nom'));
  },
  getList: async function (page, pageSize): Promise<Patrimoine[]> {
    return patrimoineApi()
      .getPatrimoines(page, pageSize)
      .then((res) => res.data.data!.map((patrimoine) => addIdentifier(patrimoine, 'nom')));
  },
  saveOrUpdate: async function (payload): Promise<Patrimoine> {
    return patrimoineApi()
      .crupdatePatrimoines({ data: [payload] })
      .then((res) => addIdentifier(res.data.data![0], 'nom'));
  },
  delete: async function (): Promise<Patrimoine> {
    throw new Error('Function not implemented.');
  },
};
