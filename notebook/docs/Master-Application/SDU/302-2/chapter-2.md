# 矩阵

[[TOC]]

## 常用结论

### 行列式

指数形式求行列式：

- $|A^T| = |A|$
- $|A^m|=|A|^m$
- $|A^{-1}| = \frac{1}{|A|}$，要求 A 可逆

系数形式求行列式：

- $|kA| = k^n|A|$
- $|AB| = |A|\cdot|B|$，为拉普拉斯法则

两边同时取行列式：$AB = C \Rightarrow |A|\cdot|B| = |C|$

可将某行(列)公因子提到行列式外


交换律：

- $AB \neq BA$ (无矩阵乘法分配律)
- $A+B = B+A$
- $kA = Ak$

结合律：

- $(A+B)+C = A+(B+C)$
- $(AB)C = A(BC)$

分配律：

- $(k+l)A = kA + lA$
- $k(A+B) = kA + kB$
- $A(B+C) = AB + BC$

### 矩阵的逆

矩阵可逆的定义：存在 $B$，使 $AB = E$，则 $A$ 可逆

矩阵可逆的充分必要条件：$|A| \neq 0$

降幂性质：$(A^{-1})^{-1} = A$

换幂性质：

- $(A^{-1})^T = (A^T)^{-1}$
- $(A^n)^{-1} = (A^{-1})^n$

逆运算去括号：

- $(kA)^{-1} = \frac{1}{k}A^{-1}$
- $(AB)^{-1} = B^{-1}A^{-1}$

复合矩阵可逆的性质：

- $\begin{pmatrix}
  A & O\\
  O & B
  \end{pmatrix}^{-1} = \begin{pmatrix}
  A^{-1} & O\\
  O & B^{-1}
  \end{pmatrix}$
- $\begin{pmatrix}
  O & A\\
  B & O
  \end{pmatrix}^{-1} = \begin{pmatrix}
  O & B^{-1}\\
  A^{-1} & O
  \end{pmatrix}$
- $\begin{pmatrix}
  A_1 &  & \\
    & ... & \\
    &  & A_s
  \end{pmatrix}^{-1} = \begin{pmatrix}
  A_1^{-1} &  & \\
    & ... & \\
    &  & A_s^{-1}
  \end{pmatrix}$

计算 $A^{-1}B$，不用先求出 $A^{-1}$，使用 $(A \ \vdots \ B)$ $\Rightarrow$ $(E \ \vdots \ A^{-1}B)$ 更简单

### 矩阵的幂

- 若 $A = \begin{pmatrix}
    A_1 &  & \\
    & ... & \\
    &  & A_s
    \end{pmatrix}$，则 $A^n = \begin{pmatrix}
    A_1^n &  & \\
    & ... & \\
    &  & A_s^n
    \end{pmatrix}$
- 见[矩阵的迹](#迹)

### 矩阵的迹

$A = \alpha\beta^T$，则 $\alpha^T\beta$ = $\beta^T\alpha$ = $tr(A)$ = $tr(\alpha\beta^T)$ = $tr(\beta\alpha^T)$

根据 $A = \alpha\beta^T$ 求 $A^n$ 常递推地使用矩阵的迹，如下：$A^2$ = $\alpha\beta^T\cdot\alpha\beta^T$ = $\alpha(\beta^T\alpha)\beta^T$ = $tr(A)\alpha\beta^T$ =  $tr(A)A$，则 $A^n$ = $tr(A)A^{n-1}$ = $(tr(A))^{n-1}A$


### 矩阵的秩

- $|A|\neq 0$，$r(A) = n$，称为满秩矩阵
- $|A| = 0$，$r(A) < n$，称为降秩矩阵，不可逆
- $r(A) = 0 \Leftrightarrow A = O$
- $r(A)\geq 1 \Leftrightarrow A \neq O$
- $r(A) \geq 2 \Leftrightarrow$ $A$ 至少两行不成比例

---

$AA^T$ 或 $A^TA$ 的秩的性质：$r(A) = r(A^T) = r(A^TA) = r(AA^T)$

---

$A+B$、$A-B$ 或 $r(A)+r(B)$ 相关的秩的性质：$r(A \pm B) \leq r(A) + r(B)$，其中 $A$ 和 $B$ 为同型矩阵

---

$r(A)$、$r(B)$ 或 $r(AB)$ 相关的秩的性质：

- $r(AB)\leq min\{r(A),r(B)\}$，其中 $A$ 为 $m\times n$ 型矩阵，$B$ 为 $n\times s$ 型矩阵
- $r(AB)\leq r(A)$，$r(AB)\leq\\ r(B)$，其中 $A$ 为 $m\times n$ 型矩阵，$B$ 为 $n\times s$ 型矩阵

---

$AB = O$ 相关的秩的性质：$AB = O$，$r(A)+r(B)\leq n$，其中 $A$ 为 $m\times n$ 型矩阵，$B$ 为 $n\times s$ 型矩阵

---

$r(A) = r(PA) = r(AQ) = r(PAQ)$，其中 $P$、$Q$ 分别为 $m$ 及 $n$ 阶可逆矩阵

---

$A^*$ 或 $A_{ij}$ 相关的秩的性质：

$r(A^*) = \left\{\begin{matrix}
 n & r(A) = n & \\
 1 & r(A) = n-1 & (n \geq 2) \\
 0 & r(A) < n-1 &
\end{matrix}\right.$

---

$r(A) = 1$ 的充分必要条件是，存在非零向量 $\alpha, \beta$，使 $A = \alpha\beta^T$

### 矩阵的转置

降幂性质：$(A^T)^T = A$

换幂性质：

- $(A^{-1})^T = (A^T)^{-1}$
- $(A^T)^m = (A^m)^T$

转置运算去括号：

- $(kA)^T = kA^T$
- $(A \pm B)^T = A^T \pm B^T$
- $(AB)^T = B^TA^T$

正交矩阵：$A^TA = E$

正交矩阵 $|A|^2 = E$，证明如下：$|A^T| = |A|$ 且 $|AB| = |A|\cdot|B|$



### 矩阵的等价

$A$ 经过初等变换变为 $B$，则其等价，等价充分必要条件为 $r(A) = r(B)$

### 特殊矩阵

### 伴随矩阵

换幂性质：$(A^T)^* = (A^*)^T$

伴随运算去括号：

- $(kA)^* = k^{n-1}A^*$
- $(AB)^* = B^*A^*$

求伴随矩阵(及其行列式)的常用方法：

- $A^* = |A|A^{-1}$
- $A^{-1} = \frac{1}{|A|}A^*$
- $|A^*| = |A|^{n-1}$


代数余子式：$A_{ij} = (-1)^{i+j}M_{ij}$，其为一个数(值)，而不是矩阵

行列式等于某行或某列元素与其对应代数余子式之积的和


### 初等矩阵

$E_{i,j}$ 的性质：

  - $E_{i,j}A$ 对调 $A$ 的第 $i,j$ 行
  - $AE_{i,j}$ 对调 $A$ 的第 $i,j$ 列
  - $|E_{i,j}| = -1 \neq 0$，$E_{i,j}$ 可逆
  - $(E_{i,j})^{-1} = E_{i,j}$
  - $(E_{i,j})^2 = E$

$E_i(c)$ 的性质：

  - $E_{i}(c)A$ 把 $A$ 的第 $i$ 行乘以非零 $c$
  - $E_{i}(c)A$ 把 $A$ 的第 $i$ 列乘以非零 $c$
  - $|E_{i}(c) = c \neq 0|$，$E_{i}(c)$ 可逆
  - $[E_i(c)]^{-1} = E_i(\frac{1}{c})$

$E_{ij}(k)$ 的性质：

  - $E_{ij}(k)A$ 把 $A$ 的 $j$ 行的 $k$ 倍加到第 $i$ 行
  - $AE_{ij}(k)$ 把 $A$ 的 $j$ 列的 $k$ 倍加到第 $i$ 列
  - $|E_{ij}(k)| = 1 \neq 0$，$E_{ij}(k)$ 可逆
  - $[E_{ij}(k)]^{-1} = E_{ij}(-k)$

方程同解变形 $\Leftrightarrow$ 矩阵初等变换 $\Leftrightarrow$ 矩阵 $A$ 左乘初等矩阵


## 题型总结

### 矩阵的运算与矩阵的行列式计算

### 矩阵的幂矩阵

### 初等变换与初等矩阵

### 逆矩阵的计算与证明

### 伴随矩阵与矩阵的逆矩阵关系问题

### 矩阵方程

### 矩阵的秩