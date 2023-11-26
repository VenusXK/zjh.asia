# Java入门

## Java的特点 <Badge type="warning" text="待完善" />

## 安装JDK

- **JavaSE**：Java标准版，提供JDK；
- **JAVAEE**：包含JavaSE和附加类库，支持目录管理、交易管理和企业级消息管理；

### 安装JavaSE

学习Java最好直接用JavaSE提供的JDK，而不是各种集成开发环境。JDK目录如下：

```
- jdk-14.0.1
    - bin // Java运行时环境JRE(包含JVM虚拟机、类库和核心文件)；
    - conf // 配置JDK访问权限、安全算法和限制JDK加密强度的JavaCryptography；
    - include // 支持使用Java Native Interface和JVM调试接口进行本机代码编程的C语言头文件；
    - jmods // 创建自定义运行时编译模块；
    - legal // 每个模块的许可和版权文件；
    - lib // JDK需要的其他库和支持文件；
```

### 系统环境变量

- **设置JAVA_HOME**：设置系统变量，变量名: `JAVA_HOME`，变量值: `[dir]`；
- **设置Path**：添加新值 `%JAVA_HOME%\bin`，调制该值到最顶上；

## Java程序的开发

### 编写源文件

```java
// Hello.java

public class Hello{
    public static void main(String args[]){
        System.out.println("大家好");
        Student stu = new Student();
        stu.speak("We are students");
    }
}

class Student{
    public void speak(String s){
        System.out.println(s);
    }
}
```

::: warning Allmans代码风格

```java
class Allmans
{
    ...
}
```

**Kernighan风格**

```java
class Kernighan{
    ...
}
```
:::

### 保存源文件


::: warning ANSI编码
在不同系统下表示的语言集合不同。*在简中Windows中，表示GBK编码*，收录了21003个汉字，完全兼容GB2312，支持国际标准ISO/IEC10646-1、国家标准GB13000-1中的全部中日韩汉字，并包含了BIG5中的汉字，汉字占2字节，ASCII码字符占1字节；

**UTF-8编码**

支持Unicode字符集，一个汉字用3个字符，兼容GBK、BIG5、EUC-JP等多种编码，符号范围大于ANSI编码，*如果需要GBK以外的字符，可以使用Unicode编码*，每个字符占用两个字节；
:::

### 编译

JDK提供javac.exe可以执行编译，编译代码如下：

```shell
javac Hello.java # 默认encoding是GBK
javac -encoding utf-8 Hello.java # 如果使用utf-8，必须显式使用'-encoding'参数
javac -encoding unicode Hello.java # 如果使用unicode，必须显式使用'-encoding'参数
```

### 运行

JDK提供java.exe解释器可以执行运行，必须执行主类，Java虚拟机将需要的字节码文件加载到内存，为主类中的 `mian()` 方法分配了入口地址，解释器调用 `main()` 开始运行程序，运行代码如下：

```shell
java Hello
```

### 反编译

JDK提供javap.exe反编译器可以执行反编译，因为字节码不是最终机器码，需要解释器解释成机器码，所以可以反编译，反编译代码如下：

```shell
javap Hello
```
