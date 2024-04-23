const quotes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
    "A mente é tudo. Você se torna o que você pensa. - Buda",
    "Se você quer viver uma vida feliz, amarre-se a uma meta, não a pessoas ou coisas. - Albert Einstein",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações. - Dalai Lama",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
    "A única limitação é aquela que você coloca em si mesmo. - Muhammad Ali",
    "Acredite em si mesmo e tudo é possível. - Virgil",
    "O fracasso é a oportunidade de começar de novo, mas desta vez de forma mais inteligente. - Henry Ford",
    "Não espere por circunstâncias ideais. Simplesmente avance e faça o que puder com o que você tiver. - Theodore Roosevelt",
    "Não são os anos em sua vida que contam. É a vida nos seus anos. - Abraham Lincoln",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
    "O segredo de ficar à frente é começar. - Mark Twain",
    "Não deixe que o que você não pode fazer interfira no que você pode fazer. - John Wooden",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta. - Winston Churchill",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs"

];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateQuote);

// gera os bagui
generateQuote();
