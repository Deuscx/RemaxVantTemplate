import React from "react";
import { View } from "remax/wechat";

import VantIcon from "@vant/weapp/dist/icon";

import VanButton from "@vant/weapp/dist/button";
export default () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <View>
      <VantIcon class-prefix="van-icon" name="replay" size="20px" color="white" />
      <VanButton bindclick={handleClick}>点击</VanButton>
    </View>
  );
};
