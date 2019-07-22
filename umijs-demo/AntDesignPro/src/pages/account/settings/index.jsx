import React, { Component } from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { GridContent } from '@ant-design/pro-layout';
import { Menu } from 'antd';
import { connect } from 'dva';
import BaseView from './base/BaseView';
import BindingView from './binding/BindingView';
import NotificationView from './notification/NotificationView';
import SecurityView from './security/SecurityView';
import styles from './style.less';

const { Item } = Menu;

@connect(({ accountSettings }) => ({
  currentUser: accountSettings.currentUser,
}))
class Settings extends Component {
  main = undefined;

  constructor(props) {
    super(props);
    const menuMap = {
      base: (
        <FormattedMessage id="account-settings.menuMap.basic" />
      ),
      security: (
        <FormattedMessage id="account-settings.menuMap.security" />
      ),
      binding: (
        <FormattedMessage id="account-settings.menuMap.binding" />
      ),
      notification: (
        <FormattedMessage id="account-settings.menuMap.notification" />
      ),
    };
    this.state = {
      mode: 'inline',
      menuMap,
      selectKey: 'base',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'accountSettings/fetchCurrent',
    });
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getMenu = () => {
    const { menuMap } = this.state;
    return Object.keys(menuMap).map(item => <Item key={item}>{menuMap[item]}</Item>);
  };

  getRightTitle = () => {
    const { selectKey, menuMap } = this.state;
    return menuMap[selectKey];
  };

  selectKey = key => {
    this.setState({
      selectKey: key,
    });
  };

  resize = () => {
    if (!this.main) {
      return;
    }
    requestAnimationFrame(() => {
      if (!this.main) {
        return;
      }
      let mode = 'inline';
      const { offsetWidth } = this.main;
      if (offsetWidth > 400 && offsetWidth < 641) {
        mode = 'horizontal';
      }
      if (offsetWidth > 400 && window.innerWidth < 768) {
        mode = 'horizontal';
      }
      this.setState({
        mode,
      });
    });
  };

  renderChildren = () => {
    const { selectKey } = this.state;

    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      default:
        break;
    }
    return null;
  };

  render() {
    const { currentUser } = this.props;

    if (!currentUser.userid) {
      return '';
    }

    const { mode, selectKey } = this.state;
    return (
      <GridContent>
        <div className={styles.main}
          ref={ref => {
            if (ref) {
              this.main = ref;
            }
          }}
        >
          <div className={styles.leftMenu}>
            <Menu mode={mode}
              selectedKeys={[selectKey]}
              onClick={({ key }) => this.selectKey(key)}>
              {this.getMenu()}
            </Menu>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{this.getRightTitle()}</div>
            {this.renderChildren()}
          </div>
        </div>
      </GridContent>
    );
  }
}

export default Settings;
