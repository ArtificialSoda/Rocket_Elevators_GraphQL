import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
​
@ObjectType()
@Entity('FactIntervention', { database: 'Fabien_Dimitrov_DWH', schema: 'public' })
export class FactIntervention extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    employeeID: number
​
    @Field( () => Int)
    @Column()
    buildingID: number
​
    @Field( () => Int )
    @Column()
    batteryID: number
​
    @Field( () => Int )
    @Column()
    columnID: number
​
    @Field( () => Int )
    @Column()
    elevatorID: number
​
    @Field( () => Int )
    @Column()
    intervention_start: Date

    @Field( () => Int )
    @Column()
    intervention_stop: Date

    @Field( () => Int )
    @Column()
    result: string

    @Field( () => Int )
    @Column()
    report: string

    @Field( () => Int )
    @Column()
    status: string
}