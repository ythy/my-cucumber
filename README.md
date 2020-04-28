# my-cucumber

## 适用TS遇到的问题
```
import { Given, When, Then } from 'cucumber';
^^^^^^
SyntaxError: Cannot use import statement outside a module
```

这里需要修改`tsconfig`中的配置, `"module"` 要设为 `"commonjs",`
