export default [
  {
    title: '两栏',
    screenshot: '1-1.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            span: 12,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 12,
          },
        },
      ],
    },
  },
  {
    title: '三栏',
    screenshot: '1-1-1.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            span: 8,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 8,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 8,
          },
        },
      ],
    },
  },
  {
    title: '四栏',
    screenshot: '1-1-1-1.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
      ],
    },
  },
  {
    title: '1:3',
    screenshot: '1-3.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 18,
          },
        },
      ],
    },
  },
];
