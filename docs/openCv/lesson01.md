# 使用快捷键运行 shift + enter

1. 切换代码模式和 markdown 模式 m 键 markdown 模式 y 键 coding 模式
2. 快捷键 shift + enter 运行代码块跳到下一条代码块
3. 快捷键列表 h 键
4. 在上一条插入 a 键 /下一行插入 b 键
5. x 键删除当前模块 / z 键恢复当前模块
6. control + enter 执行当前模块
7. shift + L 键 展示行号

```python
print("hello jupyter")
```

    hello jupyter

```python
print('hello')
```

    hello

# 安装依赖环境

```shell
pip  install opencv-python -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install opencv-contrib-python -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install matplotlib
pip install numpy
```

```python
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
```

```python
img = cv.imread('道路行车.jpg', cv.IMREAD_COLOR)
```

```python
img.shape
```

    (720, 1280, 3)

```python
plt.imshow(img[:,:,::-1])
```

    <matplotlib.image.AxesImage at 0x111db8d60>

![png](https://raw.githubusercontent.com/captain100/mycdn/main/img/output_7_1.png)

```python
cv.imwrite('test.png', img)
```

    True

```python
cv.line(img, (0,0), (1200, 700),(255, 0,0), 3)
# 展示图片像素大小
plt.figure(dpi=200)
# 展示图片内容
plt.imshow(img[:,:,::-1])
```

    <matplotlib.image.AxesImage at 0x126271340>

![png](https://raw.githubusercontent.com/captain100/mycdn/main/img/output_9_1.png)
  


```python

```
