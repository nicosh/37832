# Middleware + Incremental Regeneration not working 
## Environment information 
OS : windows 10, next 12.2.0 / 12.2.1-canary.3

## To reproduce : 
- Clone the repo
- npm install
- npm run build
- npm run start 
- visit http://localhost:3000/something the cli will trhow  server error similar to this : 
  ```
  Failed to update prerender cache for /_sites/localhost:3000/asdsa [Error: ENOENT: no such file or directory, mkdir 'C:\Users\User\Desktop\mypath\myfolder\.next\server\pages\_sites\localhost:3000'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'mkdir',
  path: 'C:\\Users\\User\\Desktop\\mypath\\myfolder\\.next\\server\\pages\\_sites\\localhost:3000' } 
  ```



- The same happens when trying to revalidate a page (POST request to `api/revalidate`)