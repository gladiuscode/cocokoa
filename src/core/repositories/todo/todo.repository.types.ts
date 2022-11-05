import { Todo, User } from '@prisma/client'

type InsertParams = {
  user: User
  todo: Omit<Todo, 'id' | 'createdAt' | 'userId'>
}
type SelectParams = {
  user: User,
  ids?: Todo['id'][];
}
type DeleteParams = {
  user: User
  ids: Todo['id'][];
}
type UpdateParams<Key extends keyof Todo> = {
  id: Todo['id']
  data: Omit<Todo, 'id' | 'createdAt' | 'userId'>;
}

export interface ITodoRepository {
  insert(data: InsertParams): Promise<void>
  select(data: SelectParams): Promise<Todo[]>
  delete(data: DeleteParams): Promise<void>
  update<Key extends keyof Todo>(data: UpdateParams<Key>): Promise<void>
}

export type ITodoRepositoryMethodParams<T extends keyof ITodoRepository> =
  Parameters<ITodoRepository[T]>[0]
