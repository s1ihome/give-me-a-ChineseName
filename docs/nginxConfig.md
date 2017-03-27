


由于是spa页面，

所有服务端路由（ngnx）应将首页指向根目录的view／index.html

页面的静态资源都有assets/* 提供

spa页面更新的时候index.html会有缓存，

所以服务端应在每次更新的时候将/view/index.html的缓存清楚
