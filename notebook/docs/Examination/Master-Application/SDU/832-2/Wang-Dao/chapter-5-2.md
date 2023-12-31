# 指令执行过程

### 模拟题 10

> 以下有关机器周期的叙述中，错误的是( )? 
> 
> A.不同的指令周期所包含的机器周期数可能不同
> 
> B. 通常把通过一次总线事务访问一次主存的时间定为一个机器周期
> 
> C.一个指令周期通常包括多个机器周期
> 
> D.每个指令周期都包含一个中断响应机器周期

并不是每个指令周期都包含一个中断相应机器周期，要看是否处于“开中断”状态。

### 模拟题 14 

> 以下叙述中，错误的是（） 
> 
> A.取指操作是控制器固有的功能，不需要在操作码控制下完成
> 
> B.所有指令的取指操作都是相同的
> 
> C.在指令长度相同的情况下，所有指令的取指操作都是相同的
> 
> D.中断周期是在指令执行完成后出现的

双字指令、三字指令与单字指令的存取是不同的。

## 区分机器字长和存储字长

### 模拟题 16

> 下列说法中，正确的是( )。
>
> I. 指令字长等于机器字长的前提下，取指周期等于机器周期
> 
> II. 指令字长等于存储字长的前提下，取指周期等于机器周期
> 
> III. 指令字长和机器字长的长度没有任何关系
> 
> IV 为了硬件设计方便，指令字长都和存储字长一样大
>
> A.`II III` B.`II III IV` C.`I III IV` D.`I IV`


关于字长的定义：

- **机器字长**：CPU一次能够处理的数据的位数，通常等于寄存器的位数。例子：windows 64位/32位，这里的64位和32位指的就是该操作系统的机器字长
- **存储字长**：计算机存储器中一个存储单元可以存储的位数。例子：某某计算机按照字节编址，即说明该计算机的存储字长为1B=8位
- **指令字长**：计算机内一条指令的位数。这里通常指的定长指令

关于访存周期和机器周期：

- **访存周期**：两次访问操作（指访问一个存储单元）所需的时间间隔就是访问周期
- **机器周期**：通常用访问周期来确定机器周期，即机器周期可以认为等于访问周期
- **存储字长与访存周期**：1个存储字长的数据需要1个访存周期(机器周期)

关于指令长度：

- **指令长度**：指令字长等于n倍的存储字长，需要n个访存周期(机器周期)

## 考察每个周期在干什么

### 模拟题 21 (上一章)

> 间址周期结束时，CPU内寄存器MDR中的内容为( )。
>
> A.指令 B.操作数地址 C.操作数 D.无法确定

间址是取操作数的有效地址，因此返回的是地址。



### 2011 统考真题


> 假定不采用Cache 和指令预取技术，且机器处于“开中断”状态，则在下列有关指令执行的叙述中，错误的是( )。
> 
> A.每个指令周期中 CPU 都至少访问内存一次
> 
> B.每个指令周期一定大于或等于一个 CPU 时钟周期
> 
> C.空操作指令的指令周期中任何寄存器的内容都不会被改变
> 
> D.当前程序在每条指令执行结束时都可能被外部中断打断

取指阶段必须访存。


