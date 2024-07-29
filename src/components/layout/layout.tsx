import { Layout, LayoutProps } from 'react-admin';
import AppBar from '../app-bar/app-bar';

export const CustomLayout = ({ children }: LayoutProps) => {
  return <Layout appBar={AppBar}>{children}</Layout>;
};
