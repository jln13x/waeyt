import { Catch } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';

@Catch()
export class UserInputFilter implements GqlExceptionFilter {
  catch(exception: UserInputError): UserInputError {
    return exception;
  }
}
