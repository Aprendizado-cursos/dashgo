import {
    FormLabel,
    Input as ChakraInput,
    FormControl,
    InputProps as ChakraInputProps,
    FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { error = null, name, label, ...rest },
    ref
) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                ref={ref}
                name={name}
                _hover={{ bgColor: "gray.900" }}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                size="lg"
                {...rest}></ChakraInput>
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
};

export const Input = forwardRef(InputBase);
