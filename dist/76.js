(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    XMNe: function(r, e, o) {
      'use strict';
      o.r(e);
      var a = {
        editData: [
          { key: 'time', name: '日历时间', type: 'Text', placeholder: '格式如2020-01或2020-11' },
          {
            key: 'range',
            name: '日历选中范围',
            type: 'Text',
            placeholder: '格式如01-12(几号到几号)',
          },
          { key: 'color', name: '文本颜色', type: 'Color' },
          { key: 'selectedColor', name: '选中颜色', type: 'Color' },
          { key: 'round', name: '圆角', type: 'Number' },
        ],
        config: {
          time: '2020-12',
          range: '05-08',
          color: 'rgba(0,0,0,1)',
          selectedColor: 'rgba(22,40,212,1)',
          round: 0,
        },
      };
      e.default = a;
    },
  },
]);

//# sourceMappingURL=76.js.map
