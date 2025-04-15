import { StrapIcon, CompassIcon, VideoIcon, BookmarkIcon, BellIcon, ChatIcon } from '../../icons';

export const useSidebar = () => {
  const navigationItems = [
    {
      href: '/',
      icon: <StrapIcon />,
      id: 1,
      title: 'Лента',
    },
    {
      href: '/',
      icon: <CompassIcon />,
      id: 2,
      title: 'Каналы',
    },
    {
      href: '/',
      icon: <VideoIcon />,
      id: 3,
      title: 'Видео',
    },
    {
      href: '/',
      icon: <BookmarkIcon />,
      id: 4,
      title: 'Сохранённое',
    },
    {
      href: '/',
      icon: <BellIcon />,
      id: 5,
      title: 'Уведомления',
    },
    {
      href: '/',
      icon: <ChatIcon />,
      id: 6,
      title: 'Чаты',
    },
  ];

  return {
    navigationItems,
  };
};
