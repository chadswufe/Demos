import React, { Component, Fragment } from 'react';
import { Button, Form, Input, Select, Upload, message, Spin } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import AvatarView from './AvatarView';
import GeographicView from './GeographicView';
import styles from './BaseView.less';

const FormItem = Form.Item;
const { Option } = Select;

const validatorGeographic = (_, value, callback) => {
  const { province, city } = value;
  if (!province.key) {
    callback(formatMessage({ id: 'account-settings.basic.geographic.province-message' }));
  }
  if (!city.key) {
    callback(formatMessage({ id: 'account-settings.basic.geographic.city-message' }));
  }
  callback();
};

@connect(({ accountSettings, loading }) => ({
  currentUser: accountSettings.currentUser,
  submitting: loading.effects['accountSettings/updateCurrentUser'],
}))
class BaseView extends Component {
  view = undefined;

  componentDidMount() {
    this.setBaseInfo();
  }

  setBaseInfo = () => {
    const { currentUser, form } = this.props;
    if (currentUser) {
      Object.keys(form.getFieldsValue()).forEach(key => {
        const obj = {};
        obj[key] = currentUser[key] || null;
        form.setFieldsValue(obj);
      });
    }
  };

  getAvatarURL() {
    const { currentUser } = this.props;
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  }

  getViewDom = ref => {
    this.view = ref;
  };

  handlerSubmit = event => {
    event.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: "accountSettings/updateCurrentUser",
          payload: values,
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      submitting,
    } = this.props;

    return (
      <Spin size="large" spinning={submitting == true ? true : false}>
        <div className={styles.baseView} ref={this.getViewDom}>
          <div className={styles.left}>
            <Form layout="vertical" hideRequiredMark>
              <FormItem label={formatMessage({ id: 'account-settings.basic.nickname' })}>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'account-settings.basic.nickname-message' }),
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem label={formatMessage({ id: 'account-settings.basic.geographic' })}>
                {getFieldDecorator('geographic', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'account-settings.basic.geographic-message' }),
                    },
                    {
                      validator: validatorGeographic,
                    },
                  ],
                })(<GeographicView />)}
              </FormItem>
              <FormItem label={formatMessage({ id: 'account-settings.basic.address' })}>
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'account-settings.basic.address-message' }),
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <Button type="primary" onClick={this.handlerSubmit}>
                <FormattedMessage id="account-settings.basic.update" />
              </Button>
            </Form>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={this.getAvatarURL()} />
          </div>
        </div>
      </Spin>
    );
  }
}

export default Form.create()(BaseView);
