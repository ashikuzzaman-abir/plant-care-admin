import { FlexPropsType } from '@/types';
import { Flex } from '@chakra-ui/react';
import React from 'react';

const SpaceBetween: React.FC<FlexPropsType> = ({ children, ...props }) => {
	return (
		<Flex
			alignItems='center'
			justifyContent='space-between'
			gap={2}
			w='full'
			{...props}>
			{children}
		</Flex>
	);
};

export default SpaceBetween;
