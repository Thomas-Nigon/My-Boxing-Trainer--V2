const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user, email, hashedPassword) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password, role) VALUES (?,?,?,?)`,
      [user, email, hashedPassword, "user"]
    );
    await this.database.query(
      `INSERT INTO myBoxingTrainer.program (name, length, totalRound, roundLength, restTime, userId, common)
      VALUE (?, ?, ?, ?, ?, ?, ?)`,
      ["CUSTOM 1", "0 ", 0, 0, 0, result.insertId, 0]
    );
    await this.database.query(
      `INSERT INTO myBoxingTrainer.program (name, length, totalRound, roundLength, restTime, userId, common)
      VALUE (?, ?, ?, ?, ?, ?, ?)`,
      ["CUSTOM 2", "0 ", 0, 0, 0, result.insertId, 0]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByEmailWithPassword(mail) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [mail]
    );
    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
