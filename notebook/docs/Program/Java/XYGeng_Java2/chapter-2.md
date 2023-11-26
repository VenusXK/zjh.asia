# 基本数据类型和数组

## 标识符与关键字

### 标识符

字母、数字、下划线和 `$` 组成，不能是关键字。

### Unicode 字符集

前 128 个是 ASCII 码，最多 65536 个字符，char 范围为 $0\sim65535$。

## 基本数据类型

### 逻辑类型

```java
boolean male = true, one = true, off = false, isTriangle;
```

### 整数类型

包括 int、byte、short 和 long 类型，注意无无符号数，不可用 `unsigned`。

#### 1. int 型

```java
int x = 12;
int y = 0x78ab; // 十六进制
int z = 0b011; // 二进制
```

分配 4 字节，表示范围 $-2^{31}\sim2^{31}-1$。

#### 2. byte 型

```java
byte b1 = 12;
```

分配 1 字节，表示范围 $-2^{7}\sim2^{7}-1$，即 $-128\sim127$。无 byte 型常量表示法，可以使用类型转换得到，如 `(byte)28`。

#### 3. short 型

```java
short a1 = 12;
```

分配 2 字节，表示范围 $-2^{15}\sim2^{15}-1$。无 short 型常量表示法，但可以使用类型转换得到，如 `(short)28`。


#### 4. long 型

```java
long width = 12L, height = 2005L, length;
```

分配 8 字节，表示范围 $-2^{63}\sim2^{63}-1$。常量表示为以L结尾。

### 字符类型

```java
char c = 'h';
```

注意转义字符，用 `\` 表示转义。观察字符位置可用 `(int)'A'`，Unicode位置转字符可用 `(char)50`。

希腊字母中，大写：Α ~ Ω（对应Unicode码为：913 ~ 937，无930） 小写：α ~ ω（对应Unicode码为：945 ~ 969，无962）

### 浮点类型

包括 float 型和 double 型，注意比较 float 型变量和 double 型变量时的精度问题。

#### 1. float 型

常量表示为以 F 或 f 结尾。

```java
float x = 22.76f, tom = 1234.2f, weight = 1e-12F;
```

分配 4 字节，负数表示范围为 $-3.4\times10^{38}\sim-1.4\times10^{-45}$ ，正数表示范围为 $1.4\times10^{-45}\sim3.4\times10^{38}$，保存 8 位有效数字，如 $12345.123456789f$ 表示为 $\underline{12345.123}046875$。

#### 2. double 型

```java
double a = 1.2;
```

分配 8 字节，负数表示范围为 $-1.7\times10^{308}\sim-4.9\times10^{-324}$ ，正数表示范围为 $4.9\times10^{-324}\sim1.7\times10^{308}$，保存 16 位有效数字，如 $12345.123456789f$ 表示为 $\underline{12345.123}046875$。

## 类型转换

```java
byte -> short -> char -> int -> long -> float -> double 
```

级别低到级别高可以自动转换，反之需要强制转换，此时需注意精度缺失。

```java
byte a = (byte)128; // a = -128
byte b = (byte)(-129); // b = 127
```

注意把 double 类型转为 float 需要强制类型转换。

```java
float a = (float)1.2;
```

## 输入与输出

### 基本输入

```java
Scanner reader = new Scanner(System.in);
```

`reader` 对象有如下方法：`nextBoolean()`、`nextByte()`、`nextShort()`、`nextInt()``nextLong()`、`nextFloat()`、`nextDouble()`。

用空白做分割标记，不符合返回类型会触发读取数据异常。

### 基本输出

```java
System.out.println(m + "的个数" + n);
System.out.println(m + 
                    "的个数"+n);
System.out.print([格式控制], [表达式], [表达式]); // 类 c-printf 输出
```

## 数组

### 声明

```java
float boy[];
char cat[][];
int [] a, b; // 都为数组
int a[], b[]; // 都为数组
int [] a, b[]; // 表达a为一维数组，b为二维数组
```

声明时不能指定个数。

### 分配元素

```java
float [] boy = new float[4];
// or
float [] boy;
boy = new float[4];
```

多维数组的声明中，采用数组的数组的方式，构成二维数组的一维数组不必有相同的长度。

```java
int a[][] = new int [3][];
a[0] = new int [6];
a[1] = new int [3];
a[2] = new int [4];
```

可以使用变量声明数组。

```java
int size = 30;
double number [] = new double[size];
```

### length 的使用

```java
float a[] = new float[3][6];
System.out.println(a.length); // 3
```

### 数组的初始化

```java
float boy[] = {1, 2, 3, 4, 5};
// same to
float boy[] = new float[5];
boy[0] = 1; boy[1] = 2; ...
```

二维数组也可初始化。

```java
int a[][] = {{1}, {1, 2}};
```

### 数组的引用

`System.out.println(a);` 输出引用值，会添加前缀信息 `[I@`，并输出该引用信息。同时，可以调用 `System.identityHashCode(a);`，得到数组 a 的引用。

注意，对字符数组 `char a[] = {'你', '好'};`，执行 `System.out.println(a);` 后结果为 `你好`，想输出引用可以做并置运算，用 `System.out.println("" + a);`

```java
int a[] = {1, 2, 3};
int b[] = {3, 4};
a = b; // a 的引用被赋值为 b 的引用，a[0] = 3, a[1] = 4;
```


