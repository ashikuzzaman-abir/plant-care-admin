import { SidebarItemType } from '../types';

const sidebar: SidebarItemType[] = [
	{
		title: 'Dashboard',
		href: '/',
		icon: 'home',
		path: 'dashboard',
	},
	{
		startOfSection: true,
		sectionTitle: 'Menu',
		title: 'Plants',
		href: '/plant',
		icon: 'items',
		path: 'plant',
	},
	// {
	// 	title: 'Categories',
	// 	href: '/categories',
	// 	icon: 'category',
	// 	path: 'categories',
	// },
	// {
	// 	title: 'Collections',
	// 	href: '/collections',
	// 	icon: 'collections',
	// 	path: 'collections',
	// },
	{
		startOfSection: true,
		sectionTitle: 'Customer',
		title: 'Feedback',
		href: '/feedbacks',
		icon: 'feedbacks',
		path: 'feedbacks',
	},

	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
