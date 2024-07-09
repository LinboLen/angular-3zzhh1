/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Ddd } from "./Ddd";
import { DddCountArgs } from "./DddCountArgs";
import { DddFindManyArgs } from "./DddFindManyArgs";
import { DddFindUniqueArgs } from "./DddFindUniqueArgs";
import { DeleteDddArgs } from "./DeleteDddArgs";
import { DddService } from "../ddd.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ddd)
export class DddResolverBase {
  constructor(
    protected readonly service: DddService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ddd",
    action: "read",
    possession: "any",
  })
  async _dddsMeta(
    @graphql.Args() args: DddCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ddd])
  @nestAccessControl.UseRoles({
    resource: "Ddd",
    action: "read",
    possession: "any",
  })
  async ddds(@graphql.Args() args: DddFindManyArgs): Promise<Ddd[]> {
    return this.service.ddds(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ddd, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ddd",
    action: "read",
    possession: "own",
  })
  async ddd(@graphql.Args() args: DddFindUniqueArgs): Promise<Ddd | null> {
    const result = await this.service.ddd(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ddd)
  @nestAccessControl.UseRoles({
    resource: "Ddd",
    action: "delete",
    possession: "any",
  })
  async deleteDdd(@graphql.Args() args: DeleteDddArgs): Promise<Ddd | null> {
    try {
      return await this.service.deleteDdd(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
