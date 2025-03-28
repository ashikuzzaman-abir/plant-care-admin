import React from 'react';
import { TextProps, Tr } from '@chakra-ui/react';

type TableRowProps = TextProps & {
	children: React.ReactNode;
};

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
	return (
		<Tr h='2.5rem' {...props}>
			{children}
		</Tr>
	);
};

export default TableRow;
