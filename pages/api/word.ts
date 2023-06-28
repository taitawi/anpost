[POST] /api/word
10:42:31:01
Status:
500
Duration:
23.64ms
Memory Used:
69 MB
ID:
9rh7g-1590370951012-8988a8755c18
User Agent:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
2020-05-25T01:42:31.099Z	1288b528-e70b-4d0b-afff-8700ef6f6daa	ERROR	Error: ENOENT: no such file or directory, open '/var/task/assets/dictionary.json'
    at Object.openSync (fs.js:458:3)
    at Object.readFileSync (fs.js:360:35)
    at Module.PicC (/var/task/.next/serverless/pages/api/word.js:349:40)
    at __webpack_require__ (/var/task/.next/serverless/pages/api/word.js:23:31)
    at Server.module.exports.Mr1m.__webpack_exports__.default (/var/task/.next/serverless/pages/api/word.js:209:28) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/var/
