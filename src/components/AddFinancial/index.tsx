import { Button, Checkbox, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Stack, theme } from "@chakra-ui/react";
import React from "react";
import { Input } from '../../components/Form/Input'

export function AddFinancial({ isOpen, onClose }) {
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
                <ModalHeader>Movimentação Bancária</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Titulo</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite o titulo da transação' name="tituloTransacao" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Valor</FormLabel>
                        <NumberInput defaultValue={0} max={9999999} clampValueOnBlur={false}>
                            <NumberInputField name="valor" />
                            <NumberInputStepper>
                                <NumberIncrementStepper _active={{ bg: "pink.500" }} />
                                <NumberDecrementStepper _active={{ bg: "pink.500" }} />
                            </NumberInputStepper>
                        </NumberInput>
                        <RadioGroup onChange={setValue} value={value} mt="2">
                            <HStack spacing="4">
                                <Radio colorScheme="pink" value='1' name="entrada">Entrada</Radio>
                                <Radio colorScheme="pink" value='2' name="saida">Saída</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Transação</FormLabel>
                        <Input focusBorderColor='pink.500' placeholder='Digite quem fez a transação' name="responsavelTransacao" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Dia da transação</FormLabel>
                        <Input name="dataTransacao" type="date" />
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