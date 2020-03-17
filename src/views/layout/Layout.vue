<template>
<div>
    <div class="shortcut">
        <div class="w">
            <div class="fl">
                <ul>
                    <li>品优购欢迎您！ </li>
                    <li>
                        <a href="#">请登录</a>
                        <a href="#" class="style-red">免费注册</a>
                    </li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li><a href="#">我的订单</a></li>
                    <li class="spacer"></li>
                    <li>
                        <a href="#">我的品优购</a>
                        <i class="icomoon"></i>
                    </li>
                    <li class="spacer"></li>
                    <li><a href="#">品优购会员</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">企业采购</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">关注品优购</a> <i class="icomoon"></i></li>
                    <li class="spacer"></li>
                    <li><a href="#">客户服务</a> <i class="icomoon"></i></li>
                    <li class="spacer"></li>
                    <li><a href="#">网站导航</a> <i class="icomoon"></i></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="header w">
        <!-- logo -->
        <div class="logo">
            <h1>
                <a href="#" title="品优购">品优购</a>
            </h1>
        </div>
        <!-- search -->
        <div class="search">
            <input type="text" class="text" value="请搜索内容...">
            <button class="btn">搜索</button>
        </div>
        <!-- hotwrods -->
        <div class="hotwrods">
            <a href="#" class="style-red">优惠购首发</a>
            <a href="#">亿元优惠</a>
            <a href="#">9.9元团购</a>
            <a href="#">美满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>
        </div>
        <div class="shopcar">
            <i class="car"> </i>我的购物车 <i class="arrow">  </i>
            <i class="count">80</i>
        </div>
    </div>
    <router-view />
    <div class="footer">
        <div class="w">
            <!-- mod_service -->
            <div class="mod_service">
                <ul>
                    <li>
                        <i class="mod-service-icon mod_service_zheng"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_kuai"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- mod_help -->
            <div class="mod_help">
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item mod_help_app">
                    <dt>帮助中心</dt>
                    <dd>
                        <img src="../../assets/erweima.png" alt="">
                        <p>品优购客户端</p>
                    </dd>
                </dl>
            </div>

            <!-- mod_copyright  -->
            <div class="mod_copyright">
                <p class="mod_copyright_links">
                    关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
                    品优购公益 | English Site | Contact U
                </p>
                <p class="mod_copyright_info">
                    地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100
                    邮箱: zhanghj+itcast.cn <br>
                    京ICP备08001421号京公网安备110108007702
                </p>
            </div>
        </div>
    </div>
</div>
</template>
