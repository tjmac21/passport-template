import { createClient } from '@supabase/supabase-js'

class Auth {
  constructor() {
    this.client = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)
  }

  async signUp(email, password) {
    const { user, error } = await this.client.auth.signUp({
      email,
      password,
    })

    if (error) throw error
    return user
  }

  async signIn(email, password) {
    const { user, error } = await this.client.auth.signIn({
      email,
      password,
    })

    if (error) throw error
    return user
  }

  async signOut() {
    const { error } = await this.client.auth.signOut()
    if (error) throw error
  }

  async forgotPassword(email) {
    const { data, error } = await this.client.auth.resetPasswordForEmail(email)
    if (error) throw error
    return data
  }

  async updatePassword(password) {
    const { data, error } = await this.client.auth.updateUser({ password })
    if (error) throw error
    return data
  }

  async getUser() {
    const { data: { user }, error } = await this.client.auth.getUser()
    if (error) throw error
    return user
  }

  async updateUser(data) {
    const { data: updatedData, error } = await this.client.auth.updateUser(data)
    if (error) throw error
    return updatedData
  }

  async deleteUser() {
    const { error } = await this.client.auth.deleteUser()
    if (error) throw error
  }

  async getSession() {
    const { data: { session }, error } = await this.client.auth.getSession()
    if (error) throw error
    return session
  }

  async setSession(session) {
    const { error } = await this.client.auth.setSession(session)
    if (error) throw error
  }

  async getAccessToken() {
    const { data: { access_token }, error } = await this.client.auth.getAccessToken()
    if (error) throw error
    return access_token
  }

  async getRefreshToken() {
    const { data: { refresh_token }, error } = await this.client.auth.getRefreshToken()
    if (error) throw error
    return refresh_token
  } 

  async getUserByCookie() {
    const { data: { user }, error } = await this.client.auth.getUserByCookie()
    if (error) throw error
    return user
  }

}

module.exports = new Auth() 