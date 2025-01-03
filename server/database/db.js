const { createClient } = require('@supabase/supabase-js')

class Database {
  constructor() {
    this.client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
  }

  async query(table, options) {
    const { data, error } = await this.client
      .from(table)
      .select(options.columns)
      .match(options.match)
      .order(options.order)
    
    if (error) throw error
    return data
  }

  async insert(table, data) {
    const { data: insertedData, error } = await this.client
      .from(table)
      .insert(data)

    if (error) throw error
    return insertedData
  }
  
  async update(table, id, data) {
    const { data: updatedData, error } = await this.client
      .from(table)
      .update(data)
      .eq('id', id)

    if (error) throw error
    return updatedData
  }

  async delete(table, id) {
    const { error } = await this.client
      .from(table)
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  
  async bookSession(sessionId, userId, paymentMethodId) {
    await supabase
      .from('user_sessions')
      .insert({ session_id: sessionId, user_id: userId });

    if (paymentMethodId) {
      await supabase
        .from('profiles')
        .update({ payment_method_id: paymentMethodId })
        .eq('id', userId);
    }
  }
}

module.exports = new Database()
