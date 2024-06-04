const __g = {
  customObject: {
    add: async (o: any) => {},
    focus: (id: string) => {},
    callBPFunction: (
      id: string,
      functionName: string,
      paramType: any,
      paramValue: any
    ) => {},
  },
};

/**
 * 注意：自定义对象操作
 * 1、可以从资源库pak添加各种内置模型
 * 2、也可以从按规范从UE打包的自定义模型添加
 */

//添加前清空所有customObject 防止id重复
//投影坐标
let co_location = [493132.125, 2492028.25, 2.1155664920806885];
let o = {
  id: "o1", //自定义对象唯一id
  pakFilePath: "@path:DTS_Library.pak", //资源库pak文件路径,推荐使用cloud内置的文件资源管理器加载pak并使用@path方式传入参数
  assetPath: "/Game/Common/Asset_Bank/Mesh/Car/BP_Car_JiuHuChe", //资源目录，自定义对象在pak文件资源包里的相对路径
  location: co_location, //位置坐标
  coordinateType: 0, // 坐标系类型
  rotation: [0, 0, 0], // 世界坐标系旋转
  localRotation: [0, 0, 0], //模型自身旋转
  scale: [1, 1, 1], //模型缩放
  smoothMotion: 1, //1: 平滑移动，0: 跳跃移动
  supportAttach: false, //不支持贴画贴合
};

await __g.customObject.add(o);
__g.customObject.focus(o.id);

__g.customObject.callBPFunction(
  "id",
  "fall", // fall  run work jump 行人动作
  BPFuncParamType.String,
  "方位" // 方位 东南西北，用于行人朝向
);
