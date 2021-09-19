# 高级火箭星球自定义文件解析
## 恒星 (star)
* 决定恒星是否是黑洞
  * (bool) blackHole
  * 黑洞可被空间站环绕并用于产生能量
* 恒星的名字
  * (str) name
* 恒星在星系中水平坐标系上的偏移量，星系中心为坐标原点
  * (int?) x，y
* 决定星系中随机生成的气态巨行星数量
  * (int) numGasGiants
* 决定星系中随机生成的行星数量
  * (int) numPlanets
  * 特别的，为 0 时，自行设置为 6
* 嵌套的 star 标签可以生成多星系统
  * 内嵌的 star 作为主星的姊妹星，可以标记 name
  * 姊妹星可以拥有 name 标签和 (int) separator 标签，后者是与主星的距离
* temp 标签
* 内建标签：planet

## 行星与卫星 (planet)
* 行星的名称
  * (str) name
* 维度 ID 
  * (int) DIMID
  * 需避免与原版游戏 (0,-1) 和其他模组的维度 ID 冲突
* 维度映射
  * (int) dimMapping
  * 使用其他维度生成世界，需要相应 ID 真实存在
* 星球在星图中的图标
  * (int) customIcon
  * 允许自定义纹理
* 内嵌标签：planet，下文
  
## 行星与卫星的内嵌标签
* 是否列入已知目标
  * (bool) isknown
  * 如 true，则玩家无需进行观测即可将此星球作为目标
  * 默认为 false，跟随母星设置
* 跃迁材料清单
  * (str) artifact
  * 玩家试图跃迁到该星球时需要消耗的物品
* 是否有光环
  * (bool) hasRings
  * 默认为 false
* 是否为气态巨星
  * 不要与维度映射同时开启
  * (bool) gasGiant
  * 默认为 false
* 气态巨星的大气成分
  * (str) gas
  * 填入流体 ID，可以有多个 gas 标签
* 维度迷雾的颜色
  * 不要与维度映射同时开启
  * (float,float,float) fogColor
  * RGB
* 天空颜色
  * 不要与维度映射同时开启
  * (float,float,float) skyColor
  * RGB
* 世界类型
  * 不要与维度映射同时开启
  * (enum) genType
    * 0:默认 
    * 1:下界(不稳定)
    * 2:小行星(虚空+乱石)
* 大气密度
  * 不要与维度映射同时开启
  * (int[0,1600]) atmosphereDensity
  * 主世界大气密度为 100
  * 大气密度低于 75 的大气无法供应呼吸，且无法抵挡陨石坠击
  * 大气密度高于 200 会导致高压反应，并且加深迷雾
  * 大气密度还会影响星球温度
* 大气是否含氧
  * 不要与维度映射同时开启
  * (bool) hasOxygen
  * 默认为 false
* 日均温度
  * (int?) avgTemperature
  * 
* 重力
  * 不要与维度映射同时开启
  * (int[0,440]) gravitationalMultiplier
  * 主世界重力为 100
  * 高于 110，无法跳上 1 米高度
  * 低于 10，摔落伤害将几乎无法生效
* 与所环绕天体的距离
  * (int[0,MAX_INT]) orbitalDistance
  * 主世界距太阳 100
  * 轨道接近恒星将导致星球温度较高
  * 影响环绕星球在天空上渲染出的大小
* 水平初始方向与系统平面内直线 y=x 的夹角
  * (int[0,360]) orbitalTheta
  * 角度
  * 决定了天体运行轨道的形状和方向
* 水平初始方向与系统z轴的夹角
  * (int[0,360]) orbitalPhi
  * 角度
  * 决定了天体运行轨道的倾斜程度
  * 星球总是顺时针公转，且没有自转，因此该配置将决定星球上的日出方位
  * 主世界为 0
* 矿物生成白名单
  * 不要与维度映射同时开启
  * ?
* 日长
  * 不要与维度映射同时开启
  * (int[1,MAX_INT]) rotationalPeriod
  * 主世界为24000
* 填充地表的方块
  * 不要与维度映射同时开启
  * (str) fillerBlock
  * 填入方块 ID
* 填充海洋的流体
  * 不要与维度映射同时开启
  * (str) oceanBlock
  * 填入流体 ID
  * 默认为 Minecraft:water
* 海平面高度 
  * 不要与维度映射同时开启
  * (int[1,255]) seaLevel
  * 默认为 64
* 可生成的实体
  * 不要与维度映射同时开启
  * (str) spawnable
  * 填入实体 ID
    * 额外配置1:(int) weight 在所有该星球可生成实体中的生成权重
    * 额外配置2:(int) groupMin 一个集群最小生成实体个数
    * 额外配置3:(int) groupMax 一个集群最大生成实体个数
* 可生成的生物群系
  * 不要与维度映射同时开启
  * (str) biomeIds、
  * 填入群系 ID
  * 生物群系的 ID，多个 ID 间使用半角逗号隔开
  * 若为空，则星球根据温度、引力和大气条件自行决定群系列表
* 生成的建筑结构
  * 不要与维度映射同时开启
  * (bool) generateStructures
* 生成地表撞击坑
  * 不要与维度映射同时开启
  * (bool) generateCraters
* 撞击坑生成系数
  * (float) craterFrequencyMultiplier
  * 默认 1.0
* 生成火山
  * 不要与维度映射同时开启
  * (bool) generateVolcanos
* 生成水晶洞穴
  * 不要与维度映射同时开启
  * (bool) generateGeodes
