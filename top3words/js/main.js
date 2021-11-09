function getText() {
    const text = window.prompt("Вставьте текст...");
    if (typeof text === "string" && text!=null && text!="") {
        analyseText(text);
    }   else {
        window.alert('Произошла ошибка, проверьте правильность введённых данных.');
        getText();
    }

}

function analyseText(text) {
	const wordsRate = {};

    text = text.replace(/[^a-zа-яё\s]/gi, '');
    let lowText = text.toLowerCase();
    const allWords = lowText.split(' ');

    allWords.sort();

    let count = 1;

    allWords.forEach((e, i) => {
        if (e == allWords[i+1]) {
            count += 1;
        } else {
            wordsRate[e] = count;
            count = 1;
        }
    });

    printTop(wordsRate);
}

function printTop(object) {
    for (let i=1; i<4; ++i) {
        let top = sortObj(object);
        delete object[top];
        window.alert(`Топ ${i} слово - "${top}"`);
    }
}

function sortObj(obj){
    let max = 0; 
    let maxWord = "";   
        for (let key in obj) {        
            if (obj[key] >= max) {
                max = obj[key];
                maxWord = key;
            }
        }    
    return (maxWord);
}


getText();