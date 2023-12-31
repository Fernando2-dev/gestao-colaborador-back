import { ColaboradorAreaAtuacaoRepository, IAtuacaoColaborador, IAtuacaoColaboradorDelete } from "../interfaces/colaboradorAreaAtuacao-repository";
import { prisma } from "@/lib/prisma";

export class PrismaColaboradorAreaAtuacaoRepository implements ColaboradorAreaAtuacaoRepository {
    
    async deleteMany(data: IAtuacaoColaboradorDelete[]): Promise<void> {
        const condicoes = data.map(({ colaborador_id, areaAtuacao_id }) => ({
            colaborador_id,
            areaAtuacao_id,
        }));
    
        await prisma.areaAtuacaoColaborador.deleteMany({
            where: {
                OR: condicoes,
            },
        });
    }
   
    async create(data: IAtuacaoColaborador) {
        const areasAtuacaoColaborador = await prisma.areaAtuacaoColaborador.create({
            data
        });

        return [areasAtuacaoColaborador];
    }
}