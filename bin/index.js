'use strict';var fs=require('fs'),getText=require('text-generator-core'),path=require('path'),templates=require('./templates'),flections=require('./patterns'),links={НАЧ_ВВОД:[require('./links/\u043D\u0430\u0447_\u0432\u0432\u043E\u0434')],ВВОД:[require('./links/\u0432\u0432\u043E\u0434')],СУЩ:[require('./links/\u0441\u0443\u0449')],ГЛАГ:[require('./links/\u0433\u043B\u0430\u0433')],ПРИЛ:[require('./links/\u043F\u0440\u0438\u043B')],ДЕЕПРИЧ:[require('./links/\u0434\u0435\u0435\u043F\u0440\u0438\u0447')],КРАТК_ПРИЛ:[require('./links/\u043A\u0440\u0430\u0442\u043A_\u043F\u0440\u0438\u043B')],УТВЕРЖД:[require('./links/\u0443\u0442\u0432\u0435\u0440\u0436\u0434')]},options={links:links,templates:templates,flections:flections};module.exports=function(a){return null==a&&(a=1),getText(Math.max(a,0),options)};