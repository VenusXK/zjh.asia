# 运算符、表达式和语句

## 运算符与表达式

### 自增、自减运算符

操作元素必须是整数或浮点数。

---

能进行自动的类型转换，如 `x++` 实际为 `x = (byte)(x+1)`。

### 算术混合运算的精度

```java
byte -> short -> char -> int -> long -> float -> double 
```

Java 允许把不超过 byte、short、char 的数据范围的常量算术表达式赋值给 byte、short、char。如 `byte x = (byte)20 + 'a';` 是正确的，而 `byte x = (byte)30 + 'b';` 是错误的，编译错误为 `错误: 不兼容的类型: 从int转换到byte可能会有损失`。

当赋值号右边有变量时，只检查类型不检查数值，如 `byte y = 1;` 是正确，而 `int y = 0;byte y = 97 + z;` 是错误，因为编译器不检查 `97 + z` 的值，只检查其类型，认为是 `int` 精度，因此会提示 `错误: 不兼容的类型: 从int转换到byte可能会有损失`。

### 关系运算符与关系表达式

优先级数值越低，优先级越高

| 运算符 | 优先级 |
|:---:|:---:|
| ! | 2 |
| *、/、% | 3 |
| +、- | 4 |
| >、>=、<、<= | 6 |
| ==、!= | 7 |
| && | 11 |
| \|\| | 12 |
|  = | 14 |

算术运算符高于关系运算符，因此 `10>20-17` 相当于 `10>(20-17)`，其结果为 true。

逻辑运算符 `&&` 和 `||` 为短路运算符，`op1&&op2` 时，当 `op1` 为 false，`op2` 不会进行运算，如 `int x = 1;((y=1)==0)&&((x=6)==6);`，运算后 `x` 为 1。

位运算符为先计算 `op1` 和 `op2` 的值再给出运算结果，如 `int x = 1;((y=1)==0)&&((x=6)==6);`，运算后 `x` 为 6。


位运算符精度取最高的运算数的精度。


::: warning 按位运算的结论
`a^a` = `0`, `a^0` = `a`；

若 `c` = `a^b` 则 `a` = `c^b`；
:::

instance 指实例，`instanceof` 判断左边的类是否为右边的类创建的对象。

## 语句

### `for` 语句与数组

表示为对于循环变量依次取数组中的每一个元素的值。

```java
int a[] = {1, 2, 3};
for(int i: a){
    System.out.println(i);
}
```

注意不可以使用已经声明的对象，如 `int i = 0; for(i : a)...` 是不对的。

### `Scanner` 的使用

有 `hasNextDouble()`、`hasNextFloat()`、`hasNextByte()`、`hasNextInt()` 和 `hasNextLong()`，先用 reader 对象调用 `hasNextXXX()` 方法，等待用户输入数据，再调用 `nextXXX()` 方法获取用户输入数据。

```java
Scanner reader = new Scanner();
while(reader.hasNextDouble()){
    double x = reader.nextDouble()
    ...
}
```



