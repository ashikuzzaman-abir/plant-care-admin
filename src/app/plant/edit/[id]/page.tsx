'use client';

import React from 'react';
import { InputData } from '@/components/library/types';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { useParams } from 'next/navigation';
import {
	useGetByIdQuery,
	useUpdateByIdMutation,
} from '@/store/services/commonApi';

const inputFields: any = [
	{
		sectionTitle: '',
		name: 'coverImage',
		label: 'Cover Image',
		isRequired: false,
		type: 'image',
		endOfSection: true,
	},
	{
		name: 'slug',
		label: 'Slug',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'name',
		label: 'Name',
		isRequired: true,
		type: 'text',
	},
	{
		sectionTitle: 'Details',
		name: 'descriptionImage',
		label: 'Description Image',
		isRequired: false,
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
		isRequired: true,
		type: 'textarea',
		endOfSection: true,
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
	},
	{
		name: 'about',
		label: 'About Plant',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'funfact',
		label: 'Fun Fact',
		isRequired: true,
		type: 'textarea',
	},
];

const EditItemPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data } = useGetByIdQuery({ path: 'plant', id: id }, { skip: !id });
	const [formData, setFormData] = useFormData<any>(inputFields, data);

	const [trigger, result] = useUpdateByIdMutation();

	return (
		<>
			<FormPage
				data={inputFields}
				formData={formData}
				setFormData={setFormData}
				trigger={trigger}
				result={result}
				path='plant'
				title='Update Menu Item'
				type='update'
				id={id}
			/>
		</>
	);
};

export default EditItemPage;
