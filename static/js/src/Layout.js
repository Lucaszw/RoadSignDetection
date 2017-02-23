var config = function(){
  return {
    content: [{
      type: 'column',
      content: [{
          type: 'row',
          content: [
            {
              type: 'react-component',
              component: 'labels',
              title: 'Labels',
              props: {},
              width: 20
            },
            {
              type: 'react-component',
              component: 'gallery',
              title: 'Gallery',
              props: {}
            }
          ]
        },
        {
          type: 'row',
          content: [
            {
              type: 'react-component',
              title: 'Navigation',
              component: 'navigation',
              props: {}
            }
          ],
          height: 15
      }]
    }]
  }
};

export default config;
