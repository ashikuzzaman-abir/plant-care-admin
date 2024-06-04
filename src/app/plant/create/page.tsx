'use client';

import React from 'react';
import fields from './dataModel';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { useAddProductMutation } from '@/store/services/productsApi';
import { useAddPlantMutation } from '@/store/services/plantsApi';

const CreatePlantPage = () => {
	const [trigger, result] = useAddPlantMutation();
	const [formData, setFormData] = useFormData(fields);

	return (
		<FormPage
			data={fields}
			formData={formData}
			setFormData={setFormData}
			trigger={trigger}
			result={result}
			path='plant'
			title='Add Plant'
		/>
	);
};

export default CreatePlantPage;
