# 向量

[[TOC]]

## 常用结论

### 向量的概念与运算

### 向量组的相关性与线性表示

- 一个向量线性相关：为零向量
- 两个向量线性相关：成比例

含零向量必线性相关，向量组的秩与其组成的矩阵的秩相等，向量组组成的矩阵 $|A| = 0 \Rightarrow r(A) < n$，向量组的秩 $< n$，向量组线性相关。

::: warning 为什么"含零向量必线性相关"
$k_1·0+k_2·\alpha_2=0$。这时，只要 $k_2$ 为零，则该式一定成立，$k_1$ 可取任何值。
:::

<!-- ::: warning 矩阵的秩
- $|A|\neq 0$，$r(A) = n$，称为满秩矩阵
- $|A| = 0$，$r(A) < n$，称为降秩矩阵，不可逆
::: -->

---

讨论向量组的**个数**和**维数**，$(a_1, a_2, ... , a_n)$ 中，向量个数为 $n$，维数为 $m$：

- $n$ 越多，表示向量组个数越多，更可能出现一个向量被表示的情况，线性相关(有解)可能性增加
- $m$ 越多，方程组越多，限定越多，向量自由度降低，一个向量难以被其他向量表示，线性无关(无解)可能性越大

### 向量组等价

- $A$ 由 $B$ 线性表示，$B$ 由 $A$ 线性表示，则其等价
- $A$ 经若干初等变换(乘以初等矩阵)变为 $B$，则其等价

等价向量组向量个数可能不同，秩(极大线性无关组所含向量个数)相同，且可互相表示，才能说等价。

### 向量组的秩

向量组的秩：向量组的极大线性无关组所含向量的个数

三秩相等：向量组的秩与其组成的矩阵的秩相等。

向量组互相表示与秩：

- $A$ 可用 $B$ 线性表示(维数相同)，$r(A) \leq r(B)$
- $A$ 可用 $B$ 线性表示，但 $B$ 不可用 $A$ 线性表示，$r(A) < r(B)$

向量组等价 与 秩相等：

- 向量组等价 $\Rightarrow$ 秩相等
- 秩相等 $\nRightarrow$ 向量组等价
- 秩相等价 **且** $向量组A$ 可用 $向量组B$ 线性表示 $\Rightarrow$ $向量组A$ 与 $向量组B$ 等价

向量组 和 向量组矩阵 等价：

- 向量组等价 $\Rightarrow$ 向量组**矩阵**等价
- 向量组**矩阵**等价 $\nRightarrow$ 向量组等价

#### 用秩判断线性相关

设矩阵 $A$ 为 $m\times n$ 阶矩阵：

- 若 $r(A)=n$，则矩阵**列**向量组线性无关，若 $r(A)<n$ ，则矩阵**列**向量组线性相关
- 若 $r(A)=m$，则矩阵**行**向量组线性无关，若 $r(A)<m$，则矩阵**行**向量组线性相关

## 题型总结

### 向量的相关性

#### 根据向量相关求未知数 $\alpha$

> 《汤家凤 线性代数2024辅导讲义》P74 例1

含零向量必线性相关，向量组的秩与其组成的矩阵的秩相等，向量组组成的矩阵 $|A| = 0 \Rightarrow r(A) < n$，向量组的秩 $< n$，向量组线性相关。

#### 考察线性表示与零向量

> 若 $\alpha_1, \alpha_2, ... , \alpha_n$ 线性相关，则任意一个向量都可以被其余向量线性表示。

其中一个向量为零向量时，向量组线性相关$^{*}$，但无法被表示，如 $(1, 2, 3)^T$，$(1, 1, 1)^T$，$(0, 0, 0)^T$ 线性相关，但其无法互相表示。

::: warning * 为什么"含零向量必线性相关"
$k_1·0+k_2·\alpha_2=0$。这时，只要 $k_2$ 为零，则该式一定成立，$k_1$ 可取任何值。
:::

#### 证明线性无相关

> $\alpha_1$，$\alpha_2$，$\alpha_3$ 线性无关，讨论 $\alpha_1-\alpha_2-\alpha_3$，$2\alpha_1+\alpha_2-\alpha_3$，$3\alpha_1+\alpha_2+2\alpha_3$ 的线性无关性

使用克拉默法则，得到 $k_1$，$k_2$，$k_3$ 的一系列齐次方程，求系数行列式 $D$，若 $D \neq 0$，则只有零解，若 $D = 0$，则有非零解。

使用初等变换后向量组秩不变的性质，可逆矩阵可以写成有限个初等矩阵之积，因此只要将目标向量组化为初始向量组乘以可逆矩阵即可得出结论，即 $r = r$，可逆的充分必要条件为 $|A|\neq 0$。

### 向量的线性表示

### 向量组等价与向量组的秩