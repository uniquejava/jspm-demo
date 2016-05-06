
```sh
npm init
npm install jspm --save-dev
jspm init
jspm install jquery
jspm install myname=npm:underscore
jspm bundle app/main --minify --no-mangle --inject --skip-source-maps
```

1) app/main是程序的入口.bundle会从这个文件开始将所有依赖的import全部打包到build.js中

2) 后面的minify和no-mangle好理解和uglifyjs一样.

3) inject是在bundle的过程中自动在config.js中加入如下这段
```
    bundles: {
      "build.js": [
        "app/main.js",
        "app/hello.js",
        "npm:underscore@1.8.3.js",
        "npm:underscore@1.8.3/underscore.js",
        "npm:jquery@2.2.3.js",
        "npm:jquery@2.2.3/dist/jquery.js"
      ]
    },
```

这样可以在index.html少写下面这行
```
<script src="build.js"></script>
```

最终的index.html如下:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="jspm_packages/system.js"></script>
  <script src="config.js"></script>
  <script>
    System.import('app/main');
  </script>
</head>
<body>
</body>
</html>
```
