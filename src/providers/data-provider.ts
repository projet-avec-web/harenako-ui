import { DataProvider } from 'react-admin';
import { HarenakoProviderTemplate } from '../types/type';
import { patrimoineProvider } from './patrimoine-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getResourceProvider = (resource: string): HarenakoProviderTemplate<any> => {
  switch (resource) {
    case 'patrimoines':
      return patrimoineProvider;
    default:
      throw Error('resource unknown' + resource);
  }
};
export const dataProvider: DataProvider = {
  getList: async (resource, { pagination, sort, filter, meta }) => {
    const response = await getResourceProvider(resource).getList(
      pagination?.page || 1,
      pagination?.perPage || 10,
      filter,
      sort,
      meta
    );
    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: response.length >= (pagination?.perPage || 10),
        hasPreviousPage: (pagination?.page || 1) > 1,
      },
    };
  },
  getOne: async (resource, { id: payloadId, meta }) => {
    const response = await getResourceProvider(resource).getOne(payloadId as string, meta);
    return { data: response };
  },
  create: async (resource, { meta, data: payload }) => {
    const response = await getResourceProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'CREATE',
    });
    return { data: response };
  },
  update: async (resource, { data: payload, meta }) => {
    const response = await getResourceProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'UPDATE',
    });
    return { data: response };
  },

  delete: async (resource, { id: payloadId, meta }) => {
    const response = await getResourceProvider(resource).delete(payloadId as string, meta);
    return { data: response };
  },
  deleteMany: () => {
    throw new Error('Not Implemented');
  },
  getMany: () => {
    throw new Error('Not Implemented');
  },
  getManyReference: () => {
    throw new Error('Not Implemented');
  },
  updateMany: () => {
    throw new Error('Not Implemented');
  },
};
