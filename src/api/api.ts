import { PatrimoineApi, PossessionApi, ProjectionFutureApi } from '@harena-com/typescript-client';
import { getConfiguration } from './utils';

export const patrimoineApi = () => new PatrimoineApi(getConfiguration());
export const possessionsApi = () => new PossessionApi(getConfiguration());
export const projectionFuturApi = () => new ProjectionFutureApi(getConfiguration());

