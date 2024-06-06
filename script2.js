// index2.html
// JavaScript代码
// 获取 URL 参数中的 content
var urlParams = new URLSearchParams(window.location.search);
var contentFromIndex1 = urlParams.get('content');
var levelFromIndex1 = urlParams.get('level');
var stationFromIndex1 = urlParams.get('station');
var notifyFromIndex1 = urlParams.get('notify');
var accident_timeFromIndex1 = urlParams.get('accident_time');
var notify_timeFromIndex1 = urlParams.get('notify_time');
var location_str_timeFromIndex1 = urlParams.get('location_str');
var Injuried01_str_timeFromIndex1 = urlParams.get('Injuried01_str');
var die01_str_timeFromIndex1 = urlParams.get('die01_str');
// 将 accident_time 显示在 inputText_7 中
document.getElementById('inputText_7').value = accident_timeFromIndex1;
// 将 notify_time 显示在 inputText_1 中
document.getElementById('inputText_1').value = notify_timeFromIndex1;
// 将 location_str 显示在 inputText_8 中
document.getElementById('inputText_8').value = location_str_timeFromIndex1;
// 将 Injuried01_str 显示在 inputText_15 中
document.getElementById('inputText_15').value = Injuried01_str_timeFromIndex1;
// 将 die01_str 显示在 inputText_13 中
document.getElementById('inputText_13').value = die01_str_timeFromIndex1;
// 将 content 显示在 inputText_10 中
document.getElementById('inputText_10').value = contentFromIndex1;
const textarea = document.getElementById('inputText_10');
textarea.style.height = 'auto'; // 重置高度，以便測量新高度
textarea.style.height = `${textarea.scrollHeight}px`; // 設置高度為新高度
// 根据传递的警告级别选择相应的 radio 按钮_甲級or乙級
if (levelFromIndex1 === 'A_level') {
    document.getElementById('radioOption_1').checked = true;
    checkCheckbox_1();
} else if (levelFromIndex1 === 'B_level') {
    document.getElementById('radioOption_2').checked = true;
    checkCheckbox_2();
} else {
    var radioOption_1_Label = document.querySelector('#radioOption_1 + b');
    var radioOption_2_Label = document.querySelector('#radioOption_2 + b');
    radioOption_1_Label.classList.add('red-text');
    radioOption_2_Label.classList.add('red-text');
}
//桃園監理站_中壢監利站_苗栗_新竹市_新竹所
//st_1=桃園監理站,st_2=中壢監理站,st_3=新竹所,st_4=新竹市站,st_5=苗栗站
if (stationFromIndex1 === 'st_1') {
    document.getElementById('company_list').value = 'company_01';
    updateInput();
} else if (stationFromIndex1 === 'st_2') {
    document.getElementById('company_list').value = 'company_02';
    updateInput();
} else if (stationFromIndex1 === 'st_3') {
    document.getElementById('company_list').value = 'company_03';
    updateInput();
} else if (stationFromIndex1 === 'st_4') {
    document.getElementById('company_list').value = 'company_04';
    updateInput();
} else if (stationFromIndex1 === 'st_5') {
    document.getElementById('company_list').value = 'company_05';
    updateInput();
} else {
    document.getElementById('company_list').value = ' ';
    document.getElementById('inputText_1.1').value = ' ';
    document.getElementById('inputText_1.2').value = ' ';
    document.getElementById('inputText_2').value = ' ';
    document.getElementById('inputText_3').value = ' ';
    document.getElementById('inputText_5').value = ' ';
    document.getElementById("secondSelect").value = ' ';
    document.getElementById("label_unit").classList.add("red");

}
// 根据传递的警告级别选择相应的 初報/續報/結報
if (notifyFromIndex1 === 'noti_1') {
    document.getElementById('warning1').checked = true;
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_1') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_01';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_2') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_02';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_3') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_03';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_4') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_04';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_5') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_05';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_6') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_06';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_7') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_07';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_8') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_08';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_9') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_09';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_10') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_10';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_11') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_11';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_12') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_12';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_13') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_13';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_14') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_14';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_15') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_15';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_16') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_16';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_17') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_17';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_18') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_18';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_19') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_19';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_20') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_20';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_21') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_21';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_22') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_22';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_23') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_23';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_24') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_24';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_25') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_25';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_26') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_26';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_27') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_27';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_28') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_28';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_29') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_29';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_2_30') {
    document.getElementById('warning2').checked = true;
    document.getElementById('warning2_1').value = 'con_warn_time_30';
    updateInputState_1();
} else if (notifyFromIndex1 === 'noti_3') {
    document.getElementById('warning3').checked = true;
    updateInputState_1();
} else {
    var warning1_Label = document.querySelector('#warning1 + b');
    var warning2_Label = document.querySelector('#warning2 + b');
    var warning3_Label = document.querySelector('#warning3 + b');
    warning1_Label.classList.add('red-text');
    warning2_Label.classList.add('red-text');
    warning3_Label.classList.add('red-text');
}
updateInputState_4(); // 呼叫 updateInputState_4()


function autoResize() {
    const textarea = document.getElementById('inputText_10');
    textarea.style.height = 'auto'; // 重置高度，以便測量新高度
    textarea.style.height = `${textarea.scrollHeight}px`; // 設置高度為新高度
}
function autoResize_1() {
    const textarea = document.getElementById('inputText_26');
    textarea.style.height = 'auto'; // 重置高度，以便測量新高度
    textarea.style.height = `${textarea.scrollHeight}px`; // 設置高度為新高度
}
/*
function generatePDF() {
    // 獲取輸入的文字
    //const inputText = document.getElementById('mytable');
    //const fileName = 'generated_pdf.pdf';
    // 使用 html2pdf 將文字轉為 PDF
    //html2pdf(inputText, {
    //    margin: 10,
    //    filename: fileName,
    //    image: { type: 'jpeg', quality: 0.5 },
    //    html2canvas: {
    //        scale: 4 // 設置 'scale' 為 4
    //    },
    //    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //});


    // 獲取輸入的文字
    const inputText = document.getElementById('mytable');
    const fileName = 'generated_pdf.pdf';

    // 判斷是否為 Apple 手機
    const isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    // 判斷是否為 Android 手機
    const isAndroidDevice = /Android/i.test(navigator.userAgent);
    // 使用 html2pdf 將文字轉為 PDF
    html2pdf(inputText, {
        margin: 10,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.5 },
        html2canvas: {
            scale: 4 // 設置 'scale' 為 4
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).outputPdf().then(pdf => {
        if (isAppleDevice) {
            // 如果是 Apple 手機，開啟新視窗顯示
            window.open(URL.createObjectURL(pdf), '_blank');
        } else {
            if (isAndroidDevice) {
                // 如果是 Android 手機，開啟新視窗顯示
                window.open(URL.createObjectURL(pdf), '_blank');
            } else {
                // 否則直接下載
                pdf.save(fileName);
            }
        }
    });

}
*/
function checkCheckbox_1() { //選取甲級時，觸發傳真checkbox選單
    // 获取 radio 按钮的状态
    var radioChecked = document.getElementById('radioOption_1').checked;
    var con1Label = document.getElementById('radioOption_1').nextElementSibling; // Get the <b> element after the radio
    var con1Labe2 = document.getElementById('radioOption_2').nextElementSibling; // Get the <b> element after the radio
    con1Label.classList.remove('gray-text'); // Remove the gray-text class
    con1Label.classList.remove('red-text'); // Remove the red-text class
    con1Labe2.classList.remove('red-text'); // Remove the red-text class
    con1Labe2.classList.add('gray-text'); // Add the gray-text class
    // 设置 checkbox 的状态与 radio 相同
    document.getElementById('checkbox1').checked = radioChecked;
    document.getElementById('checkbox2').checked = false;
    document.getElementById('checkbox3').checked = false;
    document.getElementById('checkbox4').checked = radioChecked;
    document.getElementById('checkbox5').checked = radioChecked;
    document.getElementById('checkbox6').checked = radioChecked;
    document.getElementById('checkbox7').checked = radioChecked;
    document.getElementById('checkbox8').checked = radioChecked;
    document.getElementById('checkbox9').checked = radioChecked;
    document.getElementById('checkbox10').checked = radioChecked;
    document.getElementById('checkbox11').checked = false;
    document.getElementById('checkbox12').checked = false;
    document.getElementById('checkbox13').checked = radioChecked;
    document.getElementById('checkbox14').checked = radioChecked;
    document.getElementById('checkbox15').checked = radioChecked;
    document.getElementById('checkbox16').checked = radioChecked;
    document.getElementById('checkbox17').checked = radioChecked;
    document.getElementById('checkbox18').checked = radioChecked;
    document.getElementById('checkbox19').checked = radioChecked;
    document.getElementById('checkbox20').checked = radioChecked;
    document.getElementById('checkbox21').checked = false;
    document.getElementById('checkbox22').checked = radioChecked;
    document.getElementById('checkbox23').checked = radioChecked;
    document.getElementById('checkbox24').checked = radioChecked;
    document.getElementById('checkbox25').checked = false;
    document.getElementById('checkbox26').checked = false;
    document.getElementById('checkbox27').checked = radioChecked;
}
function checkCheckbox_2() { //選取乙級時，觸發傳真checkbox選單
    // 获取 radio 按钮的状态
    var radioChecked = document.getElementById('radioOption_2').checked;
    var con1Label = document.getElementById('radioOption_1').nextElementSibling; // Get the <b> element after the radio
    var con1Labe2 = document.getElementById('radioOption_2').nextElementSibling; // Get the <b> element after the radio
    con1Label.classList.remove('red-text'); // Remove the red-text class
    con1Labe2.classList.remove('red-text'); // Remove the red-text class
    con1Label.classList.add('gray-text'); // Remove the gray-text class
    con1Labe2.classList.remove('gray-text'); // Add the gray-text class
    // 设置 checkbox 的状态与 radio 相同
    document.getElementById('checkbox1').checked = false;
    document.getElementById('checkbox2').checked = false;
    document.getElementById('checkbox3').checked = false;
    document.getElementById('checkbox4').checked = radioChecked;
    document.getElementById('checkbox5').checked = radioChecked;
    document.getElementById('checkbox6').checked = radioChecked;
    document.getElementById('checkbox7').checked = radioChecked;
    document.getElementById('checkbox8').checked = radioChecked;
    document.getElementById('checkbox9').checked = radioChecked;
    document.getElementById('checkbox10').checked = radioChecked;
    document.getElementById('checkbox11').checked = false;
    document.getElementById('checkbox12').checked = false;
    document.getElementById('checkbox13').checked = radioChecked;
    document.getElementById('checkbox14').checked = radioChecked;
    document.getElementById('checkbox15').checked = radioChecked;
    document.getElementById('checkbox16').checked = radioChecked;
    document.getElementById('checkbox17').checked = radioChecked;
    document.getElementById('checkbox18').checked = radioChecked;
    document.getElementById('checkbox19').checked = radioChecked;
    document.getElementById('checkbox20').checked = radioChecked;
    document.getElementById('checkbox21').checked = false;
    document.getElementById('checkbox22').checked = radioChecked;
    document.getElementById('checkbox23').checked = radioChecked;
    document.getElementById('checkbox24').checked = radioChecked;
    document.getElementById('checkbox25').checked = false;
    document.getElementById('checkbox26').checked = false;
    document.getElementById('checkbox27').checked = radioChecked;
}
function updateInput() {
    //選取xx監理站，觸發職稱、姓名、電話、傳真
    //國x大隊選單、國x大隊電話
    var selectElement = document.getElementById("company_list");
    var label = document.getElementById("label_unit");
    var inputElement_1_1 = document.getElementById("inputText_1.1");
    var inputElement_1_2 = document.getElementById("inputText_1.2");
    var inputElement_2 = document.getElementById("inputText_2");
    var inputElement_3 = document.getElementById("inputText_3");
    var secondSelect = document.getElementById("secondSelect");
    var inputElement_5 = document.getElementById("inputText_5");
    var radio1 = document.getElementById("radio1");
    var label_1 = document.getElementById("labelDisaster");
    //當updateInput()有選擇其中一個監理站時，將※請下拉選擇單位刪掉
    //var tdElement = document.getElementById('additionalRow');
    //var spans_1 = tdElement.querySelectorAll('span_1');
    //var spans_2 = tdElement.querySelectorAll('span_2');
    secondSelect.innerHTML = "";

    if (selectElement.value === "") {
        label.classList.remove("black");
        label.classList.add("red");
    } else {
        label.classList.remove("red");
        label.classList.add("black");
        if (radio1.checked) {
            if (secondSelect.value === "") {
                label_1.classList.remove("black");
                label_1.classList.add("red");
            } else {
                label_1.classList.remove("red");
                label_1.classList.add("black");
            }
        }
    }
    if (selectElement.value === "company_01") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "黃成民";
        inputElement_2.value = "(03)3664222*303";
        inputElement_3.value = "(03)3778217";
        inputElement_5.value = "";
        addOption(secondSelect, "內政部警政署國道公路警察局第一公路警察大隊", "suboption1");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "桃園市政府警察局交通警察大隊", "suboption_ty");
        document.getElementById('secondSelect').value = "";
    }
    if (selectElement.value === "company_02") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "吳金全";
        inputElement_2.value = "03-4253990分機301";
        inputElement_3.value = "03-4225685";
        inputElement_5.value = "";
        addOption(secondSelect, "內政部警政署國道公路警察局第一公路警察大隊", "suboption1");
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "桃園市政府警察局交通警察大隊", "suboption_ty");
        document.getElementById('secondSelect').value = "";
    }
    if (selectElement.value === "company_03") {
        inputElement_1_1.value = "所長";
        inputElement_1_2.value = "吳季娟";
        inputElement_2.value = "03-5892051#311";
        inputElement_3.value = "03-5880475";
        inputElement_5.value = "";
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "新竹縣政府警察局交通警察隊", "suboption_hco");
        document.getElementById('secondSelect').value = "";
    }
    if (selectElement.value === "company_04") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "周景朗";
        inputElement_2.value = "03-5327101*307";
        inputElement_3.value = "03-5319248";
        inputElement_5.value = "";
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "新竹市警察局交通警察隊", "suboption_hci");
        document.getElementById('secondSelect').value = "";
    }
    if (selectElement.value === "company_05") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "蘇淑賢";
        inputElement_2.value = "037-331806分機301";
        inputElement_3.value = "037-368408";
        inputElement_5.value = "";
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第三公路警察大隊", "suboption3");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "苗栗縣警察局交通警察隊", "suboption_ml");
        document.getElementById('secondSelect').value = "";
    }
}
function addOption(selectElement, text, value) {
    var option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectElement.add(option);
}
function updateInput_1() { //選取國道x隊時，觸發警察電話號碼
    var selectElement = document.getElementById("secondSelect");
    var inputElement_1_1 = document.getElementById("inputText_5");
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var inputText = document.getElementById("inputText_4");
    var label = document.getElementById("labelDisaster");

    if (selectElement.value === "suboption1") {
        inputElement_1_1.value = "02-2909-9367";
    }
    if (selectElement.value === "suboption2") {
        inputElement_1_1.value = "037-563-333";
    }
    if (selectElement.value === "suboption3") {
        inputElement_1_1.value = "04-888-0622";
    }
    if (selectElement.value === "suboption6") {
        inputElement_1_1.value = "03-411-6623";
    }
    if (selectElement.value === "suboption_ty") {
        inputElement_1_1.value = "03-332-5368";
    }
    if (selectElement.value === "suboption_hco") {
        inputElement_1_1.value = "03-5513509";
    }
    if (selectElement.value === "suboption_hci") {
        inputElement_1_1.value = "03-5250382";
    }
    if (selectElement.value === "suboption_ml") {
        inputElement_1_1.value = "037-356279";
    }

    if (radio1.checked) {
        if (selectElement.value === "") {
            label.classList.remove("black");
            label.classList.add("red");
        } else {
            label.classList.remove("red");
            label.classList.add("black");
        }
    } else if (radio2.checked) {
        if (inputText.value.trim() === "") {
            label.classList.remove("black");
            label.classList.add("red");
        } else {
            label.classList.remove("red");
            label.classList.add("black");
        }
    }
}
function updateInputState() { //選取2個radio,國x警局或空白時,另一個text反白
    // 获取 radio 按钮和 input 文本框的元素
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var inputText1 = document.getElementById("secondSelect");
    var inputText2 = document.getElementById("inputText_4");
    var inputText3 = document.getElementById("inputText_5");
    var inputText4 = document.getElementById("inputText_6");
    var label = document.getElementById("labelDisaster");

    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText1.disabled = false; // 启用输入框
        inputText2.disabled = true;  // 禁用输入框
        inputText3.disabled = false; // 启用输入框
        inputText4.disabled = true;  // 禁用输入框
        if (inputText1.value === "") {
            label.classList.remove("black");
            label.classList.add("red");
        } else {
            label.classList.remove("red");
            label.classList.add("black");
        }
    } else if (radio2.checked) {
        inputText1.disabled = true;  // 禁用输入框
        inputText2.disabled = false; // 启用输入框
        inputText3.disabled = true;  // 禁用输入框
        inputText4.disabled = false; // 启用输入框
        inputText2.focus(); //滑鼠游標focus
        if (inputText2.value.trim() === "") {
            label.classList.remove("black");
            label.classList.add("red");
        } else {
            label.classList.remove("red");
            label.classList.add("black");
        }
    }
}
function updateInputState_1() { //選取3個radio,初報續報結報,另一個text反白
    // 获取 radio 按钮和 input 文本框的元素
    var radio1 = document.getElementById("warning1");
    var con1Label = radio1.nextElementSibling; // Get the <b> element after the radio
    var radio2 = document.getElementById("warning2");
    var con1Labe2 = radio2.nextElementSibling; // Get the <b> element after the radio
    var radio2_1 = document.getElementById("warning2_1");
    var radio3 = document.getElementById("warning3");
    var con1Labe3 = radio3.nextElementSibling; // Get the <b> element after the radio
    var radio4 = document.getElementById("warning4");
    var inputText3 = document.getElementById("inputText_1.3");

    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText3.disabled = true;  // 禁用输入框
        radio2_1.disabled = true;
        con1Label.classList.remove('gray-text'); // Remove the gray-text class
        con1Label.classList.remove('red-text'); // Remove the red-text class
        con1Labe2.classList.remove('red-text'); // Remove the red-text class
        con1Labe3.classList.remove('red-text'); // Remove the red-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio2.checked) {
        inputText3.disabled = true;  // 禁用输入框
        radio2_1.disabled = false;
        con1Label.classList.remove('red-text'); // Remove the red-text class
        con1Labe2.classList.remove('red-text'); // Remove the red-text class
        con1Labe3.classList.remove('red-text'); // Remove the red-text class
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.remove('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio3.checked) {
        inputText3.disabled = true;  // 禁用输入框
        radio2_1.disabled = true;
        con1Label.classList.remove('red-text'); // Remove the red-text class
        con1Labe2.classList.remove('red-text'); // Remove the red-text class
        con1Labe3.classList.remove('red-text'); // Remove the red-text class
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.remove('gray-text'); // Add the gray-text class
    }
    if (radio4.checked) {
        inputText3.disabled = false;  // 啟用输入框
        radio2_1.disabled = true;
        inputText3.focus(); //滑鼠游標focus
        con1Label.classList.remove('red-text'); // Remove the red-text class
        con1Labe2.classList.remove('red-text'); // Remove the red-text class
        con1Labe3.classList.remove('red-text'); // Remove the red-text class
        con1Label.classList.add('gray-text'); // add the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
}
function updateInputState_2() { //選取2個radio,國x警局或空白時,另一個text反白
    // 获取 radio 按钮和 input 文本框的元素
    var radio1 = document.getElementById("checkbox28");
    var radio2 = document.getElementById("checkbox29");
    var radio3 = document.getElementById("checkbox30");
    var inputText1 = document.getElementById("checkbox28_input");
    var inputText2 = document.getElementById("checkbox29_input");
    var inputText3 = document.getElementById("checkbox30_input");

    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText1.disabled = false; // 启用输入框
        inputText1.focus(); //滑鼠游標focus
    } else {
        inputText1.disabled = true;  // 禁用输入框
    }
    if (radio2.checked) {
        inputText2.disabled = false; // 启用输入框
        inputText2.focus(); //滑鼠游標focus
    } else {
        inputText2.disabled = true;  // 禁用输入框
    }
    if (radio3.checked) {
        inputText3.disabled = false; // 启用输入框
        inputText3.focus(); //滑鼠游標focus
    } else {
        inputText3.disabled = true;  // 禁用输入框
    }
}
function updateInputState_3() {
    var radio4 = document.getElementById("checkbox4");
    var radio5 = document.getElementById("checkbox5");
    var radio6 = document.getElementById("checkbox6");
    var radio7 = document.getElementById("checkbox7");
    var radio8 = document.getElementById("checkbox8");
    var radio9 = document.getElementById("checkbox9");
    var radio10 = document.getElementById("checkbox10");
    var radio13 = document.getElementById("checkbox13");
    var radio14 = document.getElementById("checkbox14");
    var radio15 = document.getElementById("checkbox15");
    var radio16 = document.getElementById("checkbox16");
    var radio17 = document.getElementById("checkbox17");
    var radio18 = document.getElementById("checkbox18");
    var radio19 = document.getElementById("checkbox19");
    var radio20 = document.getElementById("checkbox20");
    var radio22 = document.getElementById("checkbox22");
    var radio23 = document.getElementById("checkbox23");
    var radio24 = document.getElementById("checkbox24");
    var radio27 = document.getElementById("checkbox27");
    if (!radio4.checked) { radio4.checked = true; }
    if (!radio5.checked) { radio5.checked = true; }
    if (!radio6.checked) { radio6.checked = true; }
    if (!radio7.checked) { radio7.checked = true; }
    if (!radio8.checked) { radio8.checked = true; }
    if (!radio9.checked) { radio9.checked = true; }
    if (!radio10.checked) { radio10.checked = true; }
    if (!radio13.checked) { radio13.checked = true; }
    if (!radio14.checked) { radio14.checked = true; }
    if (!radio15.checked) { radio15.checked = true; }
    if (!radio16.checked) { radio16.checked = true; }
    if (!radio17.checked) { radio17.checked = true; }
    if (!radio18.checked) { radio18.checked = true; }
    if (!radio19.checked) { radio19.checked = true; }
    if (!radio20.checked) { radio20.checked = true; }
    if (!radio22.checked) { radio22.checked = true; }
    if (!radio23.checked) { radio23.checked = true; }
    if (!radio24.checked) { radio24.checked = true; }
    if (!radio27.checked) { radio27.checked = true; }
}
function updateInputState_4() {
    var inputText = document.getElementById("inputText_1").value;
    var inputText_7 = document.getElementById("inputText_7").value;
    var inputText_8 = document.getElementById("inputText_8").value;
    var inputText_13 = document.getElementById("inputText_13").value;
    var inputText_14 = document.getElementById("inputText_14").value;
    var inputText_15 = document.getElementById("inputText_15").value;
    var inputText_16 = document.getElementById("inputText_16").value;
    var label = document.getElementById("label001"); //通報時間
    var label_2 = document.getElementById("label002");//發生時間
    var label_3 = document.getElementById("label003");//災害地點
    var label_4 = document.getElementById("label004");//傷亡/損失（壞）情形

    if (inputText.trim() === "") {
        label.classList.remove("black");
        label.classList.add("red");
    } else {
        label.classList.remove("red");
        label.classList.add("black");
    }
    if (inputText_7.trim() === "") {
        label_2.classList.remove("black");
        label_2.classList.add("red");
    } else {
        label_2.classList.remove("red");
        label_2.classList.add("black");
    }
    if (inputText_8.trim() === "") {
        label_3.classList.remove("black");
        label_3.classList.add("red");
    } else {
        label_3.classList.remove("red");
        label_3.classList.add("black");
    }
    if (inputText_13.trim() === "" && inputText_14.trim() === "" && inputText_15.trim() === "" && inputText_16.trim() === "") {
        label_4.classList.remove("black");
        label_4.classList.add("red");
    } else {
        label_4.classList.remove("red");
        label_4.classList.add("black");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // 设置初始状态为灰色
    var con3Label = document.querySelector('#con_3 + b');
    var con2Label = document.querySelector('#con_2 + b');
    //var radioOption_1_Label = document.querySelector('#radioOption_1 + b');
    //var warning2_Label = document.querySelector('#warning2 + b');
    //var warning3_Label = document.querySelector('#warning3 + b');
    var supp_2Labe1 = document.querySelector('#supp_2 + b');
    var supportLabel = document.getElementById("support_label");
    var text_23 = document.getElementById("text_label_23");
    var text_24 = document.getElementById("text_label_24");
    var text_25 = document.getElementById("text_label_25");

    con2Label.classList.add('gray-text');
    con3Label.classList.add('gray-text');
    //radioOption_1_Label.classList.add('gray-text');
    warning2_Label.classList.add('gray-text');
    warning3_Label.classList.add('gray-text');
    supp_2Labe1.classList.add('gray-text');
    supportLabel.style.color = "gray";
    text_23.style.color = "gray";
    text_24.style.color = "gray";
    text_25.style.color = "gray";
});
function checkCheckbox_3() { //現場狀況選擇
    var radio1 = document.getElementById("con_1");
    var con1Label = radio1.nextElementSibling; // Get the <b> element after the radio
    var radio2 = document.getElementById("con_2");
    var con1Labe2 = radio2.nextElementSibling; // Get the <b> element after the radio
    var radio3 = document.getElementById("con_3");
    var con1Labe3 = radio3.nextElementSibling; // Get the <b> element after the radio
    var inputText2 = document.getElementById("inputText_11");
    var inputText3 = document.getElementById("inputText_12");

    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText2.disabled = true;  // 禁用输入框
        inputText3.disabled = true;  // 禁用输入框
        con1Label.classList.remove('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio2.checked) {
        inputText2.disabled = false;  // 開啟输入框
        inputText3.disabled = true;  // 禁用输入框
        inputText2.focus(); //滑鼠游標focus
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.remove('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio3.checked) {
        inputText2.disabled = true;  // 進用输入框
        inputText3.disabled = false;  // 開啟输入框
        inputText3.focus(); //滑鼠游標focus
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.remove('gray-text'); // Add the gray-text class
    }

}
function checkCheckbox_4() { //支援狀況
    var radio1 = document.getElementById("supp_1");
    var con1Label = radio1.nextElementSibling; // Get the <b> element after the radio
    var radio2 = document.getElementById("supp_2");
    var con1Labe2 = radio2.nextElementSibling; // Get the <b> element after the radio
    var inputText2 = document.getElementById("inputText_17");
    var inputText3 = document.getElementById("inputText_18");
    var supportLabel = document.getElementById("support_label");
    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText2.disabled = true;  // 禁用输入框
        inputText3.disabled = true;  // 禁用输入框
        con1Label.classList.remove('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        supportLabel.style.color = "gray";
    }
    if (radio2.checked) {
        inputText2.disabled = false;  // 開啟输入框
        inputText3.disabled = false;  // 開啟输入框
        inputText2.focus(); //滑鼠游標focus
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.remove('gray-text'); // Add the gray-text class
        supportLabel.style.color = "";
    }
}
function checkCheckbox_5() { //應變措施
    var check22 = document.getElementById("checkbox22_1");
    var check23 = document.getElementById("checkbox23_1");
    var check24 = document.getElementById("checkbox24_1");
    var check25 = document.getElementById("checkbox25_1");
    var textLabel_22 = document.getElementById("text_label_22_1");
    var textLabel_23 = document.getElementById("text_label_23_1");
    var textLabel_24 = document.getElementById("text_label_24_1");
    var textLabel_25 = document.getElementById("text_label_25_1");
    var inputText2 = document.getElementById("inputText_19");
    var inputText3 = document.getElementById("inputText_20");
    var inputText4 = document.getElementById("inputText_21");
    // 根据选中的 radio 按钮，设置对应的 input 文本框状态

    if (check22.checked) {
        // 如果checkbox選取，恢復樣式
        textLabel_22.style.color = ""; // 或者可以設置為null
    } else {
        // 如果checkbox沒有選取，設置樣式為灰色
        textLabel_22.style.color = "gray";
    }
    if (check23.checked) {
        // 如果checkbox選取，恢復樣式
        textLabel_23.style.color = ""; // 或者可以設置為null
        inputText2.disabled = false;  // 開啟输入框
        inputText2.focus(); //滑鼠游標focus
    } else {
        // 如果checkbox沒有選取，設置樣式為灰色
        textLabel_23.style.color = "gray";
        inputText2.disabled = true;  // 禁用输入框
    }
    if (check24.checked) {
        // 如果checkbox選取，恢復樣式
        textLabel_24.style.color = ""; // 或者可以設置為null
        inputText3.disabled = false;  // 開啟输入框
        inputText3.focus(); //滑鼠游標focus
    } else {
        // 如果checkbox沒有選取，設置樣式為灰色
        textLabel_24.style.color = "gray";
        inputText3.disabled = true;  // 禁用输入框
    }
    if (check25.checked) {
        // 如果checkbox選取，恢復樣式
        textLabel_25.style.color = ""; // 或者可以設置為null
        inputText4.disabled = false;  // 開啟输入框
        inputText4.focus(); //滑鼠游標focus
    } else {
        // 如果checkbox沒有選取，設置樣式為灰色
        textLabel_25.style.color = "gray";
        inputText4.disabled = true;  // 禁用输入框
    }

}