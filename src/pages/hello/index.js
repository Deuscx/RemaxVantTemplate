import React from 'react';
import { View, Button } from 'remax/wechat';
import { usePageEvent } from 'remax/macro';
import VantIcon from '@vant/weapp/dist/icon';
import VanButton from '@vant/weapp/dist/button';

import Notify from '@vant/weapp/dist/notify/notify';
import VanNotify from '@vant/weapp/dist/notify';
export default () => {
  const handleClick = () => {
    Notify({
      type: 'primary',
      message: 'Hello World',
    });
  };

  /* 1.生命周期 */
  //1.1 app生命周期

  //1.2 页面生命周期
  usePageEvent('onLoad', (options) => {
    console.log('获取options', options);
  });

  return (
    <View>
      <VanNotify id="van-notify" />
      <VantIcon class-prefix="van-icon" name="replay" size="20px" color="white" />
      <Button onClick={handleClick} size="mini">
        点击原生组件
      </Button>
      <VanButton bindclick={handleClick} type="info" size="">
        点击第三方组件
      </VanButton>
    </View>
  );
};
