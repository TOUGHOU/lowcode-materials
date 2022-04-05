export default [
  {
    title: '进度条',
    screenshot: 'progress-1.png',
    schema: {
      componentName: 'Progress',
      props: {
        percent: 20,
        status: 'active',
      },
    },
  },
  {
    title: '进度圈',
    screenshot: 'progress-2.png',
    schema: {
      componentName: 'Progress',
      props: {
        percent: 20,
        type: 'circle',
      },
    },
  },
];
