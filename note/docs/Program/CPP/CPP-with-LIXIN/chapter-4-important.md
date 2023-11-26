# 循环

## 行列控制

要求输出如下形式的内容：

```
*   *
 * * 
  *  
 * *
*   *
```

如果每一行用 `for` 进行控制，依次输出 `' '` `'*'` `' '`，虽然能做但效率很低。如果进行行列控制，就会十分简单，实现代码如下：

```cpp
#include<iostream>
using namespace std;
 
int main (  )
{
    for(int i=0;i<5;i++){
        for(int j=0;j<5;j++)
            cout.put(j==i||j+i==5-1?'*':' '); // [!code focus]
        cout<<endl;
    }
}
```

## 内循环变量初始化

在使用 `while` 时，要注意内循环变量的初始化。

## 跳出和跳过

`break` 和 `continue` 要与 `if` 相结合，`break` 常用来跳出死循环。

常见的三种输入方式：

- 输入n，之后依次读入n个数；
- 使用 `while(1){if{break;}}` 的结构进行跳出；
- 输入输出流本身的控制；

### 跳出多重循环

**方法1**：函数情况下，子循环直接 `return` 即可；

**方法2**：使用两层 `break`；

```cpp{3,4,6,7}
while(XX){
    while(XX){
        if(XX) // (1)
            break;
    }
    if() // 和(1)相同
        break;
}
```

**方法3**：设置标志位 `flag`

```cpp{1,2}
while(XX&&flag){
    while(XX&&flag){
        flag = true;
    }
}
```

## 递归模板

```cpp
XX func(XX){
    if(XX){
        return XX;
    }
    func(XX);
}
```

## 循环获取位数

分为两种情况，一种是逆序获取，一种是正序获取。

**逆序获取**代码如下，代码执行后，若原始数值为 12345，则获取的数值为 54321。

```cpp
int res = 0;
for(int i = 0; i < length(n); i ++){
    res *= 10;
    res += n % 10;
    n /= 10;
}
```

也可写为如下形式，下面这种情况可以扩展到正序情况，而上面的不可以。

```cpp
k = 1;
while(XX){
    a = n % 10;
    res += a * k;
    k *= 10;
    n /= 10;
}
```

**正序获取**代码如下，若原始数值为 12345，则截获后数值为 54321。

```cpp
k = 1eX; // 获取 12345 的位数，这里为 10000
while(XX){
    a = n % 10;
    res += a * k;
    k /= 10;
    n /= 10;
}
```

## 代码优化

### 提前终止

如果可以提前终止，就要提前终止，减少循环次数。

### 返回与布尔类型

`return` 返回表达式 `true` 或 `false`，不需要判断。
    
```cpp
if(x>1) // [!code --]
    return true; // [!code --]
else // [!code --]
    return false; // [!code --]

return x>1 // [!code ++]
```

### 循环与余数

求被整除的情况时，改变递增变量更高效。
    
```cpp
for(int i = 0; i < n; i += 3)
```

### 让代码有意义

尽量写 `true` 和 `false`，而不是0和1，让代码有意义