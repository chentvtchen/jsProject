
var obj1 = {
    // header:
    // name: '测试用的数据',
    // 主题 dark和white
    // theme: 'dark',
    // 头部
    header: {
        title: '全国公共资源交易平台',
        component: 'header-1'
    },
    rows: [{
        // span: 24,
        cols: [{
            span: 7,
            // 是否有一个外层
            children: [{
                span: 12,
                title: '月活用户分布',
                bgCom: 'dv-border-box-2',
                // component: 'my-component',
                includeHeader: true,
                component: {
                    name: 've-liquidfill',
                    initOption: {
                        data: {
                            columns: ['city', 'percent'],
                            rows: [{
                                city: '上海',
                                percent: 0.6
                            }]
                        },
                        settings: {
                            seriesMap: {
                                '上海': {
                                    shape: 'rect'
                                }
                            }
                        }
                    }
                    // 表格里面带了默认数据
                }
            }, {
                span: 12,
                title: '收录信息概况',
                bgCom: 'dv-border-box-2',
                component: {
                    'name': 've-line',
                    // api相关的部分
                    // 'api': {
                    //     name: 'HosBigdata',
                    //     path: '',
                    //     type: 'get',
                    //     time: 2,
                    //     // 查询的参数
                    //     query: {

                    //     }
                    // },
                    initOption: {
                        dataMap: {
                            date: '日期',
                            user: '访问用户',
                            orderUser: '下单用户',
                            order: '下单率'
                        }
                    }
                }
            }]
        }, {
            span: 10,
            // outer: true,
            // title: '哈哈哈哈',
            // bgCom: 'dv-border-box-7',
            children: [{
                span: 10,
                // title: '指南针',
                // bgCom: 'dv-border-box-1',
                component: {
                    id: 'chart2',
                    name: 've-gauge'
                    // 表格里面带了默认数据
                }
            }, {
                // 地图
                span: 14,
                // title: '地图',
                // bgCom: 'dv-border-box-1',
                component: {
                    id: 'chart3',
                    name: 've-map',
                    initOption: {
                        settings: {
                            position: 'china',
                            dimension: '位置',
                            metrics: ['人口', '面积'],
                            dataType: {
                                '面积': 'KMB'
                            }
                        },
                        data: {
                            columns: ['位置', '税收', '人口', '面积'],
                            rows: [
                                { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
                                { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
                                { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
                                { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
                            ]
                        }
                    }
                }
            }]
        }, {
            span: 7,
            children: [{
                span: 12,
                title: '服务使用概况',
                bgImg: 'img/jatav/frameTop.png',
                bgCom: 'dv-border-box-7',
                component: {
                    id: 'chart4',
                    name: 've-wordcloud'
                }
            }, {
                span: 12,
                title: '推送服务概况',
                bgImg: 'img/jatav/frameTop.png',
                component: {
                    id: 'chart5',
                    name: 've-pie',
                    initOption: {
                        width: '400px',
                        height: '200px',
                        legendVisible: false,
                        judgeWidth: true,
                        events: {
                            click: function (e) {
                                console.log('点我了')
                            }
                        }
                    }
                }
            }]
        }]
    }]
}