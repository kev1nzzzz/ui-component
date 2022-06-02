import React from 'react';

import Tab from './Tab';

export default {
  title: 'Example/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabConfig: ['我妻善逸', '继国缘一', '祢豆子'],
    onTabClick: (val) => {console.log(val, 'val')},
    defaultActiveTabKey: 1
};
