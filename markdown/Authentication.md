---
title: "ทำระบบเข้าสู่ระบบด้วย JWT 🚧"
author: "Authentication Projact"
---

![](https://www.bariskisir.com/static/img/posts/jwt-logo.jpg)
### JSON Web Token (JWT) คืออะไร
JWT ย่อมาจาก JSON Web Token เป็นรูปแบบหนึ่งที่ใช้ในการสร้างรหัส token จากข้อมูล JSON Data แล้วทำการเข้ารหัสด้วย Base64Url Encoded ซึ่งมีหน้าตาลักษณะประมาณนี้
```JWT
eyJ0eXAiOiJKV1tiLCJhbGciOiJIUzI1Nis9.eyJpZCI6IjU3NzRhMjM1Zm
I1OTdlMWIxMWY3YzY3ZiIsImVtYWlsIjoiY2hhaUBuZXh0enkuY29tIiwic2
NvcGUiOiJVU0VSIiwiaWF0IjoxNDY3NzgzMTgyLCJleHAiOjE0Njc4Njk40
DJ9.CGXxDtTJD0LBpY7oTbm-ZWB1o6J7isu09ZNk1Q2uTc0
```

JWT ด้านบน จะมีตัวจุด (.) ขั้นไว้จริงๆแล้ว คือ
3 ส่วนประกอบไปด้วย

1. Header : (คือข้อมูล metadata ของ token ซึ่งบอกว่า เป็น type และใช้ algorithm อะไร)
1. Body หรือ Payload หรือ Claims : ข้อมูลทั้งหมดที่เราเอาไว้ sign token
1. Signature : ส่วนสำคัญของข้อมูล เป็นการรวมกันของ Header และ Body ใช้ algorithm และ secret key ในการ sign

สร้างระบบสมาชิกแบบง่าย ๆ🚀
ผมขอบอกแค่ขอมูลบางส่วน เพราะว่าพี่ชายของผมได้สอนไว้หมดแล้วสามารถเข้าไปอ่านได้ที่
[Thanawat Yodnil](https://littleboycoding.medium.com/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%86-14739f583639)
สามารถติดต่อ Thanawat Yodnil ได้ที่ 
* Email littleboycoding@gmail.com
* Facebook https://facebook.com/littleboycoding
* Website https://littleboycoding.github.io
* Dev.to https://dev.to/littleboycoding
