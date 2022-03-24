import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { Input } from '../../components/Form/Input'

export function AddUser({ isOpen, onClose }) {
    const [value, setValue] = React.useState('1')

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
                <ModalHeader>Cadastre um usuário</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite o nome do usuário' name="nomeUsuario" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite o nome do usuário' name="email" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Senha</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite a senha' name="senha" type="password" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Confirme a senha</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite a senha novamente' name="senhaConfirmada" type="password" />
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