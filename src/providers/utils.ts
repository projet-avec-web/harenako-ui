export const addIdentifier = <T>(data: T, key: keyof T): T & { id: T[keyof T] } => ({
  ...data,
  id: data[key],
});
