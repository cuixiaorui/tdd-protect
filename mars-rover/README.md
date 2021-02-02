## 火星漫游者

### 问题描述

假想你在火星探索团队中负责软件开发。现在你要给登陆火星的探索小⻋编写控制程序，根据地球发送的控制指令来控制⽕星车的行动。

火星⻋收到的指令分为四类：

1.探索区域信息：告知火星车，整片区域的长度（X）和宽度（Y）有多⼤大；

2.初始化信息：火星⻋的降落地点（x, y）和朝向（N, S, E, W）信息；

3.移动指令：火星⻋可以前进（F）；

4.转向指令：⽕星⻋可以左转 90 度（L）或右转 90 度（R）。 由于地球和⽕星之间的距离很远，指令必须批量发送，⽕星⻋执行完整批指令之后，再回报⾃自⼰己所在的位置坐标和朝向

### Tasking

- 火星车
  - 初始化
    - input -> position(0,0) direction("N")
    - output -> state{ position(0,0) direction("N")}
  - 移动
    - 向前
    - (0,0)
    - input North  output: (0,1) 
    - input West  output: (-1,0) 
    - input East  output: (1,0) 
    - input South  output: (0,-1) 
  - 转向
    - 输入为当前的小车方向
    - 左转
      - input: North output -> West
      - input: West output -> South
      - input: East output -> North
      - input: South output -> East
    - 右转
      - input: North  output -> East
      - input: East   output -> South
      - input: South  output -> West
      - input: West   output -> North
