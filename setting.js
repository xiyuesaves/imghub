module.exports = {
    picturePath: "./", // 图片保存路径
    userName: "", // 用户名,不知道有什么用
    password: "", // 密码，不知道有什么用

    // 这些数据应该被存进数据库
    floder: [{
        name: "默认",
        setting: {
            smartFolder: true,
            encrypt: false,
        },
        info: {
            total: 2000, // 文件夹下所有文件总数
            tags: 10, // 所有标签
            notTagged: 123, // 所有未被添加标签文件数量
            recycleBin: 100, // 回收站
        },
        fileId
    }], // 文件夹信息

}