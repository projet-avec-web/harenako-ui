import { PossessionsCreate } from './possessions-create';
import { PossessionsEdit } from './possessions-edit';
import PossessionsList from './possessions-list';
import { PossessionsShow } from './possessions-show';

export const possessions_ui = {
  list: <PossessionsList />,
  show: <PossessionsShow />,
  create: <PossessionsCreate />,
  edot: <PossessionsEdit />,
};
