import { z } from 'zod';

export const schema = z.object({
    name: z.string({
        required_error: "Deve informar um nome",
    })
        .min(3, "Deve conter no mínimo 3 caracteres")
        .max(50, "Deve conter no máximo 50 caracteres")
        .regex(/^[a-zA-Z\s]*$/, { message: "Deve conter apenas letras" }),

    gender: z.string(({
        required_error: "Deve escolher um gênero",
    })).min(1, "Selecione um gênero"),

    ethnicity: z.string(({
        required_error: "Deve escolher uma etnia",
    })).min(1, "Selecione uma etnia"),

    maritalStatus: z.string(({
        required_error: "Deve escolher um estado civil",
    })).min(1, "Selecione um estado civil"),
});