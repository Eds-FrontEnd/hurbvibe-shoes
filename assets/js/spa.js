const updateContent = (content, pageName, url) => {
    document.querySelector('.spa').innerHTML = content;
    history.pushState({ page: pageName }, pageName, url);
    document.querySelector(".header_search").style.display = "none";
};

document.querySelector('.logo').addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState({ page: 'home' }, 'home', '/');
    window.location.reload();
});

document.querySelector('.lancamento').addEventListener('click', (event) => {
    event.preventDefault();
    const lançamentoContent = `
        <div class="lancamento">
            <div class="lancamento-info">
                <img src="../../assets/img/nike_yellow.png" alt="Lançamento - Nike Dourado com total conforto e alta tecnologia" />
                <span>
                    <h1>Lançamento</h1>
                    <p>Apresentamos o novo <strong>Nike Dourado</strong>, um tênis que combina tecnologia de ponta e estilo arrojado para proporcionar uma experiência única a cada passo. Com um sistema de <em>amortecimento de última geração</em>, este calçado garante <strong>conforto total</strong>, permitindo que você se mova com liberdade e confiança, seja durante um treino intenso ou em um passeio casual.</p>
                    <p>Seu design <em>futurista</em> e <span style="color: vibrantColor;">cores vibrantes</span> não apenas capturam a atenção, mas também refletem uma ousadia que combina perfeitamente com o estilo de vida ativo. A leveza do Nike Dourado faz com que você quase se esqueça de que está usando um tênis, enquanto sua estrutura esportiva oferece o suporte necessário para <strong>performance máxima</strong>.</p>
                    <p>Seja você um atleta dedicado ou um amante da moda, o Nike Dourado é a escolha ideal para quem busca não apenas desempenho, mas também um toque de <strong>elegância</strong>. Prepare-se para elevar seu jogo e impressionar com um calçado que é tão inovador quanto você.</p>
                </span>
            </div>
        </div>
        <div class="container-cards"></div>
    `;
    updateContent(lançamentoContent, 'lançamento', '/lancamento');
});

document.querySelector('.despojado').addEventListener('click', (event) => {
    event.preventDefault();
    const despojadosContent = `
        <div class="despojado">
            <div class="despojado-info">
                <img src="../../assets/img/despojado.png" alt="Tênis Despojado se destaca não apenas pela performance, mas também pelo visual moderno e descolado" />
                <span>
                    <h1>Despojado</h1>
                    <p>Descubra o Tênis Despojado, desenvolvido especialmente para corredores que valorizam conforto e estilo. Com um design atlético que combina funcionalidade e estética, este calçado foi projetado para acompanhar seu ritmo, oferecendo o suporte necessário para cada passo.</p>
                    <p>Feito com materiais leves e respiráveis, o Tênis Despojado proporciona uma ventilação ideal, mantendo seus pés frescos durante longas corridas. Seu solado emborrachado garante aderência em diferentes superfícies, enquanto o sistema de amortecimento absorve o impacto, permitindo uma corrida suave e sem esforço.</p>
                    <p>Seja na pista, na trilha ou na rua, o Tênis Despojado se destaca não apenas pela performance, mas também pelo visual moderno e descolado. Com cores vibrantes e um design que se destaca, ele é a escolha perfeita para quem quer se sentir bem e estiloso enquanto conquista novos desafios.</p>
                    <p>Experimente a combinação perfeita de conforto, estilo e performance com o Tênis Despojado e leve suas corridas para o próximo nível!</p>
                </span>
            </div>
        </div>
    `;
    updateContent(despojadosContent, 'despojado', '/despojado');
});

document.querySelector('.exclusivo').addEventListener('click', (event) => {
    event.preventDefault();
    const exclusivoContent = `
        <div class="exclusivo">
            <div class="exclusivo-info">
                <img src="../../assets/img/exclusivo.png" alt="Lançamento - Nike Dourado com total conforto e alta tecnologia" />
                <span>
                    <h1>Exclusivo</h1>
                    <p>Apresentamos o <strong>Tênis Exclusivo</strong>, uma peça única que reflete seu jeito de ser. Mais do que um calçado, é uma extensão da sua personalidade, permitindo que você se destaque a cada passo. Com um design personalizado, este tênis é feito sob medida para quem busca um estilo autêntico e inconfundível.</p>
                    <p>Cada detalhe foi pensado para criar uma moldura perfeita para a sua marca pessoal. Seu estilo arrojado e exclusivo combina cores vibrantes e padrões únicos, garantindo que você seja notado em qualquer lugar. Seja na pista, na rua ou em qualquer ocasião, o <strong>Tênis Exclusivo</strong> é a escolha ideal para quem não tem medo de ser diferente.</p>
                    <p>Com um sistema de <em>conforto e suporte de última geração</em>, ele proporciona uma experiência de uso sem igual, permitindo que você se mova com liberdade e confiança. Este é mais do que um tênis; é uma afirmação de estilo e autenticidade. Prepare-se para mostrar ao mundo sua verdadeira essência com o <strong>Tênis Exclusivo</strong>.</p>
                </span>
            </div>
        </div>
    `;
    updateContent(exclusivoContent, 'exclusivo', '/exclusivo');
});

document.querySelector('.contato').addEventListener('click', (event) => {
    event.preventDefault();
    const contatoContent = `
        <div class="contato">
            <h1>Entre em contato conosco!</h1>
            <p><strong>Fone:</strong> (11) 2222-2222</p>
            <p><strong>Email:</strong> lorenipsilu@hurbyshoes.com.br</p>
        </div>
    `;
    updateContent(contatoContent, 'contato', '/contato');
});
