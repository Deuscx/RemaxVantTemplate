import * as React from 'react'
import { View, Text, Image, navigateTo } from 'remax/one'

import VanButton from '@vant/weapp/dist/button'

import styles from './index.css'

export default () => {
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
              url: '/pages/hello/index',
            })
          }
        >
          跳转到hello页面
        </VanButton>
      </View>
    </View>
  )
}
