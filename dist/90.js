(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    qAmz: function(a, e, t) {
      'use strict';
      t.r(e);
      var n = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'titColor', name: '标题颜色', type: 'Color' },
          { key: 'titFontSize', name: '标题大小', type: 'Number' },
          { key: 'desc', name: '描述', type: 'TextArea' },
          { key: 'imgUrl', name: '专栏图片', type: 'Upload', isCrop: !0, cropRate: 1 },
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'padding', name: '内容边距', type: 'Number' },
          { key: 'radius', name: '圆角', type: 'Number' },
          { key: 'linkText', name: '按钮文本', type: 'Text' },
          { key: 'linkBg', name: '按钮背景色', type: 'Color' },
          { key: 'link', name: '按钮跳转链接', type: 'Text' },
          { key: 'content', name: '详细介绍', type: 'RichText' },
        ],
        config: {
          imgUrl: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://cdn.dooring.cn/dr/qtqd_code.png',
            },
          ],
          title: '趣谈前端',
          desc: '一个有点意思的技术社区~',
          titColor: 'rgba(0,0,0,1)',
          titFontSize: 18,
          bgColor: 'rgba(255,255,255,1)',
          padding: 16,
          radius: 6,
          link: '',
          linkText: '订阅',
          linkBg: 'rgba(22,40,212,1)',
          content: '趣谈前端 - 可视化专栏',
        },
      };
      e.default = n;
    },
  },
]);

//# sourceMappingURL=90.js.map
