export type MutationType = 'CREATE' | 'UPDATE';

export type HarenakoProviderTemplate<T> = {
  getOne: (name: string, meta: any) => Promise<T>;
  getList: (page: number, pageSize: number, filter: any, sort: any, meta: any) => Promise<T[]>;
  saveOrUpdate: (payload: T, meta: { mutationType: MutationType; [T: string]: any }) => Promise<T>;
  delete: (name: string, meta: any) => Promise<T>;
};
