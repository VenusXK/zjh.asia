# 程序的基本结构

Java 应用程序也称为工程，提倡一个源文件写一个类。

```
- Java 应用程序
    - 源文件
        - 主类
        - 类
    - 源文件
        - 类
        - 类
```

主类含有 `main()`，应用程序从 `main()` 开始执行。

将 Java 源文件保存在同目录，分别编译通过，生成字节码 `xxx.class` 文件，解释器执行时，字节码加载到内存，Java 虚拟机解释执行。

Java 以类为基本单位，每个源文件都是独立的编译单位，修改某个类，只需编译其所在源文件即可，有利于系统维护，从软件设计角度为可复用代码。

可以事先编译 Java 应用程序需要的其他源文件，并将字节码放于同一目录，也可源文件放同一目录，编译主类源文件时自动编译需要的类。



