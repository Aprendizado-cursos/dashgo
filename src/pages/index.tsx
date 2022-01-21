import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
    email: string;
    password: string;
};

const signInFormSchema = yup.object({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
});

export default function Home() {
    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(signInFormSchema) });

    const {errors} = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(values);
    };

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex
                onSubmit={handleSubmit(handleSignIn)}
                as="form"
                width="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column">
                <Stack spacing="4">
                    <Input error={errors.email} name="email" type="email" label="E-mail" {...register("email")} />
                    <Input error={errors.password} name="password" type="password" label="Password" {...register("password")} />
                </Stack>
                <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
