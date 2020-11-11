import { Arg, Query, Resolver } from 'type-graphql';
import { Interventions } from '../entity/Interventions';
import { Elevators } from '../entity/Elevators';

@Resolver()
export class Question1 {
  
  @Query(() => Interventions)
  interventionsInfo(@Arg('id') id: Number): Promise<Interventions>  {
    return Interventions.findOneOrFail({ where: { id: id } } );
  }

  @Query(() => Elevators)
  elevatorsInfo(@Arg('id') id: Number): Promise<Elevators>  {
    return Elevators.findOneOrFail({ where: { id: id } } );
  }

  @Query(() => [Interventions])
  interventionsss() {
    return Interventions.find();
  }
}