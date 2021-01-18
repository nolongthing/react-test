import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IUserMessage {
  userName: string,
  userAccount: string,
  userId: number,
  userType: 0 | 1  //0表示客户，1表示客服
}
export interface LoginModelState {
  status: boolean,
  userMessage: IUserMessage | null
}
export interface LoginModelType {
  namespace: 'loginUser';
  state: LoginModelState;
  effects?: {
    query: Effect;
  };
  reducers: {
    // save: Reducer<IndexModelState>;
    // 启用 immer 之后
    login: ImmerReducer<LoginModelState>;
    logout: ImmerReducer<LoginModelState>;
  };
  subscriptions?: { setup: Subscription };
}
const LoginModel: LoginModelType = {
  namespace: 'loginUser',
  state: {
    status: true,
    userMessage: null
  },
  reducers: {
    login(state) {
      return {
        ...state,
        status: true,
      }
    },
    logout(state) {
      return {
        ...state,
        status: false,
        userMessage: null
      }
    }
  }

};

export default LoginModel;