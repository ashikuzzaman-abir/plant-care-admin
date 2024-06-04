import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { DrawerCloseButton, ModalCloseButton } from '@chakra-ui/react';

const MenuModalCloseButton = () => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <DrawerCloseButton />;
	}

	return <ModalCloseButton />;
};

export default MenuModalCloseButton;
