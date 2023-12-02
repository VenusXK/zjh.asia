# 矩阵常用结论

[[TOC]]

## 排列组合

- $A_m^n = m \times (m-1)\times ... \times (m-n+1)$
- $C_m^n = \frac{A_m^n}{A_n^n}$

## 行列式

- 指数形式；
  - $|A^T| = |A|$；
  - $|A^m|=|A|^m$；
  - $|A^{-1}| = \frac{1}{|A|}$，要求 A 可逆；
- 系数形式；
  - $|kA| = k^n|A|$；
  - $|AB| = |A|\cdot|B|$，为拉普拉斯法则；
- 两边同时取行列式；
  - $AB = C \Rightarrow |A|\cdot|B| = |C|$
- 可将某行(列)公因子提到行列式外；

## 矩阵运算

- 交换律：无矩阵乘法分配律；
  - $AB \neq BA$；
  - $A+B = B+A$；
  - $kA = Ak$；
- 结合律：均满足；
  - $(A+B)+C = A+(B+C)$；
  - $(AB)C = A(BC)$；
- 分配律：均满足；
  - $(k+l)A = kA + lA$；
  - $k(A+B) = kA + kB$；
  - $A(B+C) = AB + BC$；

## 矩阵的幂

- 若 $A = \begin{pmatrix}
    A_1 &  & \\
    & ... & \\
    &  & A_s
    \end{pmatrix}$，则 $A^n = \begin{pmatrix}
    A_1^n &  & \\
    & ... & \\
    &  & A_s^n
    \end{pmatrix}$；
- 


## 转置运算

- 降幂；
  - $(A^T)^T = A$；
- 换幂；
  - $(A^{-1})^T = (A^T)^{-1}$；
  - $(A^T)^m = (A^m)^T$；
- 去括号；
  - $(kA)^T = kA^T$；
  - $(A \pm B)^T = A^T \pm B^T$；
  - $(AB)^T = B^TA^T$；

## 矩阵的逆

- 降幂；
  - $(A^{-1})^{-1} = A$；
- 换幂；
  - $(A^{-1})^T = (A^T)^{-1}$；
  - $(A^n)^{-1} = (A^{-1})^n$；
- 去括号;
  - $(kA)^{-1} = \frac{1}{k}A^{-1}$；
  - $(AB)^{-1} = B^{-1}A^{-1}$；
- 复合矩阵
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

## 伴随矩阵

- 换幂；
  - $(A^T)^* = (A^*)^T$；
- 去括号；
  - $(kA)^* = k^{n-1}A^*$；
  - $(AB)^* = B^*A^*$；
- 求伴随矩阵；
  - $A^* = |A|A^{-1}$；
  - $A^{-1} = \frac{1}{|A|}A^*$；

## 正交矩阵

- $A^TA = E$；
- $|A|^2 = E$，证：$|A^T| = |A|$ 且 $|AB| = |A|\cdot|B|$；

## 代数余子式

- $A_{ij} = (-1)^{i+j}M_{ij}$；
- 行列式等于某行或某列元素与其对应代数余子式之积的和；

## 矩阵的迹

$A = \alpha\beta^T$，则 $\alpha^T\beta$ = $\beta^T\alpha$ = $tr(A)$ = $tr(\alpha\beta^T)$ = $tr(\beta\alpha^T)$

根据 $A = \alpha\beta^T$ 求 $A^n$ 常递推地使用矩阵的迹，如下：$A^2$ = $\alpha\beta^T\cdot\alpha\beta^T$ = $\alpha(\beta^T\alpha)\beta^T$ = $tr(A)\alpha\beta^T$ =  $tr(A)A$，则 $A^n$ = $tr(A)A^{n-1}$ = $(tr(A))^{n-1}A$ 