import { PatrimoineCreate } from './patrimoine-create';
import { PatrimoineEdit } from './patrimoine-edit';
import { PatrimoineList } from './patrimoine-list';
import { PatrimoineShow } from './patrimoine-show';

export const patrimoine_ui = {
  list: <PatrimoineList />,
  show: <PatrimoineShow />,
  edit: <PatrimoineEdit />,
  create: <PatrimoineCreate />,
};
