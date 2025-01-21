// import { Navigation, } from 'core/types';
import { Icon, Navigation } from 'eworldes-ui-toolkit';


export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'home',
    title: 'My Tasks',
    link: "/home",
    icon: <Icon iconName='home' />,
    children: [
      {
        segment: "xyz",
        title: "Queue Information",
        icon: <Icon iconName='event' />,
      },
      {
        segment: "CallCenterActivities",
        title: "Call Center Activities",
        icon: <Icon iconName='event' />,
      },
    ],
  },
  {
    segment: 'calender',
    title: 'Applications',
    link: "/calender",
    icon: <Icon iconName='event' />
  },
  {
    segment: 'households',
    title: 'Households',
    link: "/calender",
    icon: <Icon iconName='event' />
  },
  {
    segment: 'students',
    title: 'Students',
    link: "/calender",
    icon: <Icon iconName='event' />
  },
];