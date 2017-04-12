console.log('正在执行');

self.addEventListener('install', () => console.log('service 被安装'))

self.addEventListener('activate', () => console.log('service 激活'))
self.addEventListener('fetch', (event) => console.log('service 获取数据'))
