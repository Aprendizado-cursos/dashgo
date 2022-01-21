import { FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
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
        </FormControl>
    );
};

export const Input = forwardRef(InputBase);
