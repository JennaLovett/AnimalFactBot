const SlackBot = require('slackbots');
const axio = require('axios');

const bot = new SlackBot({
    token: 'xoxb-380909651776-382620614022-xYvr9f2ZLXqAo3cTXDRPhkit',
    name: 'factbot'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':dog:'
    }
    
    bot.postMessageToChannel('general', 'You will get facts about random animals!', params);
});


bot.on('error', (err) => {
    console.log(err);
});

bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

function handleMessage(message) {
    if(message.includes(' dog')) {
        dogFact();
    } else if(message.includes(' cat')){
        catFact();
    } else if (message.includes(' cow')) {
        cowFact();
    } else if (message.includes(' jellyfish')) {
        jellyfishFact();
    } 
}

//func tells dog fact
function dogFact() {
    axio.get('http://uraqt.xyz/api/animalfacts/animal/dog')
        .then(res => {
            const fact = res.data;

            //send fact to slack
            const params = {
                icon_emoji: ':dog:'
            }
            
            bot.postMessageToChannel('general', `Dog Fact: ${fact}`, params);
        });
}


//func tells cat fact
function catFact() {
    axio.get('http://uraqt.xyz/api/animalfacts/animal/cat')
        .then(res => {
            const fact = res.data;

            //send fact to slack
            const params = {
                icon_emoji: ':cat:'
            }
            
            bot.postMessageToChannel('general', `Cat Fact: ${fact}`, params);
        });
}

//func tells cow fact
function cowFact() {
    axio.get('http://uraqt.xyz/api/animalfacts/animal/cow')
        .then(res => {
            const fact = res.data;

            //send fact to slack
            const params = {
                icon_emoji: ':cow:'
            }
            
            bot.postMessageToChannel('general', `Cow Fact: ${fact}`, params);
        });
}


//func tells jelly fact
function jellyfishFact() {
    axio.get('http://uraqt.xyz/api/animalfacts/animal/jellyfish')
        .then(res => {
            const fact = res.data;

            //send fact to slack
            const params = {
                icon_emoji: ':fish:'
            }
            
            bot.postMessageToChannel('general', `Jellyfish Fact: ${fact}`, params);
        });
}
