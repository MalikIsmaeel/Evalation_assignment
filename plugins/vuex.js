import { createStore } from "vuex";
import axios from 'axios'
const store = createStore({
  namespaced:true,
  state: {
    
      posts: [
      
  ]
 
  },
  getters:{
    getPosts: (state)=>  state.posts,
    // getPosts(state,id){
      
    //    },
    singlePost:(state)=> state.posts,

    
      
      
  },
  actions:{
    async addPosts({commit},postData){
      const post=axios
        .post(`https://mustf.wmc-ksa.com/api/posts`,postData)
    
        .then((response) => {
        
          commit('addPost',response.data);
         
         
      })
        .catch((err) => {
       
        });
         
      
         return post;      
 
  },
    async getPost({commit}){
        const post=axios
        .get(`https://mustf.wmc-ksa.com/api/posts`).then((response) => {
      
          commit('addPost',response.data);
          return post
         
      })
        .catch((err) => {
      //  console.log(err);
        });
       
             
    },
    async onePosts({commit},dataPost){
      const post=axios
      .get(`https://mustf.wmc-ksa.com/api/posts/${dataPost}`).then((response) => {
        console.log(dataPost);
        commit('onePostMu',response.data);
       console.log(response.data)
        return post
       
    })
      .catch((err) => {
     console.log(err);
      });
   
           
  }

  },
  mutations: {
 addPost(state,post){
state.posts.unshift(...post)

 },
 getPost(state,post){
  state.posts =post  
   },
   onePostMu(state,post){
   console.log(post);
    state.posts =post

     },
}

});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
  
});