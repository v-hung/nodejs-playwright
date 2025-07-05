## 🔧 Yêu cầu hệ thống

- Node.js >= 18
- npm (hoặc yarn/pnpm)

---

## 📦 Cài đặt

### 1. Cài đặt thư viện

```bash
npm install
npx playwright install
```

### 2. Cấu hình

Thay đổi các cấu hình trong file env

```
LOGIN_USER=example@admin.com   # Tài khoản đăng nhập
LOGIN_PASS=password            # Mật khẩu đăng nhập
HEADLESS=false                 # false để mở trình duyệt, true để chạy ngầm
```

## ▶️ Chạy

Chạy ngay (đăng nhập & thao tác):

```bash
npm run dev
```

Chạy chế độ hẹn giờ (scheduler):

```bash
npm run start
```

---

## 📸 Ảnh chụp màn hình tự động

- Sau mỗi thao tác, script sẽ lưu ảnh tại thư mục ./storage/:
