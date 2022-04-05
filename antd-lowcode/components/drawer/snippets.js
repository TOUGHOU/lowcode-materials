export default [
  {
    title: '侧边抽屉',
    screenshot: 'drawer-1.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        visible: true,
        placement: 'right',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
  {
    title: '底部抽屉',
    screenshot: 'drawer-2.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        visible: true,
        placement: 'bottom',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
];
