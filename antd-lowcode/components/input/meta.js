export default {
  componentName: 'Input',
  title: '输入框',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认内容' },
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前值' },
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'placeholder',
      title: { label: '占位提示', tip: '占位提示' },
      propType: 'string',
      defaultValue: '请输入',
    },
    // {
    //   name: 'id',
    //   title: { label: '输入框ID', tip: '输入框的ID' },
    //   propType: 'string',
    // },
    {
      name: 'maxLength',
      title: { label: '最大长度', tip: '最大长度' },
      propType: 'number',
    },
    {
      name: 'size',
      title: { label: '控件大小', tip: '控件大小' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'addonAfter',
      title: { label: '后置标签', tip: '后置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'addonBefore',
      title: { label: '前置标签', tip: '前置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'prefix',
      title: { label: '前缀', tip: '前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '后缀', tip: '后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'onChange',
      title: { label: '输入框内容变化时的回调', tip: '输入框内容变化时的回调' },
      propType: 'func',
    },
    {
      name: 'onPressEnter',
      title: { label: '按下回车的回调', tip: '按下回车的回调' },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获取焦点回调', tip: '获取焦点回调' },
      propType: 'func',
    },
    {
      name: 'onKeyDown',
      title: { label: '按键按下时的回调', tip: '按键按下时的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyPress',
      title: { label: '按键按下后的回调', tip: '按键按下之后释放之前的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyUp',
      title: { label: '按键释放回调', tip: '按键释放之后的回调' },
      propType: 'func',
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点回调', tip: '失去焦点回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
        },
        {
          name: 'onPressEnter',
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
        },
        {
          name: 'onFocus',
          template:
            "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onKeyDown',
          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
        },
        {
          name: 'onKeyPress',
          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
        },
        {
          name: 'onKeyUp',
          template:
            "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
        },
        {
          name: 'onBlur',
          template:
            "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
        },
      ],
    },
  },
};
