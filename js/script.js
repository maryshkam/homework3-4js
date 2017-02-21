var programTest = {
	testTitle : '',
	questionList : [],
	docWrapper : '',
	parentForm : '',
	submitText : '',

	createWrapper : function() {
		this.docWrapper = document.createElement('div');
		this.docWrapper.style.width = '700px';
		this.docWrapper.classList.add('center-block');
		document.body.appendChild(this.docWrapper);
	},

	createTitle : function() {
		var docTitle = document.createElement('h3');
		docTitle.classList.add('text-center');
		docTitle.style.fontSize = '24px';
		docTitle.innerHTML = this.testTitle;
		this.docWrapper.appendChild(docTitle);
	},

	createForm : function() {
		this.parentForm = document.createElement('form');
		this.parentForm.classList.add('form-group');
		this.docWrapper.appendChild(this.parentForm);
	},


	addQuestion : function(questionNumber) {
		var questionTitle = document.createElement('h4');
		var possibleAnswer = [];
		var answerLabel = [];
		var answerRadio = [];
		var answerText = [];
		questionTitle.style.fontSize = '20px';
		questionTitle.style.marginBottom = '20px';
		questionTitle.innerHTML = (questionNumber+1).toString() + '. ' + this.questionList[questionNumber].questionTitle;
		this.parentForm.appendChild(questionTitle);
		for (i=0; i < this.questionList[questionNumber].answer.length; i++) {
			possibleAnswer[i] = document.createElement('div');
			answerLabel[i] = document.createElement('label');
			answerRadio[i] = document.createElement('input');
			answerText[i] = document.createTextNode(this.questionList[questionNumber].answer[i]);

			possibleAnswer[i].classList.add('checkbox');
			possibleAnswer[i].style.marginLeft = '20px';

			answerRadio[i].setAttribute('type', 'checkbox');
			answerRadio[i].setAttribute('name', 'checkbox' + questionNumber);
			answerRadio[i].setAttribute('value', 'answer' + (i + 1) );

			this.parentForm.appendChild(possibleAnswer[i]);
			possibleAnswer[i].appendChild(answerLabel[i]);
			answerLabel[i].appendChild(answerRadio[i]);
			answerLabel[i].appendChild(answerText[i]); 
		}
	},

	createSubmit : function() {
		var submitButton = document.createElement('button');
		submitButton.setAttribute('type', 'submit');
		submitButton.classList.add('btn', 'btn-default', 'center-block');
		submitButton.innerHTML = this.submitText;
		this.parentForm.appendChild(submitButton);
	},

	createQuestionfild : function() {
		this.createWrapper();
		this.createTitle();
		this.createForm();
		for (var i = 0; i < this.questionList.length; i++) {
			this.addQuestion(i, this.parentForm);
		};
		this.createSubmit();
	}
}


programTest.testTitle = 'Тест по программированию';
programTest.submitText = 'Проверить мои результаты';

programTest.questionList[0] = {
	questionTitle : 'Вопрос №1',
	answer : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
}

programTest.questionList[1] = {
	questionTitle : 'Вопрос №2',
	answer : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
}

programTest.questionList[2] = {
	questionTitle : 'Вопрос №3',
	answer : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
}

programTest.createQuestionfild();
