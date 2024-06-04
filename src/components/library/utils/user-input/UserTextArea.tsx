'use client';
import React from 'react';
import {
	Input,
	InputProps,
	FormControl,
	Stack,
	useColorModeValue,
	Text,
	Textarea,
	TextareaProps,
} from '@chakra-ui/react';
import Label from '../../form/label/Label';
import HelperText from '../../form/label/HelperText';

type InputContainerProps = TextareaProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string;
	placeholder?: any;
};

const UserTextArea: React.FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	...props
}) => {
	const borderColor = useColorModeValue('brand.500', 'brand.200');

	return (
		<FormControl
			isRequired={isRequired}
			gap={4}>
			<Stack
				spacing={2}
				w='full'>
				{/* <Label>{label}</Label> */}

				<Stack
					spacing={1}
					w='full'>
					<Textarea
						minH='300px'
						px={3}
						borderColor='#ebebeb'
						borderRadius='sm'
						focusBorderColor={'#555'}
						color='text.500'
						bg='#ebebeb'
						_dark={{
							color: 'gray.300',
						}}
						placeholder={label}
						_placeholder={{ fontSize: 16, fontWeight: '500', letterSpacing: '1px', color: '#999' }}
						value={value}
						{...props}
					/>

					{helper && <HelperText>{helper}</HelperText>}
				</Stack>
			</Stack>
		</FormControl>
	);
};

export default UserTextArea;
