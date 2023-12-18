# 异常和中断

## 一些知识总结

**异常**：包括故障(Fault)、陷阱(Trap)、终止(Abort)三种。

- **Fault**：包括“除以0”和“缺页”等，根据严重程度，可能返回到当前指令重新执行，可能终止
- **Trap**：是预先安排的异常，返回到下一条指令继续执行
- **Abort**：特指硬件故障

**中断**：分为可屏蔽中断和不可屏蔽中断，CPU每执行完一条指令就检查一次是否有中断请求，如果有则立即响应，否则继续执行下一条指令。

对于可屏蔽中断：

- **中断传递**：通过可屏蔽中断请求线INTR发出中断请求。
- **中断控制器**：设置屏蔽字屏蔽中断

对于不可屏蔽中断，通过不可屏蔽中断请求线NMI向CPU发出中断请求，通常是硬件故障。

异常和中断响应如下：

1) 关中断(“中断允许”触发器中设置IF为1表示开中断，IF为0表示关中断)
2) 保存现场，将PC和PSW压栈
3) 跳转到中断处理程序入口地址
   - **软件识别**
   - **硬件识别**：通过中断向量表，中断向量表中存放中断处理程序入口地址
4) 中断处理程序执行(可不被打断)完毕后，恢复现场，将PC和PSW出栈
5) 开中断
6) 返回到被中断的程序继续执行。

广义上所说的中断处理包括响应和处理两个部分。因此处理中断是由硬件和中断处理程序共同完成的。

## 考察缺页是异常还是中断

### 2015 统考真题

> 内部异常（内中断）可分为故障（fault）、陷阱（trap）和终止（abort）三类。下列有关内部异常的叙述中，错误的是（）。
> 
> A. 内部异常的产生与当前执行指令相关
> 
> B. 内部异常的检测由 CPU 内部逻辑实现
> 
> C. 内部异常的响应发生在指令执行过程中
> 
> D. 内部异常处理后返回到发生异常的指令继续执行

D选项是说法过于绝对。如果产生缺页异常，错误可恢复，中断处理完成后仍回到被中断的指令继续执行; 如果除数为0，严重错误不可恢复，则不会返回到被中断的指令继续执行。



### 2016 统考真题

> 异常是指令执行过程中在处理器内部发生的特殊事件，中断是来自处理器外部的请求事件。下列关于中断或异常情况的叙述中，错误的是 。 
> 
> A. “访存时缺页”属于中断 
> 
> B. “整数除以0”属于异常 
> 
> C. “DMA传送结束”属于中断
> 
> D. “存储保护错”属于异常

缺页是异常，因为是指令执行过程中发生的事件，而不是来自处理器外部的请求事件，故A选项错误。

## 考察异常的定义和系统调用

### 2020 统考真题

> 18.下列关于"自陷"（Trap，也称陷阱）的叙述中，错误的是
> 
> A. 自陷是通过陷阱指令预先设定的一类外部中断事件
> 
> B. 自陷可用于实现程序调试时的断点设置和单步跟踪
> 
> C. 自陷发生后 CPU将转去执行操作系统内核相应程序
> 
> D. 自陷处理完成后返回到陷阱指令的下一条指令执行

自陷是通过陷阱指令预先设定的一类内部异常事件，故A选项错误。

自陷是要执行系统调用，系统调用执行完成后返回到指令的下一条指令执行

### 2021 统考真题

> 异常事件在当前指令执行过程中进行检测，中断请求则在当前指令执行后进行检测。下列事件中，相应处理程序执行后，必须回到当前指令重新执行的是（）。
> 
> A. 系统调用
> 
> B. 页缺失
> 
> C. DMA 传送结束
> 
> D. 打印机缺纸

根据题目描述，答案肯定为异常，考虑A和B。系统调用比较特殊，会返回到指令的下一条指令执行，故A选项错误，选B。

