import {
    Module,
    VuexModule,
    getModule,
    Mutation,
    Action,
    MutationAction,
  } from 'vuex-module-decorators';
  import store from '@/store';
  import { LoginInfo} from '../models';
  import * as api from '@/store/api';
  
  @Module({
    dynamic: true,
    namespaced: true,
    name: 'login',
    store,
  })
  class LoginModule extends VuexModule {
  
    status: any = null;
    access_token: any = null;
  
    @MutationAction
    async Login(log: LoginInfo) {
      return await api.login(log).then(data =>{

        if(data.status=="0"){

            return {
                "status": data.status,
                "access_token": "0"
            }
        }
        else{

            localStorage.setItem("access_token",data.token);
            return {
                "status": data.status,
                "access_token": data.token
            }
            
        }
        
      });

    //   return result;
    }
  
  }
  
  export default getModule(LoginModule);
  