# 🚀 GitHub Pages 傻瓜式教程

将你的男性健康危机网站免费部署到互联网上！

---

## 📋 准备工作

确保你有：
- 一个邮箱（任何邮箱都可以）
- 你的网站文件（index.html, style.css, script.js）

---

## 第1步：创建 GitHub 账户（2分钟）

1. 打开浏览器，访问 https://github.com
2. 点击绿色的 **"Sign up"** 按钮
3. 按提示填写：
   - 邮箱地址
   - 设置密码
   - 用户名（只能包含字母、数字、连字符）
   
   💡 **建议用户名**：mens-health-crisis 或 mh-crisis-site

4. 点击 **"Create account"**
5. 去邮箱查看验证码，输入验证
6. 完成注册，选择免费计划

---

## 第2步：创建仓库（1分钟）

1. 登录 GitHub 后，点击左上角 **"+"** 号
2. 选择 **"New repository"**（新建仓库）

   ![新建仓库](https://i.imgur.com/your-image.png)

3. 填写仓库信息：
   - **Repository name**（仓库名）：`mens-health-crisis`
   - **Description**（描述）：可选，比如 "Men's Health Crisis Awareness Website"
   - ✅ 勾选 **"Public"**（公开）
   - ✅ 勾选 **"Add a README file"**（添加README）

4. 点击绿色的 **"Create repository"** 按钮

---

## 第3步：上传网站文件（3分钟）

### 方法A：直接拖拽（最简单）

1. 进入刚创建的仓库页面
2. 点击 **"Add file"** → **"Upload files"**

   ![上传文件](https://i.imgur.com/your-image2.png)

3. 将你的三个文件拖到页面中间的框里：
   - `index.html`
   - `style.css`
   - `script.js`

4. 在下方填写提交信息：
   - 第一行写：`Add website files`
   - 第二行可以留空

5. 点击 **"Commit changes"**（提交更改）

### 方法B：批量上传（如果有多个文件）

1. 在仓库页面点击 **"<> Code"** 标签
2. 点击 **"Add file"** → **"Upload files"**
3. 点击 **"choose your files"** 或拖拽
4. 选择你的网站文件夹里的所有文件
5. 点击提交

---

## 第4步：启用 GitHub Pages（2分钟）

这是最关键的一步！

1. 在仓库页面，点击顶部的 **"Settings"**（设置）标签

   ![设置](https://i.imgur.com/your-image3.png)

2. 左侧菜单找到并点击 **"Pages"**

3. 在 **"Build and deployment"** 部分：
   - **Source** 选择：**"Deploy from a branch"**
   - **Branch** 选择：**"main"** / **"root"**
   - 点击 **"Save"** 保存

   ![Pages设置](https://i.imgur.com/your-image4.png)

4. 等待 1-2 分钟...

5. 刷新页面，你会看到绿色提示：
   > "Your site is live at https://yourusername.github.io/mens-health-crisis/"

---

## 第5步：访问你的网站

点击上面显示的链接，比如：
```
https://johnsmith.github.io/mens-health-crisis/
```

🎉 **恭喜！你的网站已经上线了！**

---

## 🔧 自定义域名（可选，高级）

如果你想用更专业的域名（如 menshealthcrisis.com）：

1. 购买域名（Namecheap、GoDaddy等）
2. 在仓库里新建文件：`CNAME`
3. 文件内容写你的域名：`www.menshealthcrisis.com`
4. 在域名商处添加 DNS 记录指向 GitHub

详细教程：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 📝 更新网站内容

需要修改网站时：

1. 进入仓库
2. 找到要修改的文件
3. 点击文件名
4. 点击右上角的 **铅笔图标** ✏️ 编辑
5. 修改后拉到最下方
6. 点击 **"Commit changes"**
7. 等待 1-2 分钟自动更新

---

## ❓ 常见问题

### Q1: 网站显示404错误？
- 确保文件名为 `index.html`（小写）
- 检查是否启用了 GitHub Pages（第4步）
- 等待 2-3 分钟，有时需要刷新

### Q2: 样式没有生效？
- 检查 style.css 是否成功上传
- 在浏览器按 F12 → Console 查看错误
- 确保 CSS 文件名正确（大小写敏感）

### Q3: 图片不显示？
- GitHub Pages 区分大小写
- 检查图片路径是否正确
- 建议图片也上传到仓库

### Q4: 如何添加图片？
1. 在仓库点击 "Add file" → "Upload files"
2. 上传图片文件（jpg、png等）
3. 在 HTML 中引用：`src="image.jpg"`

---

## 💡 进阶技巧

### 添加网站统计
在 index.html 的 `</body>` 前添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

### SEO优化
在 `<head>` 中添加：
```html
<meta name="description" content="Men's health crisis awareness">
<meta name="keywords" content="men's health, ED, erectile dysfunction">
```

### 添加联系表单
使用 Formspree（免费）：
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>
```

---

## 📞 需要帮助？

- GitHub 官方文档：https://docs.github.com/en/pages
- 本教程视频版：[YouTube链接]
- 有问题发邮件：support@github.com

---

## ✅ 检查清单

创建网站前，确认以下事项：

- [ ] 已注册 GitHub 账户
- [ ] 已创建仓库（Public）
- [ ] 已上传所有文件（index.html, style.css, script.js）
- [ ] 已启用 GitHub Pages（Source: main branch）
- [ ] 等待2分钟后访问链接
- [ ] 网站正常显示

---

**祝你的网站帮助更多需要帮助的人！** 💪
