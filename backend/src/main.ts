import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UserInputError } from 'apollo-server-express';
import { AppModule } from './app.module';
import morgan from 'morgan';

// https://stackoverflow.com/questions/61045881/why-arent-nestjs-graphql-validation-errors-placed-in-the-error-message-field

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const errorMap: Record<string, string>[] = [];

        errors.forEach(({ constraints, property }) => {
          if (constraints) {
            const constraintArray = Object.values(constraints);
            const message =
              constraintArray.length > 0
                ? constraintArray[0]
                : 'Unknown message';

            errorMap.push({
              message,
              property,
            });
          }
        });

        throw new UserInputError('Validation failed', { errors: errorMap });
      },
    }),
  );

  // Dont throw validation exception on server
  // app.useGlobalFilters(new UserInputFilter());

  app.enableCors({});

  app.use(morgan('combined'));

  await app.listen(3001);
}
bootstrap();
