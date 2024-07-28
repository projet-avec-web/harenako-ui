import { PossessionAvecType } from '@harena-com/typescript-client';

export const addIdentifier = <T>(data: T, key: keyof T): T & { id: T[keyof T] } => ({
  ...data,
  id: data[key],
});

export const getPossessionTypeValue = (value: PossessionAvecType) => {
  switch (value.type) {
    case 'ARGENT':
      return value.argent!;
    case 'FLUXARGENT':
      return value.flux_argent!;
    case 'MATERIEL':
      return value.materiel!;
    default:
      throw new Error('Unknown Possession Type value');
  }
};
