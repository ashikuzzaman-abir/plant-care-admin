import { InputData } from '@/components/library/types';
import createCategoryModalModel from '@/lib/dataModels/createCategory.model';

export type DataType = {
	name: string | undefined;
	isFeatured: boolean;
	image?: string | undefined;
	meta?: {
		title: string;
		description: string;
	};
	[key: string]: any;
};

const dataFields: InputData<DataType>[] = [
	{
		sectionTitle: 'Add A Plant',
		name: 'coverImage',
		label: 'Cover Image',
		isRequired: true,
		type: 'image',
		endOfSection: true,
	},
	{
		sectionTitle: 'Details',
		name: 'name',
		label: 'Plant Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'descriptionImage',
		label: 'Description Image',
		isRequired: true,
		type: 'image',
	},
	{
		name: 'plantDescription',
		label: 'Plant Description',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'careDescription',
		label: 'Care Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'light',
		label: 'Light',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'water',
		label: 'Water',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'humidity',
		label: 'Humidity',
		isRequired: true,
		type: 'text',
		endOfSection: true,
	},
	{
		name: 'temperature',
		label: 'Temperature',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'food',
		label: 'Food',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'toxicity',
		label: 'Toxicity',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'additionalCare',
		label: 'Additional Care',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'scientificName',
		label: 'Scientific Name',
		isRequired: true,
		type: 'text',
		endOfSection: true,
	},
	{
		sectionTitle: 'About Section',
		name: 'about',
		label: 'About',
		isRequired: true,
		type: 'textarea',
	},

	{
		name: 'funfact',
		label: 'Fun Fact',
		isRequired: true,
		type: 'text',
		endOfSection: true,
	},
];

export default dataFields;
