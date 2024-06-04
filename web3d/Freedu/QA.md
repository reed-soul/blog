# QA

1. 'EPSG:4326', 'EPSG:4547' 分别指什么
    EPSG是欧洲石油调查组织(European Petroleum Survey Group)制定的地理坐标系标准。

    EPSG:4326是WGS 84地理坐标系,是一种世界坐标系,用于GPS等全球定位系统。其中4326表示该坐标系的EPSG代码。

    EPSG:4547是CGCS2000地理坐标系,是中国自行研制的坐标系,用于中国大陆区域的测绘和定位。其中4547是该坐标系的EPSG代码。

    所以EPSG:4326和EPSG:4547分别代表世界坐标系和中国大陆坐标系,都是常用的地理坐标系标准。在web3D GIS开发中,需要根据项目的定位区域选择使用合适的坐标系。

2. 实体格式

    ```ts
    {
        "eventtype": "LeftMouseButtonClick",
        "ObjectID": "326015",
        "Type": "TileLayer",
        "PropertyName": "总体配楼",
        "Id": "F50F26E74ECB394E77D700AA085D49FF",
        "BoundsMin": [
            504107.5,
            2497067.75,
            28.31136703491211
        ],
        "BoundsMax": [
            504240.65625,
            2497237.5,
            134.63519287109375
        ],
        "MouseClickPoint": [
            504163.9190625,
            2497160.48,
            95.009462890625
        ]
    }



    {
        "eventtype": "LeftMouseButtonClick",
        "ObjectID": "325962",
        "ModelName": "new_scene_Shape_7053_obj",
        "Type": "TileLayer",
        "PropertyName": "总体配楼",
        "Id": "F50F26E74ECB394E77D700AA085D49FF",
        "BoundsMin": [
            504026.0625,
            2497215.75,
            26.50277328491211
        ],
        "BoundsMax": [
            504069.75,
            2497256.75,
            122.90277099609375
        ],
        "MouseClickPoint": [
            504055.185625,
            2497232.16
        ]
    }

    ```

3. 多边形测量格式

    ```js

    let options = {
            'pointSize': 8.0,
            'textSize': 10.0,
            'textColor': Color.Yellow,
            'pointColor': [0, 0, 1, 0.3],
            'lineColor': Color.Blue,
            'areaColor': [0, 1, 0, 0.3],
            'showCoordinateText': true
        };
        //设置测量模式，详情参考文档内MeasurementMode枚举 支持以下6类： 1坐标测量 2直线测量 3水平测量 4垂直测量 5多边形测量 6地表面积
        __g.tools.setMeasurement(5, options);
        //开始测量 注意：5.3支持右键结束交互
        __g.tools.startMeasurement();

        __g.tools.stopMeasurement();

    // 三角形
    {
    "eventtype": "Measurement",
    "Type": "Area",
    "Area": "1212868.25",
    "Perimeter": "6208.88",
    "Coordinates": [[503622.73546875,2494397.1550000003,78.765078125],[505517.27492187504,2492404.546875,7.85609375],[504574.10296875,2492116.1575,23.588828125]]
    }

    // 四边形 四个坐标点
    {
    "eventtype": "Measurement",
    "Type": "Area",
    "Area": "123563.63",
    "Perimeter": "1535.47",
    "Coordinates": [[506768.6046875,2491985.070625,6.55671875],[507121.90703125,2491962.495,6.045546875],[506904.2703125,2491628.0821875,6.325390625],[506575.56515625,2491578.5375,6.5253125]]
    }
    ```

4. 蓝图函数

    ```js

        /**
         * 蓝图函数说明：UE4引擎自带的一种图形化程序开发界面，旨在降低开发人员门槛。蓝图的本质类似于宏程序脚本，包含有输入输出参数和自定的参数数据类型。
         * 
         * 以下示例代码为调用蓝图函数操作场景内模型
         */

        //是否已经创建示例所需3dt
        if (isRoad3DTCreate) {
            //注意：调用前请先确认被调用的蓝图函数已存在，并和设计蓝图函数的开发人员沟通确认相关参数取值后再调用
            let paramObj = {
                // 创建蓝图函数时在模型包含的Actor上添加的tag，调用前需和设计蓝图函数的开发人员确认
                actorTag: 'function',
                // 执行动画效果的Actor对象的ID，可以根据__g.tileLayer.getObjectIDs(tileLayerIds)方法获取
                objectName: 'BP_Explode_function_2',
                // 待调用的蓝图函数名称，调用前需和设计蓝图函数的开发人员确认此函数已存在
                functionName: 'BPF_Explode_Animation',
                // 传入参数类型  参考BPFuncParamType枚举
                paramType: BPFuncParamType.Vector,
                // 根据传入参数类型设置对应参数值
                paramValue: [1, 0, 0]
            };
            //移动相机镜头到动画场景范围内
            __g.camera.set(492411.977813, 2491993.023516, 102.233096, -33.122059, 118.372009, 1);
            //调用蓝图函数
            __g.misc.callBPFunction(paramObj);

        } else {
            logWithColor('red', '三维图层未创建，请到图层操作导航下创建示例所需的三维图层！');
            $.toast({ content: errorMsg_2, time: 3000 });
        }

    ```

5. 查询蓝图函数

    ```js
    
    //查询蓝图函数包含的参数信息
    let res = await __g.misc.getBPFunction("/JC_CustomAssets/EffectLibrary/Exhibition/3DUI/3D_UI_C_3");

    //函数名称
    let functionName = res.data[0].params[3].functionName;
    //函数参数信息
    let functionParams = res.data[0].params[3].functionParams;
    log("函数名称：" + functionName);
    log("包含参数名称：" + functionParams[0].name);
    log("包含参数类型：" + functionParams[0].type);
    log("包含参数默认值：" + functionParams[0].defaultValue);

    ```
