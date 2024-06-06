// JavaScript代码
document.getElementById('navigateButton_1').addEventListener('click', function () {
    var inputText_1_1_content = document.getElementById('inputText_1_1').value;
    window.location.href = 'index2.html?content=' + encodeURIComponent(inputText_1_1_content);
});

document.getElementById('navigateButton').addEventListener('click', function () {
    // 获取 inputText_1 的内容
    var inputText_1_1_content = document.getElementById('inputText_1_1').value;
    // 将内容传递到 index2.html
    // 将内容的第一行单独提取出来
    var firstLine = inputText_1_1_content.split('\n')[0];
    // 将内容的no2_Line第2行单独提取出来
    var no2_Line = inputText_1_1_content.split('\n')[1];
    // 将内容的no4_1_Line第4行单独提取出来
    var no4_1_line = inputText_1_1_content.split('\n')[3];
    // 检查第一行是否包含空格，如果有则删除
    if (firstLine.includes(' ')) {
        firstLine = firstLine.replace(/\s+/g, ''); // 使用正则表达式替换空格
    }
    var warningLevel = ''; //甲級or乙級
    var station1 = ''; //哪個監理所站
    var notify1 = ''; //粗暴,續報,結報
    var accident_time_1 = '';//事故時間
    var notify_time_1 = '';//通知時間
    var location_str_1 = '';//地點
    // 检查第一行是否包含 "甲級" 或 "乙級"，根据结果设置相应的 warningLevel
    if (firstLine.includes('甲級')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙級')) { warningLevel = 'B_level'; }
    if (firstLine.includes('乙級升甲級')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙升甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('丙升甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙級升為甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙升為甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙級改甲級')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙改甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('丙改甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙級改為甲')) { warningLevel = 'A_level'; }
    if (firstLine.includes('乙改為甲')) { warningLevel = 'A_level'; }

    if (firstLine.includes('丙升乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲級降乙級')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲降乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲級降為乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲降為乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲級改乙級')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲改乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('丙改乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲級改為乙')) { warningLevel = 'B_level'; }
    if (firstLine.includes('甲改為乙')) { warningLevel = 'B_level'; }
    // 将内容和警告级别传递到 index2.html
    //检查第一行是否包含 "xx監理站" ，根据结果设置相应的st_1
    //st_1=桃園監理站,st_2=中壢監理站,st_3=新竹所,st_4=新竹市站,st_5=苗栗站
    if (firstLine.includes('新竹區監理所')) { station1 = 'st_3'; }
    if (firstLine.includes('新竹所')) { station1 = 'st_3'; }
    if (firstLine.includes('桃園監理站')) { station1 = 'st_1'; }
    if (firstLine.includes('桃園站')) { station1 = 'st_1'; }
    if (firstLine.includes('中壢監理站')) { station1 = 'st_2'; }
    if (firstLine.includes('中壢站')) { station1 = 'st_2'; }
    if (firstLine.includes('苗栗監理站')) { station1 = 'st_5'; }
    if (firstLine.includes('苗栗站')) { station1 = 'st_5'; }
    if (firstLine.includes('新竹市監理站')) { station1 = 'st_4'; }
    if (firstLine.includes('新竹站')) { station1 = 'st_4'; }
    if (firstLine.includes('新竹市站')) { station1 = 'st_4'; }
    //检查第一行是否包含 "初報,續報,結報" ，根据结果设置相应的noti_1
    if (firstLine.includes('初報')) { notify1 = 'noti_1'; }
    if (firstLine.includes('續報')) { notify1 = 'noti_2_1'; }
    if (firstLine.includes('結報')) { notify1 = 'noti_3'; }
    if (firstLine.includes('續報1') || firstLine.includes('續報一') || firstLine.includes('續報第1') || firstLine.includes('續報第一')) { notify1 = 'noti_2_1'; }
    if (firstLine.includes('續報2') || firstLine.includes('續報二') || firstLine.includes('續報第2') || firstLine.includes('續報第二')) { notify1 = 'noti_2_2'; }
    if (firstLine.includes('續報3') || firstLine.includes('續報三') || firstLine.includes('續報第3') || firstLine.includes('續報第三')) { notify1 = 'noti_2_3'; }
    if (firstLine.includes('續報4') || firstLine.includes('續報四') || firstLine.includes('續報第4') || firstLine.includes('續報第四')) { notify1 = 'noti_2_4'; }
    if (firstLine.includes('續報5') || firstLine.includes('續報五') || firstLine.includes('續報第5') || firstLine.includes('續報第五')) { notify1 = 'noti_2_5'; }
    if (firstLine.includes('續報6') || firstLine.includes('續報六') || firstLine.includes('續報第6') || firstLine.includes('續報第六')) { notify1 = 'noti_2_6'; }
    if (firstLine.includes('續報7') || firstLine.includes('續報七') || firstLine.includes('續報第7') || firstLine.includes('續報第七')) { notify1 = 'noti_2_7'; }
    if (firstLine.includes('續報8') || firstLine.includes('續報八') || firstLine.includes('續報第8') || firstLine.includes('續報第八')) { notify1 = 'noti_2_8'; }
    if (firstLine.includes('續報9') || firstLine.includes('續報九') || firstLine.includes('續報第9') || firstLine.includes('續報第九')) { notify1 = 'noti_2_9'; }
    if (firstLine.includes('續報10') || firstLine.includes('續報十') || firstLine.includes('續報第10') || firstLine.includes('續報第十')) { notify1 = 'noti_2_10'; }
    if (firstLine.includes('續報11') || firstLine.includes('續報十一') || firstLine.includes('續報第11') || firstLine.includes('續報第十一')) { notify1 = 'noti_2_11'; }
    if (firstLine.includes('續報12') || firstLine.includes('續報十二') || firstLine.includes('續報第12') || firstLine.includes('續報第十二')) { notify1 = 'noti_2_12'; }
    if (firstLine.includes('續報13') || firstLine.includes('續報十三') || firstLine.includes('續報第13') || firstLine.includes('續報第十三')) { notify1 = 'noti_2_13'; }
    if (firstLine.includes('續報14') || firstLine.includes('續報十四') || firstLine.includes('續報第14') || firstLine.includes('續報第十四')) { notify1 = 'noti_2_14'; }
    if (firstLine.includes('續報15') || firstLine.includes('續報十五') || firstLine.includes('續報第15') || firstLine.includes('續報第十五')) { notify1 = 'noti_2_15'; }
    if (firstLine.includes('續報16') || firstLine.includes('續報十六') || firstLine.includes('續報第16') || firstLine.includes('續報第十六')) { notify1 = 'noti_2_16'; }
    if (firstLine.includes('續報17') || firstLine.includes('續報十七') || firstLine.includes('續報第17') || firstLine.includes('續報第十七')) { notify1 = 'noti_2_17'; }
    if (firstLine.includes('續報18') || firstLine.includes('續報十八') || firstLine.includes('續報第18') || firstLine.includes('續報第十八')) { notify1 = 'noti_2_18'; }
    if (firstLine.includes('續報19') || firstLine.includes('續報十九') || firstLine.includes('續報第19') || firstLine.includes('續報第十九')) { notify1 = 'noti_2_19'; }
    if (firstLine.includes('續報20') || firstLine.includes('續報二十') || firstLine.includes('續報第20') || firstLine.includes('續報第二十')) { notify1 = 'noti_2_20'; }
    if (firstLine.includes('續報21') || firstLine.includes('續報二十一') || firstLine.includes('續報第21') || firstLine.includes('續報第二十一')) { notify1 = 'noti_2_21'; }
    if (firstLine.includes('續報22') || firstLine.includes('續報二十二') || firstLine.includes('續報第22') || firstLine.includes('續報第二十二')) { notify1 = 'noti_2_22'; }
    if (firstLine.includes('續報23') || firstLine.includes('續報二十三') || firstLine.includes('續報第23') || firstLine.includes('續報第二十三')) { notify1 = 'noti_2_23'; }
    if (firstLine.includes('續報24') || firstLine.includes('續報二十四') || firstLine.includes('續報第24') || firstLine.includes('續報第二十四')) { notify1 = 'noti_2_24'; }
    if (firstLine.includes('續報25') || firstLine.includes('續報二十五') || firstLine.includes('續報第25') || firstLine.includes('續報第二十五')) { notify1 = 'noti_2_25'; }
    if (firstLine.includes('續報26') || firstLine.includes('續報二十六') || firstLine.includes('續報第26') || firstLine.includes('續報第二十六')) { notify1 = 'noti_2_26'; }
    if (firstLine.includes('續報27') || firstLine.includes('續報二十七') || firstLine.includes('續報第27') || firstLine.includes('續報第二十七')) { notify1 = 'noti_2_27'; }
    if (firstLine.includes('續報28') || firstLine.includes('續報二十八') || firstLine.includes('續報第28') || firstLine.includes('續報第二十八')) { notify1 = 'noti_2_28'; }
    if (firstLine.includes('續報29') || firstLine.includes('續報二十九') || firstLine.includes('續報第29') || firstLine.includes('續報第二十九')) { notify1 = 'noti_2_29'; }
    if (firstLine.includes('續報30') || firstLine.includes('續報三十') || firstLine.includes('續報第30') || firstLine.includes('續報第三十')) { notify1 = 'noti_2_30'; }


    // 使用正则表达式将连续多个空格替换为一个空格
    var no2_Line = no2_Line.replace(/\s+/g, ' ');
    // 使用正则表达式将xx/xx xx:xx或xx/xx,xx:xx或xx/xx，xx:xx改成xx/xx_xx:xx
    var no2_Line = no2_Line.replace(/(\d{1,2}),(\d{1,2})/g, '$1_$2');
    var no2_Line = no2_Line.replace(/(\d{1,2})，(\d{1,2})/g, '$1_$2');
    var no2_Line = no2_Line.replace(/(\d{1,2}) (\d{1,2})/g, '$1_$2');
    // 使用正则表达式将xx年xx日 xx:xx或xx年xx日,xx:xx或xx年xx日，xx:xx改成xx年xx日_xx:xx
    var no2_Line = no2_Line.replace(/日,(\d{1,2})/g, '日$1');
    var no2_Line = no2_Line.replace(/日，(\d{1,2})/g, '日$1');
    var no2_Line = no2_Line.replace(/日 (\d{1,2})/g, '日$1');
    // 使用正则表达式将xx:xx，上午或xx月xx日，上午改成xx:xx_上午
    var no2_Line = no2_Line.replace(/(\d{1,2}),上午/g, '$1上午');
    var no2_Line = no2_Line.replace(/(\d{1,2})，上午/g, '$1上午');
    var no2_Line = no2_Line.replace(/(\d{1,2}) 上午/g, '$1上午');
    var no2_Line = no2_Line.replace(/(\d{1,2}),下午/g, '$1下午');
    var no2_Line = no2_Line.replace(/(\d{1,2})，下午/g, '$1下午');
    var no2_Line = no2_Line.replace(/(\d{1,2}) 下午/g, '$1下午');
    var no2_Line = no2_Line.replace(/(\d{1,2}),中午/g, '$1中午');
    var no2_Line = no2_Line.replace(/(\d{1,2})，中午/g, '$1中午');
    var no2_Line = no2_Line.replace(/(\d{1,2}) 中午/g, '$1中午');
    var no2_Line = no2_Line.replace(/(\d{1,2}),午/g, '$1午');
    var no2_Line = no2_Line.replace(/(\d{1,2})，午/g, '$1午');
    var no2_Line = no2_Line.replace(/(\d{1,2}) 午/g, '$1午');
    var no2_Line = no2_Line.replace(/日,上午/g, '日上午');
    var no2_Line = no2_Line.replace(/日，上午/g, '日上午');
    var no2_Line = no2_Line.replace(/日 上午/g, '日上午');
    var no2_Line = no2_Line.replace(/日,下午/g, '日下午');
    var no2_Line = no2_Line.replace(/日，下午/g, '日下午');
    var no2_Line = no2_Line.replace(/日 下午/g, '日下午');
    var no2_Line = no2_Line.replace(/日,中午/g, '日中午');
    var no2_Line = no2_Line.replace(/日，中午/g, '日中午');
    var no2_Line = no2_Line.replace(/日 中午/g, '日中午');
    var no2_Line = no2_Line.replace(/日,午/g, '日午');
    var no2_Line = no2_Line.replace(/日，午/g, '日午');
    var no2_Line = no2_Line.replace(/日 午/g, '日午');
    // 使用正则表达式将逗号和括号替换为空格
    var str = no2_Line.replace(/[,，()（）]/g, ' ');
    // 使用正则表达式将连续多个空格替换为一个空格
    var replacedLine = str.replace(/\s+/g, ' ');
    // 使用空格分割字符串成数组
    var splittedLine = replacedLine.split(' ');
    //splittedLine.length，代表分割了xx段
    var find_date = 0;
    //date_initial代表抓到日期的字串
    var date_initial = "";
    //date_initial代表抓到接獲的字串
    var notify_initial = "";
    //Injuried01代表受傷人數,die01代表死亡人數
    var Injuried01 = 0;
    var die01 = 0;
    //判斷日期時間-
    //1.先找splittedLine[i]有無符合(1)字串最後是xx:xx(2)字串沒含接獲(3)字串最後是"時整","點整"
    //2.如1找不到,再找(1)從左至右第一個xx:xx(2)字串沒含接獲
    //find_date=0,代表1沒找到,find_date=1代表1有找到
    //1.先找splittedLine[i]有無符合(1)字串最後是xx:xx(2)字串沒含接獲
    for (var i = 0; i < splittedLine.length; i++) {
        //判斷日期時間
        //containsTimePattern判斷:字串最後是否為xx:xx,xx時xx分
        var containsTimePattern = /(\d{1,2}時\d{1,2}分|\d{1,2}點\d{1,2}分|\d{1,2}:\d{1,2}|\d{1,2}：\d{1,2}|時整|點整)(?=\s*$)/.test(splittedLine[i]);
        //containsTimePattern_1判斷:字串是否包含為xx:xx,xx時xx分
        //var containsTimePattern_1 = /(\d{1,2}時\d{1,2}分|\d{1,2}點\d{1,2}分|\d{1,2}:\d{1,2}|\d{1,2}：\d{1,2})/.test(splittedLine[i]);
        //containsKeyword判斷:自串是否含"接獲|通報|接穫|收到"
        var containsKeyword = /接獲|通報|接穫|通知|收到/.test(splittedLine[i]);
        if (containsTimePattern == true && containsKeyword == false) {
            //如字串有"發生時間地點",就分割取splittedLine_1[1]
            //date_initial代表抓到日期的字串
            date_initial = splittedLine[i];
            var str_1 = splittedLine[i].replace(/[:]/g, '：');
            var splittedLine_1 = str_1.split('發生時間地點：');
            if (splittedLine_1.length > 0) {
                accident_time_1 = splittedLine_1[1];
            } else {
                accident_time_1 = splittedLine[i];
            }
            find_date = 1;
            break;//找到就離開for
        }
    }
    //2.如1找不到,再找(1)從左至右第一個xx:xx(2)字串沒含接獲
    if (find_date == 0) { //find_date=0代表1沒找到
        // 定義匹配时间格式的正则表达式，前面可以含任意字符
        var timeRegex = /(.*?(\d{1,2}時\d{1,2}分|\d{1,2}點\d{1,2}分|\d{1,2}:\d{1,2}|\d{1,2}：\d{1,2}|時整|點整))/;
        // 使用正则表达式匹配第一个符合条件的时间字符串
        var match = no2_Line.match(timeRegex);
        if (match) {
            // 将匹配到的时间字符串存储在变量 timeString 中
            var timeString = match[1]; // 使用 match[1] 获取第一个捕获组
            // 定义匹配 "接獲"、通報"收到" 或 "接穫" 的正则表达式
            var keywordsRegex = /(接獲|通報|接穫|通知|收到)/;
            // 检查 keywordsRegex 是否沒包含 "接獲|通報|接穫|收到" 字串
            if (!keywordsRegex.test(timeString)) {
                //如字串有"發生時間地點",就分割取splittedLine_1[1]
                //date_initial代表抓到日期的字串
                date_initial = timeString;
                var str_1 = timeString.replace(/[:]/g, '：');
                var splittedLine_1 = str_1.split('發生時間地點：');
                if (splittedLine_1.length > 0) {
                    accident_time_1 = splittedLine_1[1];
                } else {
                    accident_time_1 = timeString;
                }
            }
        }
    }

    //判斷通報時間-
    //1.先找splittedLine[i]有無符合(1)字串含xx:xx(2)字串含接獲
    //2.如是xx年xx月xx日下午xx時xx分,xx年xx月xx日xx時xx分
    //2.如是xx年xx月xx日_xx時xx分
    //2.如是xx年xx月xx日下午xx時整,xx年xx月xx日xx時整
    //2.如是xx年xx月xx日_xx時整
    //2.如是xxx/xx/xx_下午xx時xx分,xxx/xx/xx_xx時xx分
    //2.如是xxx/xx/xx_下午xx時整,xxx/xx/xx_xx時整
    for (var i = 0; i < splittedLine.length; i++) {
        //containsKeyword_2判斷:字串是否含"接獲|通報|接穫|收到"
        var containsKeyword_2 = /接獲|通報|接穫|收到|通知/.test(splittedLine[i]);
        // containsTimePattern_2判斷:字串是否含有特定的時間格式
        //timePattern_2抓xxx年xx月xx日xx時xx分
        var timePattern_2 = new RegExp(
            "(\\d{1,4}年\\d{1,2}月\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|\\d{1,4}年\\d{1,2}月\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時整|點整)?" +
            "|\\d{1,4}[/]\\d{1,2}[/]\\d{1,2}(上午|中午|下午|午前|午後|_)?\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|\\d{1,4}[/]\\d{1,2}[/]\\d{1,2}(上午|中午|下午|午前|午後|_)?\\d{1,2}(時整|點整)?)"
        );
        //timePattern_3抓xx月xx日xx時xx分
        var timePattern_3 = new RegExp(
            "(\\d{1,2}月\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|\\d{1,2}月\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時整|點整)?" +
            "|\\d{1,2}[/]\\d{1,2}(上午|中午|下午|午前|午後|_)?\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|\\d{1,2}[/]\\d{1,2}(上午|中午|下午|午前|午後|_)?\\d{1,2}(時整|點整)?)"
        );
        //timePattern_3_1抓xx年
        var timePattern_3_1 = /(\d{1,4}年|\d{1,4}[/])/;
        //timePattern_4抓xx日xx時xx分
        var timePattern_4 = new RegExp(
            "(\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|\\d{1,2}日(上午|中午|下午|午前|午後|_)*\\d{1,2}(時整|點整)?)"
        );
        //timePattern_4_1抓xx年xx月
        var timePattern_4_1 = /(\d{1,4}年\d{1,2}月|\d{1,4}[/]\d{1,2}[/])/;
        //timePattern_5抓xx時xx分
        var timePattern_5 = new RegExp(
            "((上午|中午|下午|午前|午後|_)*\\d{1,2}(時|點|:|：)?\\d{1,2}(分)*" +
            "|(上午|中午|下午|午前|午後|_)*\\d{1,2}(時整|點整)?)"
        );
        //timePattern_5_1抓xx年xx月xx日
        var timePattern_5_1 = /(\d{1,4}年\d{1,2}月\d{1,2}日|\d{1,4}[/]\d{1,2}[/]\d{1,2})/;

        var containsTimePattern_2 = timePattern_2.test(splittedLine[i]);
        var containsTimePattern_3 = timePattern_3.test(splittedLine[i]);
        var containsTimePattern_3_1 = timePattern_3_1.test(accident_time_1);
        var containsTimePattern_4 = timePattern_4.test(splittedLine[i]);
        var containsTimePattern_4_1 = timePattern_4_1.test(accident_time_1);
        var containsTimePattern_5 = timePattern_5.test(splittedLine[i]);
        var containsTimePattern_5_1 = timePattern_5_1.test(accident_time_1);
        if (containsTimePattern_2 == true && containsKeyword_2 == true) {
            // 抓出匹配的時間模式_xxx年xx月xx日xx時xx分
            //date_initial代表抓到接獲的字串
            notify_initial = splittedLine[i];
            notify_time_1 = splittedLine[i].match(timePattern_2)[0];
            break;//找到就離開for
        } else if (containsTimePattern_3 == true && containsKeyword_2 == true) {
            // 抓出匹配的時間模式xx月xx日xx時xx分
            //date_initial代表抓到接獲的字串
            notify_initial = splittedLine[i];
            if (containsTimePattern_3_1 == true) {
                notify_time_1 = accident_time_1.match(timePattern_3_1)[0] + splittedLine[i].match(timePattern_3)[0];
            } else {
                notify_time_1 = splittedLine[i].match(timePattern_3)[0];
            } break;//找到就離開for
        } else if (containsTimePattern_4 == true && containsKeyword_2 == true) {
            // 抓出匹配的時間模式xx日xx時xx分
            //date_initial代表抓到接獲的字串
            notify_initial = splittedLine[i];
            if (containsTimePattern_4_1 == true) {
                notify_time_1 = accident_time_1.match(timePattern_4_1)[0] + splittedLine[i].match(timePattern_4)[0];
            } else {
                notify_time_1 = splittedLine[i].match(timePattern_4)[0];
            } break;//找到就離開for
        } else if (containsTimePattern_5 == true && containsKeyword_2 == true) {
            // 抓出匹配的時間模式xx時xx分
            //date_initial代表抓到接獲的字串
            notify_initial = splittedLine[i];
            if (containsTimePattern_5_1 == true) {
                notify_time_1 = accident_time_1.match(timePattern_5_1)[0] + splittedLine[i].match(timePattern_5)[0];
            } else {
                notify_time_1 = splittedLine[i].match(timePattern_5)[0];
            } break;//找到就離開for
        }

    }
    //判斷地點-
    //原本replacedLine字串,刪掉date_initial字串,刪掉notify_initial字串
    // 使用 replace 方法將 date_initial,notify_initial 從 no2_Line 中刪除，並保存為 no3_Line
    var no3_Line = replacedLine.replace(date_initial, '').replace(notify_initial, '');
    no3_Line = no3_Line.replace(/\s+/g, '');
    location_str_1 = no3_Line;
    //判斷傷亡人數
    //1.先找受傷:xx人x傷、x傷xx人、xx人傷、傷xx人、xx受傷、x傷xx、xx傷、傷xx
    //2.再找死亡:xx人死亡、死亡xx人、xx人死、死xx人、xx死亡、死亡xx、xx死、死xx
    //var match_01 = no4_1_line.match(/(\d{1,2})人\D傷|\D傷(\d{1,2})人|(\d{1,2})人傷|傷(\d{1,2})人|(\d{1,2})\D傷|\D傷(\d{1,2})|(\d{1,2})傷|傷(\d{1,2})/);
    var match_01 = no4_1_line.match(/(\d{1,2})人[\u4e00-\u9fa5]傷|[\u4e00-\u9fa5]傷(\d{1,2})人|(\d{1,2})人傷|傷(\d{1,2})人|(\d{1,2})[\u4e00-\u9fa5]傷|[\u4e00-\u9fa5]傷(\d{1,2})|(\d{1,2})傷|傷(\d{1,2})/);
    var match_02 = no4_1_line.match(/(\d{1,2})人死亡|死亡(\d{1,2})人|(\d{1,2})人死|死(\d{1,2})人|(\d{1,2})死亡|死亡(\d{1,2})|(\d{1,2})死|死(\d{1,2})/);
    if (match_01) {
        Injuried01 = match_01[1] || match_01[2] || match_01[3] || match_01[4] || match_01[5] || match_01[6] || match_01[7] || match_01[8];  // match[1] 包含了括號捕獲的部分
    }
    if (match_02) {
        die01 = match_02[1] || match_02[2] || match_02[3] || match_02[4] || match_02[5] || match_02[6] || match_02[7] || match_02[8];  // match[1] 包含了括號捕獲的部分
    }
    //window.location.href = 'index2.html?content=' + encodeURIComponent(inputText_1_1_content) + '&level=' + encodeURIComponent(warningLevel) + '&station=' + encodeURIComponent(station1) + '&notify=' + encodeURIComponent(notify1) + '&accident_time=' + encodeURIComponent(accident_time_1) + '&notify_time=' + encodeURIComponent(notify_time_1) + '&location_str=' + encodeURIComponent(location_str_1);
    window.location.href = 'index2.html?content=' + encodeURIComponent(inputText_1_1_content) +
        '&level=' + encodeURIComponent(warningLevel) +
        '&station=' + encodeURIComponent(station1) +
        '&notify=' + encodeURIComponent(notify1) +
        '&accident_time=' + encodeURIComponent(accident_time_1) +
        '&notify_time=' + encodeURIComponent(notify_time_1) +
        '&location_str=' + encodeURIComponent(location_str_1) +
        '&Injuried01_str=' + encodeURIComponent(Injuried01) +
        '&die01_str=' + encodeURIComponent(die01);

});
function autoResize_2() {
    const textarea = document.getElementById('inputText_1_1');
    textarea.style.height = 'auto'; // 重置高度，以便測量新高度
    textarea.style.height = `${textarea.scrollHeight}px`; // 設置高度為新高度
}