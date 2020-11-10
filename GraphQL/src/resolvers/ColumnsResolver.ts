import { Arg, Mutation, Resolver, Int, Query, InputType, Field } from "type-graphql";
import { Columns } from "../entity/Columns";

@InputType()
class ColumnInput {
    @Field()
    id: number;

    @Field()
    type_of_building: string;

    @Field()
    number_of_floors_served: number;
    
    @Field()
    status: string;

    @Field()
    information: string;

    @Field()
    notes: string;

    @Field()
    created_at: Date;

    @Field()
    updated_at: Date;

    @Field()
    battery_id: string;

    @Field()
    customer_id: string;
}
    
@InputType()
class ColumnUpdateInput {
    @Field(() => String, { nullable: true })
    type_of_building?: string;

    @Field(() => Int, { nullable: true })
    number_of_floors_served?: number;
    
    @Field(() => String, { nullable: true })
    status?: string;

    @Field(() => String, { nullable: true })
    information?: string;

    @Field(() => String, { nullable: true })
    notes?: string;

    @Field(() => String, { nullable: true })
    created_a?: Date;

    @Field(() => String, { nullable: true })
    updated_at?: Date;

    @Field(() => Int, { nullable: true })
    battery_id?: string;

    @Field(() => Int, { nullable: true })
    customer_id?: string;
}

@Resolver()
export class ColumnsResolver {
    @Mutation(() => Columns)
    async createColumn(@Arg("options", () => ColumnInput) options: ColumnInput)   {
       const column = await Columns.create(options).save();
        return column;
    }

    @Mutation(() => Boolean)
    async updateColumn(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => ColumnUpdateInput) input: ColumnUpdateInput
    )   {
        await Columns.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteColumn(@Arg("id", () => Int) id: number) {
        await Columns.delete({ id })
        return true
    }

    @Query(() => [Columns])
    columns() {
        return Columns.find();
    }
}
