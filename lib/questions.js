const colorKeywords = require('./colorKey.js')

const questions = [

    {
        //Text enter 3 characters
        name: 'text',
        message: 'What is the text wanted? Enter up to 3 characters',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log('Text must be three charaters or less!')
            }
            return true;
        }
    },

    {
        //Text color
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose color format:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        //validates color
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color keyword',
        when: (answers) => {
            if (answers.textColorChoice === 'color keyword') {
                return true;
            }
                return false;
        },
        
            validate: (answer) => {
                let answerLowerCase = answer.toLowerCase();
                for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                    if (answerLowerCase.indexOf(colorKeywords[i]) !== -1) {
                        return true;
                    }}
                    return console.log('Please enter a valid color keyword')
            }
    },
            {
              //hexadecimal 
                type: 'input',
                name: 'textColor',
                message: 'Enter the hexadecimal number(#CCCCCC)',
                when: (answers) => {
                    if (answers.textColorChoice === 'hexadecimal') {
                        return true;
                    }
                    return false;
                },
            validate: (answer) => {
                const hexRegEx = '^#[A-Fa-f0-9]{6}$'
                if (!answer. match(hedRegEx)) {
                    return console.log('Please enter a valid hexadecimal')
                }
                return true;
      }
  },

    
    {
        //Shape choice
        name: 'shape',
        message: 'Which shape would you like for your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle']
    },

    {
        //Shape color
        name: 'shapeColorChoice',
        message: 'What color would you like your shape to be?',
        type: 'list',
        choices: ['colorKeywords', 'hexidecimal']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color or keyword',
        when: (answers) => {
            if (answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;

        },
        
        validate: (answer) => {
            let answerLowerCase = answer.toLowerCase();
            for (let i = 0, len =colorKeywords.length; i < len; i++) {
                if (answerLowerCase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log('Please enter a valid color keyword')
            }
        },

        {
            //hexadecimal 
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the hexadecimal number(#CCCCCC)',
            when: (answers) => {
                if (answers.shapeColorChoice === 'hexadecimal') {
                    return true;
                }
                return false;
            },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer. match(hexRegEx)) {
                return console.log('Please enter a valid hexadecimal')
            }
            return true;
        }
    },

];