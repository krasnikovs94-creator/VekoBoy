const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
 testDir: './tests', timeout: 45000, retries: 1,
 use: { baseURL:'http://127.0.0.1:8765', screenshot:'only-on-failure', trace:'retain-on-failure' },
 projects: [
  {name:'iphone-landscape',use:{viewport:{width:844,height:390},deviceScaleFactor:3,isMobile:true,hasTouch:true}},
  {name:'desktop',use:{viewport:{width:1365,height:768}}}
 ],
 webServer: {command:'python3 -m http.server 8765 --bind 127.0.0.1',url:'http://127.0.0.1:8765',reuseExistingServer:!process.env.CI,timeout:30000},
 reporter:[['list'],['html',{open:'never'}]]
});
