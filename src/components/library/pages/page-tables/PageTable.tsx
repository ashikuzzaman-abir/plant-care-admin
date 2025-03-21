'use client';

import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import CustomTable from '@/components/library/tablev2/CustomTable';
import Toast from '@/components/toast/Toast';
import Layout from '@/components/layout/Layout';
import PageHeading from '@/components/library/tablev2/PageHeading';
import Headers from '@/components/library/tablev2/header/Headers';
import { TableObjectProps } from '../../types';
import { setFields, setPreferences } from '@/store/slices/tableSlice';
import { useGetSelfQuery } from '@/store/services/authApi';
import { useGetAllQuery } from '@/store/services/commonApi';
import TableRowComponent from '../../tablev2/row/TableRowComponent';
import { Text } from '@chakra-ui/react';

const selectable = true;

type TableProps = {
	table: TableObjectProps;
	isModal?: boolean;
	inputFields?: any;
};

// Define the PageTable component
const PageTable: FC<TableProps> = ({ table, isModal = false, inputFields }) => {
	const { page, limit, search, sort, filters, fields, preferences, selectedItems }: any =
		useAppSelector((state: any) => state.table);
	const dispatch = useAppDispatch();
	const [col, setCol] = useState<number>(table?.data?.length + 1);

	// Get the table state from the redux store
	const { data, isLoading, isError, error, isSuccess } = useGetAllQuery({
		page,
		limit,
		search,
		sort,
		filters,
		path: table?.path,
	});

	const { data: userData } = useGetSelfQuery({});

	useEffect(() => {
		const defaultFields = table?.data
			? table?.data?.filter(item => item.type !== 'menu').map(item => item.dataKey)
			: [];
		dispatch(setFields(defaultFields));
	}, []);

	useEffect(() => {
		const defaultPreferences = table?.data
			? table?.data?.filter(item => item.default).map(item => item.dataKey)
			: [];
		if (userData && userData?.preferences) {
			const preference = userData?.preferences[table?.path];
			const value = preference && preference?.length > 0 ? preference : defaultPreferences;
			dispatch(setPreferences(value));
			setCol(value.length + 1);
		}
	}, [userData, table]);

	// Create the table headers
	const header = (
		<Headers
			selectable={selectable}
			fields={preferences}
			tableData={table?.data}
			isLoading={isLoading}
			data={data?.doc}
		/>
	);
	// Create the table body by mapping over the data and creating a TableRowComponent for each item
	const body = data?.doc?.map((item: any) => (
		<TableRowComponent
			selectable={selectable}
			fields={preferences}
			item={item}
			data={table?.data}
			menu={table?.menu}
			path={table?.path}
			key={item._id}
		/>
	));

	// Return the layout, page heading, table, and toast components
	return (
		<>
			<Layout
				title={table?.title}
				path={table?.path}>
				<PageHeading
					title={table?.title} //Heading of the page
					button={table?.button?.title} //Button Title
					href={table?.button?.path} //Page where button would redirect to
					isModal={isModal} //If create page should be modal
					path={table?.path} //Path of the table
					data={inputFields} //Input fields for the create page
				/>

				<CustomTable
					filters={table?.path} //Name of the filters
					col={col} //No of columns for skeleton
					isLoading={isLoading} //Loading state
					header={header} //Header of the table
					data={isSuccess && data} //Data to be displayed in the table
					preferences={table?.preferences} //Preferences for the table
					path={table?.path} //Path of the table
					hidePreferences={table?.hidePreferences} //Hide preferences
					selectedItems={selectedItems} //Selected items
				>
					<>{body}</>
				</CustomTable>
			</Layout>
			{/* Toast component to display error */}
			<Toast
				error={error}
				isError={isError}
			/>
		</>
	);
};

export default PageTable;
