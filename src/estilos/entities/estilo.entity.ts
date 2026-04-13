import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Estilo extends Model<Estilo> {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    declare id: number

    @Column({ type: DataType.STRING, allowNull: false })
    declare nome: string
}
