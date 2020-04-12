### 动画    
---
42. 缓动效果
---
transform: translate router s
```css
@keyframes bounce {
    60%， 80%, to {
        transform : translateY(400px);
        animation-timing-function: ease-in;
    }
    70% {
        transform: translateY(350px);
    }
    90% {
        transform: translateY(200px);
    }
}

.ball {
    /* 其余缓动曲线 */
    animation: bounce 3s ease-in;
}

```

#### cubic-bezier 贝塞尔曲线
> 调节推荐使用 https://www.cubic-bezier.com
cubic-bezier(x1,y1,x2,y2) , (x1,y1)表示第一个控制点，(x2,y2)表示第二个控制点, 取值范围都在0-1之间

