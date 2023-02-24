import {
  HomeOutlined,
  LaptopChromebookOutlined,
  BarChartOutlined,
  SettingsApplicationsOutlined,
} from '@mui/icons-material';

export const navMenu = [
  { name: 'Home', icon: <HomeOutlined />, patch: '/',
id: 1 },
  {
    name: 'Watchlist',
    icon: <BarChartOutlined />,
    patch: '/watchlist',
    id: 2
  },
  {
    name: 'Feed',
    icon: <LaptopChromebookOutlined />,
    patch: '/feed',
    id: 3
  },
  {
    name: 'Settings',
    icon: <SettingsApplicationsOutlined />,
    patch: 'settings',
    id: 4
  },
];
