# Scout项目 - 探子来报

[![Coverage Status](https://coveralls.io/repos/github/kissygalleryteam/detector/badge.svg?branch=master)](https://coveralls.io/github/kissygalleryteam/detector?branch=master)

## 技术栈

 - 服务端&前端：Koa + React + Redux + Webpack2 + Babel6
 - 数据库：mysql 5.7+ （支持json格式）
 - ios端：Swift
 - API规范：采用Swagger开发
 - 文档搜索：Elasticsearch
 - 离线缓存，消息推送：Server worker
 - 测试技术栈：
    - [ava](https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md)
    - [ava coverage](https://github.com/avajs/ava-docs/blob/master/zh_CN/docs/recipes/code-coverage.md)

## 功能

**编辑功能**：
 - [ ] 支持markdown格式导入，也可以支持markdown编辑，强大高效的编辑功能
 - [ ] 支持html、markdown格式导出
 - [ ] 支持打tag功能
 - [ ] 普通的增删改查
 - [ ] 用户评论功能
 - [ ] 支持多种排序（按时间、按类别）
 - [ ] 支持词条级别或者专辑级别的分享

**社区化功能**：
 - [ ] 分成普通用户和管理员用户
 - [ ] 关注、订阅功能，消息推送机制
 - [ ] 可fork别人的库条目，并提交pull request
 - [ ] 分成私人社区和公共社区，用户提交公共社区条目需要由管理员审核
 - [ ] 各种排行榜功能
 - [ ] 喜欢这方面知识的人推荐
 - [ ] 很弱的聊天室功能

**数据统计（图表）**：
 - [ ] 页面PV、UV数据、点击量分布
 - [ ] 提供时间维度的数据
 - [ ] 抽离出哪些知识点最受欢迎，自己最喜欢看哪些知识

**数据挖掘**：
 - [ ] 聚合不同tag，形成特定类别的专题
 - [ ] 推荐系统，根据用户标签、爱好进行推荐（）
 - [ ] 提供合理的搜索引擎功能，根据标题、内容搜索
 - [ ] 抽取用户关系二维表，演算出用户亲密度
 - [ ] 包含该词条的其他专辑


## 系统设计要求

系统设计应当模块化，尽可能的弱耦合，支持模块的插拨以及替换；

尽可能轻量化，图片不自己提供存储，让用户使用第三方图片（可选）

使用服务端渲染