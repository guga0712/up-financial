import { Button, Checkbox, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, theme } from "@chakra-ui/react";
import React from "react";
import { Input } from '../../components/Form/Input'

export function AddCostumer({ isOpen, onClose }) {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent
                bg="gray.800"
                p="4"
            >
                <ModalHeader>Cadastre um cliente</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Nome da loja</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite o nome da loja' name="nomeLoja" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Site da loja</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite o site da loja' name="siteLoja" type="url" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Dia do contrato</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Selecione a data' name="diaContrato" type="date" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Serviços</FormLabel>
                        <HStack spacing="4">
                            <Checkbox colorScheme="pink" _hover={{ color: "gray.50" }} name="ecommerce">E-commerce</Checkbox>
                            <Checkbox colorScheme="pink" _hover={{ color: "gray.50" }} name="perfomance" >Perfomance</Checkbox>
                            <Checkbox colorScheme="pink" _hover={{ color: "gray.50" }} name="fotografia" >Fotografia</Checkbox>
                        </HStack>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='pink' mr={3}>
                        Save
                    </Button>
                    <Button bg="gray.700"
                        _hover={{
                            bg: 'gray.500',
                        }} onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    );
}