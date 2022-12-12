const env = require('./.env')

const { Telegraf, Markup } = require('telegraf')

const LocalSession = require('telegraf-session-local')
const { default: axios } = require('axios')

const bot = new Telegraf(env.token)

bot.use(new LocalSession({ database: 'example_db.json' }).middleware())

bot.start(ctx => {
    const from = ctx.update.message.from
    ctx.reply(
        `Seja bem vindo(a) a Pet Care, ${from.first_name}!\nPara mais informações basta digitar ou clicar em /opcao!`
    )
})

bot.command('opcao', ctx => {
    ctx.reply(
        'Selecione uma das opções abaixo: ' +
        '\n/listaCompras: sou capaz de criar uma lista de compras 😁' +
        '\n/teclado: seu teclado estragou? acesse essa opção 🥺' +
        '\n/funcionarios: caso deseja consultar quais funcionarios trabalham na Pet Care 🤩'
    )
})

const palavra = []

const letras = Markup.inlineKeyboard(
    [
        Markup.button.callback('A', 'A'),
        Markup.button.callback('B', 'B'),
        Markup.button.callback('C', 'C'),
        Markup.button.callback('D', 'D'),
        Markup.button.callback('E', 'E'),
        Markup.button.callback('F', 'F'),
        Markup.button.callback('G', 'G'),
        Markup.button.callback('H', 'H'),
        Markup.button.callback('I', 'I'),
        Markup.button.callback('J', 'J'),
        Markup.button.callback('K', 'K'),
        Markup.button.callback('L', 'L'),
        Markup.button.callback('M', 'M'),
        Markup.button.callback('N', 'N'),
        Markup.button.callback('O', 'O'),
        Markup.button.callback('P', 'P'),
        Markup.button.callback('Q', 'Q'),
        Markup.button.callback('R', 'R'),
        Markup.button.callback('S', 'S'),
        Markup.button.callback('T', 'T'),
        Markup.button.callback('U', 'U'),
        Markup.button.callback('V', 'V'),
        Markup.button.callback('W', 'W'),
        Markup.button.callback('X', 'X'),
        Markup.button.callback('Y', 'Y'),
        Markup.button.callback('Z', 'Z')
    ],
    { columns: 4 }
)

bot.hears('/teclado', ctx => {
    ctx.reply('Seu teclado estragou? Não se preocupe! Aqui você consegue digitar palavras usando o teclado do bot! 🥳', letras)
})

bot.action('A', ctx => {
    palavra.push('A')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('B', ctx => {
    palavra.push('B')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('C', ctx => {
    palavra.push('C')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('D', ctx => {
    palavra.push('D')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('E', ctx => {
    palavra.push('E')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('F', ctx => {
    palavra.push('F')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('G', ctx => {
    palavra.push('G')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('H', ctx => {
    palavra.push('H')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('I', ctx => {
    palavra.push('I')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('J', ctx => {
    palavra.push('J')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('K', ctx => {
    palavra.push('K')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('L', ctx => {
    palavra.push('L')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('M', ctx => {
    palavra.push('M')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('N', ctx => {
    palavra.push('N')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('O', ctx => {
    palavra.push('O')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('P', ctx => {
    palavra.push('P')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('Q', ctx => {
    palavra.push('Q')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('R', ctx => {
    palavra.push('R')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('S', ctx => {
    palavra.push('S')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('T', ctx => {
    palavra.push('T')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('U', ctx => {
    palavra.push('U')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('V', ctx => {
    palavra.push('V')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('W', ctx => {
    palavra.push('W')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('X', ctx => {
    palavra.push('X')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('Y', ctx => {
    palavra.push('Y')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})
bot.action('Z', ctx => {
    palavra.push('Z')
    ctx.reply(`Palavra: ${palavra.join('')}`, letras)
})

bot.hears('/funcionarios', async ctx => {
    axios('http://localhost:3001/api/employees', {
        method: 'get',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiM2RmY2FiNzllZDIxZmQ4OWM5ZWIyNWU5ODY0YTYxNTUiLCJlbWFpbCI6ImpvYW9AdGVzdGUuY29tIn0sImlhdCI6MTY3MDc5NDM2NX0.QtKzhIWLdMbGpi2x08Ag5CFkcPmig0f0WFlOohhjKNk'
        }
    })
    .then(function (response) {
        let data = []
        data = response.data        
        ctx.reply('Aqui estão nossos funcionários cadastrados e suas especialidades')
        data.map( employee => {
            ctx.reply(`Nome: ${employee.fullName},\nEspecialidade: ${employee.expertise}`)
        })
    })
})

const itemsButtons = list =>
    Markup.inlineKeyboard(
        list.map(item => Markup.button.callback(item, `remove ${item}`)),
        { columns: 3 }
    )

bot.hears('/listaCompras', async ctx => {
    await ctx.reply('Ótimo! Aqui você pode criar uma lista de produtos que irá comprar na sua próxima visita a Pet Care!')
    ctx.session.list = []
})

bot.on('text', ctx => {
    let item = ctx.update.message.text
    ctx.session.list.push(item)
    ctx.reply(
        `O item ${item} foi adicionado a sua lista!`,
        itemsButtons(ctx.session.list)
    )
})

bot.action(/remove (.+)/, ctx => {
    ctx.session.list = ctx.session.list.filter(item => item !== ctx.match[1])
    ctx.reply(
        `${ctx.match[1]} removido da lista!`,
        itemsButtons(ctx.session.list)
    )
})

bot.startPolling()
