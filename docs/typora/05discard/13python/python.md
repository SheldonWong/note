---
title: 01 标准数据类型
---

```python
n1 = 22
n2 = 88
num = n1 + n2
```

Python3 中有六个标准的数据类型：

- Number（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

## 1.1 列表 字符串

```python
#coding: utf-8
#第一句的作用是告知使用的编码十四utf-8

name = '张三'
numList = [1,2,3,4,5,6]
print(numList[0])
print(numList[1:3])	#2 3

s = '我们都很喜欢Python' #P6 n11
print(s[6:12]) #Python
print(s[6:])	#Python
print(s[-6:])	#Python
#从后往前数是负数，从-1开始
```

## 1.2 元组 集合

​	元组被赋值后，值不可再改变

```python
t = (1,2,3,4,5,6)
print(t[1:3])

t1 = (1)
print(type(t1)) #int
t2 = (1,)
print(type(t2))#tuple

myset = {1,3,7,4}
print(type(myset))#set
print(len(myset))#4
```

## 1.3 字典

```python
mydict = {'a': 80, 'b': 90}
mydict['a'] = 85
print(mydict['a'])#85
```

## 1.4 次方

```python
print(2**31) #2的31次方
```

