import { PatrimoineApi, PossessionApi, ProjectionFutureApi } from './gen-ts';

export const patrimoineApi = () => new PatrimoineApi();
export const possessionsApi = () => new PossessionApi();
export const projectionFuturApi = () => new ProjectionFutureApi();
