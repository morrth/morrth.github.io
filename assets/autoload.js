try {
    $("<link>").attr({href: "/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu" style="left: 0px;z-index:3;position: fixed;"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    
	/* 可直接修改部分参数 */
	live2d_settings['modelAPI']             = '//live2d.fghrsh.net/api/';   // 自建 API 修改这里
	live2d_settings['tipsMessage']          = '/assets/waifu-tips.json';            // 同目录下可省略路径
	 // 一言 API
    live2d_settings['hitokotoAPI']          = 'lwl12.com';  
    live2d_settings['modelId'] = 1;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
	live2d_settings['waifuDraggable']       = 'disable';
	live2d_settings['waifuDraggableRevert'] = true; 
	live2d_settings['homePageUrl']          = 'https://morrth.top/';       // 主页地址，可选 'auto'(自动), '{URL 网址}'
	live2d_settings['aboutPageUrl']         = 'https://morrth.top/'; 
	live2d_settings['canSwitchModel']       = false;
	
	live2d_settings['waifuEdgeSide']        = 'left:80vw'; 
    /* 在 initModel 前添加 */
    initModel('/assets/waifu-tips.json');
	
} catch(err) { console.log('[Error] JQuery is not defined.'+err) }
