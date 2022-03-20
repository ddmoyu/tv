import { Database, tableSet } from '../init/Database'
type TableSetKey = typeof tableSet[number]
export class DBTools {
  protected db:Database
  constructor () {
    this.db = Database.getDB()
  }

  async get<T> (tableName: TableSetKey, model: T) {
    return await this.db.table(tableName).get(model)
  }

  async all (tableName: TableSetKey) {
    return await this.db.table(tableName).toArray()
  }

  async put<T> (tableName: TableSetKey, model: T) {
    return await this.db.table(tableName).put(model)
  }

  async bulkAdd<T> (tableName: TableSetKey, model: T[]) {
    return await this.db.table(tableName).bulkAdd(model)
  }

  async update<T> (tableName: TableSetKey, id: string, params: Partial<T>) {
    return await this.db.table(tableName).update(id, params)
  }

  async delete (tableName: TableSetKey, id: string) {
    return await this.db.table(tableName).delete(id)
  }
}

export const db = new DBTools()
