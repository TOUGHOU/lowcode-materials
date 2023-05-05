// import { layout } from '../_shared/meta';
// import { rules } from '../_shared/meta/rules';
// import { fieldCommonMeta } from '../_shared/meta/field.common';
// import { fieldAdvanceMeta } from '../_shared/meta/field.advance';

const RichEditor = {
  componentName: 'RichEditor',
  title: '富文本',
  category: '表单',
  // group: '高级组件',
  docUrl: '',
  screenshot:
    'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DfTMRYSDngEAAAAAAAAAAAAADrJ8AQ/original',
  devMode: 'proCode',
  props: [
    {
      name: 'placeholder',
      title: { label: 'placeholder' },
      propType: 'bool',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'readOnly',
      title: { label: '只读' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'scroll',
      title: { label: '是否滚动' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'maxLength',
      title: { label: '最大长度' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    // {
    //   name: 'MENU_CONF',
    //   setter: 'ObjectSetter'
    // },
    {
      name: 'MENU_CONF.uploadImage.customUpload',
      title: '自定义上传',
      setter: 'FunctionSetter',
    },
    // MENU_CONF
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(event,${extParams}){\n// 富文本内容变化时的回调\nconsole.log('onChange',event);}",
        },
        {
          name: 'onFocus',
          template:
            "onFocus(event,${extParams}){\n// 富文本聚焦时的回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onBlur',
          template:
            "onBlur(event,${extParams}){\n// 富文本失焦时的回调\nconsole.log('onBlur',event);}",
        },
      ],
      className: true,
    },
    component: {},
  },
};
const snippets = [
  {
    title: '富文本',
    screenshot:
      'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DfTMRYSDngEAAAAAAAAAAAAADrJ8AQ/original',
    schema: {
      componentName: 'RichEditor',
      props: {
        autoFocus: false,
      },
    },
  },
];

export default {
  ...RichEditor,
  snippets,
};
