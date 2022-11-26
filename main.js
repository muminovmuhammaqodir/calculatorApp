let elWindow = document.querySelector("#window");
const elReset = document.querySelector("#reset");
const btnZero = document.querySelector("#btn");
const btnFirst = document.querySelector("#btn1");
const btnSecond = document.querySelector("#btn2");
const btnThird = document.querySelector("#btn3");
const btnFourth = document.querySelector("#btn4");
const btnFifth = document.querySelector("#btn5");
const btnSixth = document.querySelector("#btn6");
const btnSeventh = document.querySelector("#btn7");
const btnEighth = document.querySelector("#btn8");
const btnNinth = document.querySelector("#btn9");
const btnDevide = document.querySelector("#btnDvd");
const btnIncrease = document.querySelector("#btnMltp");
const btnMinus = document.querySelector("#btnMin");
const btnPlus = document.querySelector("#btnPls");
const btnEquals = document.querySelector("#btnEql");
const btnDot = document.querySelector("#btnDot");

elReset.addEventListener("click", function (e) {
	e.preventDefault();
	elWindow.value = "";
});

function eventHendler(buttons) {
	buttons.addEventListener("click", function (e) {
		e.preventDefault();

		if (buttons.value == "+") {
			elWindow.value += ` ${buttons.value} `;
		} else if (buttons.value == "-") {
			elWindow.value += ` ${buttons.value} `;
		} else if (buttons.value == "*") {
			elWindow.value += ` ${buttons.value} `;
		} else if (buttons.value == "/") {
			elWindow.value += ` ${buttons.value} `;
		} else {
			elWindow.value += `${buttons.value}`;
		}
	});
}
console.log(btnFirst.textContent);

eventHendler(btnZero);
eventHendler(btnFirst);
eventHendler(btnSecond);
eventHendler(btnThird);
eventHendler(btnFourth);
eventHendler(btnFifth);
eventHendler(btnSixth);
eventHendler(btnSeventh);
eventHendler(btnEighth);
eventHendler(btnNinth);
eventHendler(btnPlus);
eventHendler(btnDevide);
eventHendler(btnIncrease);
eventHendler(btnMinus);
eventHendler(btnDot);

btnEquals.addEventListener("click", function (e) {
	e.preventDefault();
	let arr = elWindow.value.split(" ");

	if (arr[1] === "+") {
		elWindow.value = Number(arr[0]) + Number(arr[2]);
	} else if (arr[1] === "-") {
		elWindow.value = Number(arr[0]) - Number(arr[2]);
	} else if (arr[1] === "*") {
		elWindow.value = Number(arr[0]) * Number(arr[2]);
	} else if (arr[1] === "/") {
		elWindow.value = Number(arr[0]) / Number(arr[2]);
	}
});
