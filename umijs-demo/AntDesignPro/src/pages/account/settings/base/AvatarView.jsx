import { Fragment } from 'react';
import { Button, Upload, notification } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import styles from './AvatarView.less';

const handleChange = () => {
  notification.info({
    message: '暂时不支持更新头像',
    description: '未来提供头像更新功能。如需帮助，请联系工程师！',
    placement: 'bottomRight',
  });
};

const AvatarView = ({ avatar }) => (
  <Fragment>
    <div className={styles.avatar_title}>
      <FormattedMessage id="account-settings.basic.avatar" />
    </div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload fileList={[]}
      onChange={handleChange}
    >
      <div className={styles.button_view}>
        <Button icon="upload">
          <FormattedMessage id="account-settings.basic.change-avatar" />
        </Button>
      </div>
    </Upload>
  </Fragment>
);

export default AvatarView;