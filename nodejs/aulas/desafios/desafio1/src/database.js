import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url) //essa linha faz com que o db.js sempre seja criado no root

export class Database {
    #database = {}

    //o constructor abaixo garante que o db seja "re-buscado" quando rodamos o servidor novamente.
    constructor() {
        fs.readFile(databasePath, 'utf8')
          .then(data => {
            this.#database = JSON.parse(data)
          })
          .catch(() => {
            this.#persist()
          })
      }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table) {
        const data = this.#database[table] ?? []

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist();

        return data;
    }

    update(table, id, data) {
        const rowIndex = this.#database[table].findIndex(row => row.id === id)
    
        if (rowIndex > -1) {
          this.#database[table][rowIndex] = { id, ...data }
          this.#persist()
        }
      }

    delete(table, id) {
        const rowIndex = this.#database[table].findIndex(row => row.id === id)
    
        if (rowIndex > -1) {
          this.#database[table].splice(rowIndex, 1)
          this.#persist()
        }
      }
}