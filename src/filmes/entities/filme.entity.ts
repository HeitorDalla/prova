import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Estilo } from "src/estilos/entities/estilo.entity";

@Table
export class Filme extends Model<Filme>{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    declare id: number

    @ForeignKey(() => Estilo)
    @Column({ type: DataType.INTEGER, allowNull: false })
    declare estiloId: number

    @BelongsTo(() => Estilo)
    declare estilo: Estilo

    @Column({ type: DataType.STRING, allowNull: false })
    declare nome: string

    @Column({ type: DataType.STRING, allowNull: false })
    declare ano: string

    @Column({ type: DataType.STRING, allowNull: false  })
    declare duracao: string

    @Column({ type: DataType.STRING , allowNull: false })
    declare foto: string

    @Column({ type: DataType.STRING, allowNull: false })
    declare sinopse: string

    @Column({ type: DataType.STRING, allowNull: false })
    declare video: string
}