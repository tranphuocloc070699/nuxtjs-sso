export const state = () => ({
    isAuthenticated:false
  })
  

  export const getters = {

  }
  
  export const mutations = {
    setAuth(state,payload) {
      state.isAuthenticated = payload
    }
  }
  
  export const actions = {
    async nuxtServerInit(){
        
    }
  }