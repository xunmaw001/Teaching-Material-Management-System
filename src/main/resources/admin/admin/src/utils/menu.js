const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"banji"
                    }
                ],
                "menu":"班级管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资料类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiaoxueziliao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"课程类别管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKecheng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"院系管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYuanxi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"教学资料管理",
                        "menuJump":"列表",
                        "tableName":"jiaoxueziliao"
                    }
                ],
                "menu":"教学资料管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"课程管理",
                        "menuJump":"列表",
                        "tableName":"kecheng"
                    }
                ],
                "menu":"课程管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"老师管理",
                        "menuJump":"列表",
                        "tableName":"laoshi"
                    }
                ],
                "menu":"老师管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"banji"
                    }
                ],
                "menu":"班级管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教学资料管理",
                        "menuJump":"列表",
                        "tableName":"jiaoxueziliao"
                    }
                ],
                "menu":"教学资料管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"课程管理",
                        "menuJump":"列表",
                        "tableName":"kecheng"
                    }
                ],
                "menu":"课程管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"老师",
        "tableName":"laoshi"
    }
]
    }
}
export default menu;
