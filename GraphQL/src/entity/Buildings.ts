import { BaseEntity, Column, Index, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Batteries } from './Batteries';


@Index("index_buildings_on_address_id", ["address_id"], {})
@Index("index_buildings_on_customer_id", ["customer_id"], {})
@ObjectType()
@Entity()
export class Buildings extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Field()
    @Column()
    address_of_the_building: string;
    
    @Field()
    @Column()
    full_name_of_the_building_administrator: string;

    @Field()
    @Column()
    email_of_the_administrator_of_the_building: string;

    @Field()
    @Column()
    phone_number_of_the_building_administrator: string;

    @Field()
    @Column()
    full_name_of_the_technical_contact_for_the_building: string;

    @Field()
    @Column()
    technical_contact_email_for_the_building: string;

    @Field()
    @Column()
    technical_contact_phone_for_the_building: string;

    @Field()
    @Column()
    created_at: Date;

    @Field()
    @Column()
    updated_at: Date;

    @Field(() => Int)
    @Column()
    address_id: number;

    @Field(() => Int)
    @Column()
    customer_id: number;

    @Field(() => [Batteries])
    @OneToMany(() => Batteries, batteries => batteries.building)
    batteries: Batteries[];
}