import { formatMessage } from 'umi-plugin-react/locale';
import { notification } from 'antd';
import {
  queryCity,
  queryCurrent,
  queryProvince,
  updateCurrentUser,
} from '@/services/accountSettings';

const Model = {
  namespace: 'accountSettings',

  state: {
    currentUser: {},
    province: [],
    city: [],
    isLoading: false,
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },

    *fetchProvince(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryProvince);
      yield put({
        type: 'setProvince',
        payload: response,
      });
    },

    *fetchCity({ payload }, { call, put }) {
      const response = yield call(queryCity, payload);
      yield put({
        type: 'setCity',
        payload: response,
      });
    },

    *updateCurrentUser({ payload }, { call, put }) {
      const response = yield call(updateCurrentUser, payload);
      if (response && response.error) {
        notification.error({
          message: formatMessage({ id: 'account-settings.basic.update.fail' }),
          description: response.error,
          placement: 'bottomRight',
        });
      } else {
        yield put({ type: 'fetchCurrent' });
        notification.success({
          message: formatMessage({ id: 'account-settings.basic.update.success' }),
          description: null,
          placement: 'bottomRight',
        });
      }
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {}
      };
    },

    setProvince(state, action) {
      return {
        ...state,
        province: action.payload
      };
    },

    setCity(state, action) {
      return {
        ...state,
        city: action.payload
      };
    },

    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload
      };
    },
  },
};

export default Model;
