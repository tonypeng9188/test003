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
    document.getElementById('checkbox11').checked = radioChecked;
    document.getElementById('checkbox12').checked = radioChecked;
    document.getElementById('checkbox13').checked = radioChecked;
    document.getElementById('checkbox14').checked = radioChecked;
    document.getElementById('checkbox15').checked = radioChecked;
    document.getElementById('checkbox16').checked = radioChecked;
    document.getElementById('checkbox17').checked = radioChecked;
    document.getElementById('checkbox18').checked = radioChecked;
    document.getElementById('checkbox19').checked = radioChecked;
    document.getElementById('checkbox20').checked = radioChecked;
    document.getElementById('checkbox21').checked = false;
}
function checkCheckbox_2() { //選取乙級時，觸發傳真checkbox選單
    // 获取 radio 按钮的状态
    var radioChecked = document.getElementById('radioOption_2').checked;
    var con1Label = document.getElementById('radioOption_1').nextElementSibling; // Get the <b> element after the radio
    var con1Labe2 = document.getElementById('radioOption_2').nextElementSibling; // Get the <b> element after the radio
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
    document.getElementById('checkbox11').checked = radioChecked;
    document.getElementById('checkbox12').checked = radioChecked;
    document.getElementById('checkbox13').checked = radioChecked;
    document.getElementById('checkbox14').checked = radioChecked;
    document.getElementById('checkbox15').checked = radioChecked;
    document.getElementById('checkbox16').checked = radioChecked;
    document.getElementById('checkbox17').checked = radioChecked;
    document.getElementById('checkbox18').checked = radioChecked;
    document.getElementById('checkbox19').checked = radioChecked;
    document.getElementById('checkbox20').checked = radioChecked;
    document.getElementById('checkbox21').checked = false;
}
function updateInput() {
    //選取xx監理站，觸發職稱、姓名、電話、傳真
    //國x大隊選單、國x大隊電話
    var selectElement = document.getElementById("company_list");
    var inputElement_1_1 = document.getElementById("inputText_1.1");
    var inputElement_1_2 = document.getElementById("inputText_1.2");
    var inputElement_2 = document.getElementById("inputText_2");
    var inputElement_3 = document.getElementById("inputText_3");
    var secondSelect = document.getElementById("secondSelect");
    var inputElement_5 = document.getElementById("inputText_5");
    secondSelect.innerHTML = "";
    if (selectElement.value === "company_01") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "黃成民";
        inputElement_2.value = "(03)3664222*303";
        inputElement_3.value = "(03)3778217";
        inputElement_5.value = "02-2909-9367"
        addOption(secondSelect, "內政部警政署國道公路警察局第一公路警察大隊", "suboption1");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "桃園市政府警察局交通警察大隊", "suboption_ty");
    }
    if (selectElement.value === "company_02") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "吳金全";
        inputElement_2.value = "03-4253990分機301";
        inputElement_3.value = "03-4225685";
        inputElement_5.value = "02-2909-9367"
        addOption(secondSelect, "內政部警政署國道公路警察局第一公路警察大隊", "suboption1");
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "桃園市政府警察局交通警察大隊", "suboption_ty");
    }
    if (selectElement.value === "company_03") {
        inputElement_1_1.value = "所長";
        inputElement_1_2.value = "吳季娟";
        inputElement_2.value = "03-5892051#311";
        inputElement_3.value = "03-5880475";
        inputElement_5.value = "037-563-333"
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "新竹縣政府警察局交通警察隊", "suboption_hco");
    }
    if (selectElement.value === "company_04") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "周景朗";
        inputElement_2.value = "03-5327101*307";
        inputElement_3.value = "03-5319248";
        inputElement_5.value = "037-563-333"
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "新竹市警察局交通警察隊", "suboption_hci");
    }
    if (selectElement.value === "company_05") {
        inputElement_1_1.value = "站長";
        inputElement_1_2.value = "蘇淑賢";
        inputElement_2.value = "037-331806分機301";
        inputElement_3.value = "037-368408";
        inputElement_5.value = "037-563-333"
        addOption(secondSelect, "內政部警政署國道公路警察局第二公路警察大隊", "suboption2");
        addOption(secondSelect, "內政部警政署國道公路警察局第三公路警察大隊", "suboption3");
        addOption(secondSelect, "內政部警政署國道公路警察局第六公路警察大隊", "suboption6");
        addOption(secondSelect, "苗栗縣警察局交通警察隊", "suboption_ml");
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
}
function updateInputState() { //選取2個radio,國x警局或空白時,另一個text反白
    // 获取 radio 按钮和 input 文本框的元素
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var inputText1 = document.getElementById("secondSelect");
    var inputText2 = document.getElementById("inputText_4");
    var inputText3 = document.getElementById("inputText_5");
    var inputText4 = document.getElementById("inputText_6");

    // 根据选中的 radio 按钮，设置对应的 input 文本框状态
    if (radio1.checked) {
        inputText1.disabled = false; // 启用输入框
        inputText2.disabled = true;  // 禁用输入框
        inputText3.disabled = false; // 启用输入框
        inputText4.disabled = true;  // 禁用输入框
    } else if (radio2.checked) {
        inputText1.disabled = true;  // 禁用输入框
        inputText2.disabled = false; // 启用输入框
        inputText3.disabled = true;  // 禁用输入框
        inputText4.disabled = false; // 启用输入框
        inputText2.focus(); //滑鼠游標focus
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
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio2.checked) {
        inputText3.disabled = true;  // 禁用输入框
        radio2_1.disabled = false;
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.remove('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
    if (radio3.checked) {
        inputText3.disabled = true;  // 禁用输入框
        radio2_1.disabled = true;
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.remove('gray-text'); // Add the gray-text class
    }
    if (radio4.checked) {
        inputText3.disabled = false;  // 啟用输入框
        radio2_1.disabled = true;
        inputText3.focus(); //滑鼠游標focus
        con1Label.classList.add('gray-text'); // Remove the gray-text class
        con1Labe2.classList.add('gray-text'); // Add the gray-text class
        con1Labe3.classList.add('gray-text'); // Add the gray-text class
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // 设置初始状态为灰色
    var con3Label = document.querySelector('#con_3 + b');
    var con2Label = document.querySelector('#con_2 + b');
    var radioOption_1_Label = document.querySelector('#radioOption_1 + b');
    var warning2_Label = document.querySelector('#warning2 + b');
    var warning3_Label = document.querySelector('#warning3 + b');
    var supp_2Labe1 = document.querySelector('#supp_2 + b');
    var supportLabel = document.getElementById("support_label");
    var text_23 = document.getElementById("text_label_23");
    var text_24 = document.getElementById("text_label_24");
    var text_25 = document.getElementById("text_label_25");

    con2Label.classList.add('gray-text');
    con3Label.classList.add('gray-text');
    radioOption_1_Label.classList.add('gray-text');
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
    var check22 = document.getElementById("checkbox22");
    var check23 = document.getElementById("checkbox23");
    var check24 = document.getElementById("checkbox24");
    var check25 = document.getElementById("checkbox25");
    var textLabel_22 = document.getElementById("text_label_22");
    var textLabel_23 = document.getElementById("text_label_23");
    var textLabel_24 = document.getElementById("text_label_24");
    var textLabel_25 = document.getElementById("text_label_25");
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