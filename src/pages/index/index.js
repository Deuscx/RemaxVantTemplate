import React, { useState } from 'react';
import { View, Text, Image, navigateTo } from 'remax/one';
import { getUserInfo } from 'remax/wechat';
import VanButton from '@vant/weapp/dist/button';

import styles from './index.css';

export default () => {
  const [userInfo, setUserInfo] = useState(false);

  const login = function () {
    getUserInfo({
      success(res) {
        console.log(res);
        setUserInfo(res.userInfo);
      },
    });
  };
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text> 开始
        </View>
        <VanButton
          type="primary"
          bindclick={() =>
            navigateTo({
              url: '/pages/hello/index?foo=bar',
            })
          }
        >
          跳转到hello页面
        </VanButton>
      </View>

      <View>
        {!userInfo ? (
          <VanButton bindclick={login}>点击获取用户信息</VanButton>
        ) : (
          <Image src={userInfo.avatarUrl} className={styles.user} />
        )}
      </View>
    </View>
  );
};
