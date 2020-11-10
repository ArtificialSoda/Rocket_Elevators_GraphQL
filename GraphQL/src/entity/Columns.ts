import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Index("index_columns_on_battery_id", ["battery_id"], {})
@Index("index_columns_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity()
export class Columns extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    type_of_building: string;

    @Field()
    @Column()
    number_of_floors_served: number;
    
    @Field()
    @Column()
    status: string;

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
    battery_id: string;

    @Field()
    @Column()
    customer_id: string;
}