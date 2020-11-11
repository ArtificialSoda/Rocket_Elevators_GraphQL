import { Field, Int, ObjectType } from "type-graphql"
import { BaseEntity, Binary, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
​
​
​
@ObjectType()
@Entity()
export class Lead extends BaseEntity {
    @Field( () => Int)
    @PrimaryGeneratedColumn()
    id: number
​
    @Field()
    @Column()
    contact_full_name: string
​
    @Field()
    @Column()
    company_name: string
​
    @Field()
    @Column()
    email: string
​
    @Field( () => Int )
    @Column()
    phone: number
​
    @Field()
    @Column()
    project_name: string
​
    @Field()
    @Column('varchar', { name: 'project_description', nullable: true, length: 255 })
    project_description: string
​
    @Field()
    @Column()
    department: string
​
    @Field()
    @Column('varchar', { name: 'message', nullable: true, length: 255 })
    message: string
​
    @Field()
    @Column()
    attached_file: Binary
​
    @Field()
    @Column()
    created_at: Date
​
    @Field()
    @Column()
    updated_at: Date
​
    @Field()
    @Column()
    attached_file_path: File
​
    @Field( () => Int )
    @Column('bigint', { name: 'admin_user_id', nullable: true })
    customer_id: number
}