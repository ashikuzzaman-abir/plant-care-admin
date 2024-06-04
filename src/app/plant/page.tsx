'use client';

import React from 'react';
import { NextPage } from 'next';
import {
	TableObjectProps,
	ViewModalDataModelProps,
} from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';

const ViewDataModel: ViewModalDataModelProps[] = [
	{
		title: 'Plant Name',
		dataKey: 'name',
		type: 'string',
	},
	{ title: 'Plant Description', dataKey: 'plantDescription', type: 'string' },
	{ title: 'Care Description', dataKey: 'careDescription', type: 'string' },
	{ title: 'Light', dataKey: 'light', type: 'string' },
	{ title: 'Water', dataKey: 'water', type: 'string' },
	{ title: 'Humidity', dataKey: 'humidity', type: 'string' },
	{ title: 'Temperature', dataKey: 'temperature', type: 'string' },
	{ title: 'Food', dataKey: 'food', type: 'string' },
	{ title: 'Toxicity', dataKey: 'toxicity', type: 'string' },
	{ title: 'Additional Care', dataKey: 'additionalCare', type: 'string' },
	{ title: 'Scientific Name', dataKey: 'scientificName', type: 'string' },
	{ title: 'About Plant', dataKey: 'about', type: 'string' },
	{ title: 'Fun Fact', dataKey: 'funFact', type: 'string' },
	{ title: 'Created At', dataKey: 'createdAt', type: 'date' },
	{ title: 'Cover Image', dataKey: 'coverImage', type: 'image-text' },
	{
		title: 'Description Image',
		dataKey: 'descriptionImage',
		type: 'image-text',
	},
];

const data: TableObjectProps = {
	title: 'Plants',
	path: 'plant',
	button: {
		title: 'Add Plant',
		path: '/plant/create',
	},
	menu: [
		{
			title: 'Edit',
			type: 'edit',
		},
		{
			title: 'View',
			type: 'view-modal',
			dataModel: ViewDataModel,
		},
		{
			title: 'View',
			type: 'custom',
			modal: ViewDataModel,
		},
	],

	data: [
		{
			title: 'Name',
			sort: 'name',
			type: 'image-text',
			dataKey: 'name',
			imageKey: 'coverImage',
			default: true,
		},

		{
			title: 'Plant Description',
			dataKey: 'plantDescription',
			default: true,
		},

		{
			title: 'Care Description',
			dataKey: 'careDescription',
			default: true,
		},
		{
			title: 'Light',
			dataKey: 'light',
			default: true,
		},
		{
			title: 'Water',
			dataKey: 'water',
			default: true,
		},
		{
			title: 'Humidity',
			dataKey: 'humidity',
			default: true,
		},
		{
			title: 'Temperature',
			dataKey: 'temperature',
			default: true,
		},
		{
			title: 'Food',
			dataKey: 'food',
			default: true,
		},
		{
			title: 'Toxicity',
			dataKey: 'toxicity',
			default: true,
		},
		{
			title: 'Additional Care',
			dataKey: 'additionalCare',
			default: true,
		},
		{
			title: 'Scientific Name',
			dataKey: 'scientificName',
			default: true,
		},
		{
			title: 'About Plant',
			dataKey: 'about',
			default: true,
		},
		{
			title: 'Fun Fact',
			dataKey: 'funFact',
			default: true,
		},
		{
			title: 'createdAt',
			dataKey: 'createdAt',
			sort: '-createdAt',
			type: 'date',
			default: true,
		},

		{ title: '...', type: 'menu' },
	],
};

const page: NextPage = () => {
	return <PageTable table={data} />;
};

export default page;
