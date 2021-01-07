// import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
    },
    {
      id: 2,
      title: "手绘",
    },
    {
      id: 3,
      title: "简书日报",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "坚持写作一年，自己得到了什么",
      desc:
        "第一次拿稿费，是今年的三月。那个时候，距离我在简书上写文章，至少也有一年了。现在有一年半的时间，大概也有二三十万字的废话。 哪怕是十月初注册...",
      imgUrl:"https://upload-images.jianshu.io/upload_images/17251666-4c1462a94312c6c7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
      },
    {
      id: 2,
      title: "张爱玲经典语录",
      desc:
        "1、世上有用的人往往都是俗人。 2、正经女人虽然痛恨荡妇，其实若有机会 扮个妖妇角色的话，没有一个不跃跃欲试的。 3、完美的女人比完美的男人更完...",
      imgUrl:"https://upload-images.jianshu.io/upload_images/16572117-9777cb5c4c862d71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
      },
  ],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      console.log("No " + action.type + " found.");
      break;
  }
  return state;
};
