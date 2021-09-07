import { TaskEither } from 'fp-ts/lib/TaskEither';
import { HashedPassword, PlainPassword } from '../value-objects/password';

export abstract class HashingService {
  hashPlainPassword!: (password: PlainPassword) => TaskEither<Error, HashedPassword>;
  assertSameHashes!: ({
    plainPassword,
    hashedPassword,
  }: {
    plainPassword: PlainPassword;
    hashedPassword: HashedPassword;
  }) => TaskEither<Error, Boolean>;
}
