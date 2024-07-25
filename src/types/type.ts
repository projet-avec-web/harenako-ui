export type MutationType = 'CREATE' | 'UPDATE';

export type HarenakoProviderTemplate<T> = {
  getOne: (name: string, meta: unknown) => Promise<T>;
  getList: (page: number, pageSize: number, filter: unknown, sort: unknown, meta: unknown) => Promise<T[]>;
  saveOrUpdate: (payload: T, meta: { mutationType: MutationType; [T: string]: unknown }) => Promise<T>;
  delete: (name: string, meta: unknown) => Promise<T>;
};
