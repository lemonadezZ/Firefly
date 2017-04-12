console.log('正在执行');

self.addEventListener('install', () => logger.log('service 被安装'))

self.addEventListener('activate', () => logger.log('service 激活'))
self.addEventListener('fetch', (event) => logger.log('service 获取数据'))
