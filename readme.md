# Test-NeverSitUp

## โครงสร้างของโปรเจกต์

```bash
test-neversitup/
│
├── src/ # ไฟล์ซอร์สโค้ดหลัก
│ ├── count_smiley_face.js
│ ├── find_odd_int.js
│ └── permutations.js
│
├── tests/ # โฟลเดอร์สำหรับไฟล์ทดสอบ
│ ├── count_smiley_face.test.js # ทดสอบสำหรับ count_smiley_face.js
│ ├── find_odd_int.test.js # ทดสอบสำหรับ find_odd_int.js
│ └── permutations.test.js # ทดสอบสำหรับ permutations.js
│
├── .gitignore # ไฟล์ที่ Git จะไม่ติดตาม
├── jest.config.js # ไฟล์ตั้งค่า jest
├── package.json # ข้อมูลของโปรเจกต์และ dependencies
└── README.md # ข้อมูลเกี่ยวกับโปรเจกต์นี้
```

## มาตรฐานและข้อกำหนด

1. **การตั้งชื่อไฟล์**: ใช้การตั้งชื่อที่ชัดเจนและมีความหมาย

2. **การเขียนโค้ด**: ใช้รูปแบบการเขียนโค้ดที่เป็นมาตรฐาน เช่น การจัดรูปแบบด้วย Prettier และ linting ด้วย ESLint

3. **การทดสอบ**: ใส่ไฟล์ทดสอบไว้ในโฟลเดอร์ `__tests__` และใช้ Jest สำหรับการทดสอบ

4. **การจัดการ dependencies**: ใช้ `package.json` สำหรับการจัดการ dependencies และ scripts ต่าง ๆ

## การติดตั้งและการรัน

1. **ติดตั้ง dependencies**:
   ```bash
   npm install
    ```

2. **รันการทดสอบ**:
   ```bash
    npm test
    ```

## ผู้จัดทำ

นายกฤตนันท์ จันทรสาร
