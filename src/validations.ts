import { z } from "zod";

export const zipCodeValidationSchema = z.string().regex(/^\d{5}-\d{3}$/, "Formato do CEP inválido.").length(9);
export const numberValidationSchema = z.number().min(1).max(20000)