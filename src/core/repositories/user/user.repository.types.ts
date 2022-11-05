import { User } from '@prisma/client'

type SelectParams<Key extends keyof Pick<User, 'id' | 'email'>> = {
  key: Key;
  value: User[Key]
}

type UpdateParams<Key extends keyof User> = {
  email: User['email']
  key: Key
  value: User[Key]
}

export interface IUserRepository {
  insert(data: Omit<User, 'id' | 'createdAt'>): Promise<void>
  select<Key extends keyof Pick<User, 'id' | 'email'>>(data: SelectParams<Key>): Promise<User | null>
  delete(data: User['email']): Promise<void>
  update<Key extends keyof User>(data: UpdateParams<Key>): Promise<void>
}

export type IUserRepositoryMethodParams<T extends keyof IUserRepository> =
  Parameters<IUserRepository[T]>[0]
