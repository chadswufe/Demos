import React, { Component } from 'react';
import { Card, Steps } from 'antd';

const { Step } = Steps;

class StepForm extends Component {
  render() {
    let stepComponent;

    return (
      <Card bordered={false}>
        <Steps current={0}>
          <Step title="验证身份" />
          <Step title="修改密码" />
          <Step title="完成" />
        </Steps>
        {stepComponent}
      </Card>
    );
  }
}

export default StepForm;
