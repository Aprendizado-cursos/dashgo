import { FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                _hover={{ bgColor: "gray.900" }}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                size="lg"
                {...rest}
            ></ChakraInput>
        </FormControl>
    );
}
