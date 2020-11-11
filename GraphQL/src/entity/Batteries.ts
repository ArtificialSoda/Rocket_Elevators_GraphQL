import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Buildings } from './Buildings';
import { Columns } from './Columns';


@Index("index_columns_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity()
export class Batteries extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Field()
    @Column()
    building_id: string;
    
    @Field()
    @Column()
    type_of_building: string;

    @Field()
    @Column()
    status: string;

    @Field(() => Int)
    @Column()
    employee_id: number;

    @Field()
    @Column()
    operations_certificate: string;

    @Field()
    @Column()
    information: string;

    @Field()
    @Column()
    notes: string;

    @Field()
    @Column()
    created_at: Date;

    @Field()
    @Column()
    updated_at: Date;

    @Field()
    @Column()
    commissioning_date: Date;

    @Field()
    @Column()
    last_inspection_date: Date;

    @Field(() => Int)
    @Column()
    customer_id: number;

    @Field(() => Buildings)
    @ManyToOne(() => Buildings, building => building.batteries)
    @JoinColumn({ name: 'building_id', referencedColumnName: 'id' })
    building: Buildings;

    @Field(() => [Columns])
    @OneToMany(() => Columns, columns => columns.battery)
    columns: Columns[];
}