import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component, Fragment } from 'react';
import { List, Icon, Typography } from 'antd';
import Link from 'umi/link';
import styles from './SecurityView.less';

const { Text } = Typography;

const passwordStrength = {
  strong: (
    <span className="strong">
      <FormattedMessage id="account-settings.security.strong" defaultMessage="Strong" />
    </span>
  ),
  medium: (
    <span className="medium">
      <FormattedMessage id="account-settings.security.medium" defaultMessage="Medium" />
    </span>
  ),
  weak: (
    <span className="weak">
      <FormattedMessage id="account-settings.security.weak" defaultMessage="Weak" />
      Weak
    </span>
  ),
};

const securityInfo = {
  secure: <Icon type="check-circle" theme="filled" className={styles.success} />,
  warning: <Icon type="warning" theme="filled" className={styles.warning} />,
}

class SecurityView extends Component {
  getSettingList = data => [
    {
      title: formatMessage({ id: 'account-settings.security.password' }),
      description: data.pwdStrength ? (
        <Fragment>
          {formatMessage({ id: 'account-settings.security.password-description' })}
          <Text strong>{passwordStrength[data.pwdStrength]}</Text>
        </Fragment>
      ) : (
          <Fragment>
            {formatMessage({ id: 'account-settings.security.no-password-description' })}
          </Fragment>
        ),
      actions: [
        <Link to="/account/settings/security" key="Modify">
          <FormattedMessage id="account-settings.security.modify" />
        </Link>,
      ],
      avatar: data.pwdStrength ? securityInfo.secure : securityInfo.warning,
    },
    {
      title: formatMessage({ id: 'account-settings.security.phone' }),
      description: data.phone ? (
        <Fragment>
          {formatMessage({ id: 'account-settings.security.phone-description' })}
          <Text strong>{data.phone}</Text>
        </Fragment>
      ) : (
          <Fragment>
            {formatMessage({ id: 'account-settings.security.no-phone-description' })}
          </Fragment>
        ),
      actions: [
        <Link to="/account/settings/security" key="Modify">
          <FormattedMessage id="account-settings.security.modify" />
        </Link>,
      ],
      avatar: data.phone ? securityInfo.secure : securityInfo.warning,
    },
    {
      title: formatMessage({ id: 'account-settings.security.email' }),
      description: data.email ? (
        <Fragment>
          {formatMessage({ id: 'account-settings.security.email-description' })}
          <Text strong>{data.email}</Text>
        </Fragment>
      ) : (
          <Fragment>
            {formatMessage({ id: 'account-settings.security.no-email-description' })}
          </Fragment>
        ),
      actions: [
        <Link to="/account/settings/security" key="Modify">
          <FormattedMessage id="account-settings.security.modify" />
        </Link>,
      ],
      avatar: data.email ? securityInfo.secure : securityInfo.warning,
    },
    {
      title: formatMessage({ id: 'account-settings.security.question' }),
      description: data.hasSecurityQue ? (
        <Fragment>
          {formatMessage({ id: 'account-settings.security.question-description' })}
        </Fragment>
      ) : (
          <Fragment>
            {formatMessage({ id: 'account-settings.security.no-question-description' })}
          </Fragment>
        ),
      actions: [
        <Link to="/account/settings/security" key="Modify">
          <FormattedMessage id="account-settings.security.modify" />
        </Link>,
      ],
      avatar: data.hasSecurityQue ? securityInfo.secure : securityInfo.warning,
    },
  ];

  render() {
    const data = {
      pwdStrength: 'strong',
      phone: '176****0649',
      email: '10****51@qq.com',
      hasSecurityQue: true,
    };
    // const data = {
    //   pwdStrength: null,
    //   phone: null,
    //   email: null,
    //   hasSecurityQue: false,
    // };

    return (
      <Fragment>
        <List itemLayout="horizontal"
          dataSource={this.getSettingList(data)}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title}
                description={item.description}
                avatar={item.avatar}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default SecurityView;
