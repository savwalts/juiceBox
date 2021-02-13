

async function createUser({ username, password }) {
    try {
      const result = await client.query(`
        INSERT INTO users(username, password) 
        VALUES($1, $2) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `, [username, password]);
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    createUser()
  }
  