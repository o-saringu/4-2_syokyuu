function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	
	if (one.value == "inti=30;"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：int i=30;";
	}

	if (two.value == "i<210;"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：i<210;";
	}

	if (three.value == "i+=10"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：i += 10";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");




let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);