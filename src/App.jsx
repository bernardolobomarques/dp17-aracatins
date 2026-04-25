import { useState } from 'react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('welcome');
  const [secretInput, setSecretInput] = useState('');
  const [showTutorial, setShowTutorial] = useState(true);

  const handleLogin = () => {
    // 2009447 é o nº do BO do Ato 1
    if (password === '2009447') {
      setIsAuthenticated(true);
    } else {
      alert("ACESSO NEGADO. Senha incorreta.");
    }
  };

  const handleReveal = () => {
    const input = secretInput.trim().toUpperCase();
    if (input === 'LEMOS' || input === 'CARLOS') {
      setActiveTab('reveal-lemos');
    } else if (input === 'SOUZA' || input === 'MARCELO') {
      setActiveTab('reveal-marcelo');
    } else if (input === 'FERNANDES' || input === 'LUCIA' || input === 'LÚCIA') {
      setActiveTab('reveal-lucia');
    } else if (input === 'ALVES' || input === 'BETO' || input === 'GRAXA') {
      setActiveTab('reveal-graxa');
    } else {
      alert("NOME INVÁLIDO OU NÃO LISTADO NOS AUTOS.");
    }
  };

  const closeTutorial = () => setShowTutorial(false);

  return (
    <div className="dp-container">
      <div className="window">
        <div className="window-header">
          <h1>SISP - Sistema de Informações de Segurança do Paraná</h1>
          <span>_ [ ] X</span>
        </div>

        {showTutorial && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>📁 Arquivo Digital DP17</h2>
              <p>Bem-vindo ao acervo do Sistema de Autenticação da Polícia Civil.</p>
              <ul>
                <li>Para acessar o inquérito, encontre a chave de numeração (Senha) no <strong>Boletim de Ocorrência original impresso</strong>.</li>
                <li>Aqui você encontra laudos visuais (fotos da cena) que não foram impressos.</li>
                <li>Ao final da sua investigação física e digital, você deve retornar aqui e indiciar o nome do Mandante.</li>
              </ul>
              <button onClick={closeTutorial} className="btn-retro" style={{width: '100%', marginTop: '15px'}}>ACESSAR ARQUIVO</button>
            </div>
          </div>
        )}

        <div className="window-content">
          {!isAuthenticated ? (
            <div className="login-box">
              <img src="../../images/9.png" alt="Polícia PR" width="80" style={{marginBottom: '20px'}} />
              <h2>ARQUIVO MORTO</h2>
              <p>Insira a credencial do caso para acessar mídias digitais do B.O.</p>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Insira a Senha Numérica"
              />
              <button className="btn-retro" onClick={handleLogin}>AUTENTICAR</button>
            </div>
          ) : (
            <div className="dashboard-grid">
              <div className="sidebar-menu">
                <div className={`menu-item ${activeTab === 'welcome' ? 'active' : ''}`} onClick={() => setActiveTab('welcome')}>📄 Visão Geral</div>
                <div className={`menu-item ${activeTab === 'cena' ? 'active' : ''}`} onClick={() => setActiveTab('cena')}>📷 Anexo: Foto da Cena</div>
                <div className={`menu-item ${activeTab === 'pista' ? 'active' : ''}`} onClick={() => setActiveTab('pista')}>📷 Anexo: Pista 1</div>
                <div className={`menu-item ${activeTab === 'fechar' ? 'active' : ''}`} onClick={() => setActiveTab('fechar')} style={{marginTop: '20px', borderTop: '2px dotted #ccc', color: 'red'}}>⚠️ RELATÓRIO FINAL</div>
              </div>

              <div className="viewer">
                {activeTab === 'welcome' && (
                  <div>
                    <h2 className="document-title">INQUÉRITO DE DESAPARECIMENTO 2009-447</h2>
                    <p>STATUS: <strong>REABERTO (2024)</strong></p>
                    <p>As fotos feitas pelo agente Peixoto na noite de 12/11/2009 foram digitalizadas na base abaixo.</p>
                  </div>
                )}

                {activeTab === 'cena' && (
                  <div>
                    <h2 className="document-title">FOTO DE CENA (GOL PRATA)</h2>
                    <div className="polaroid">
                      <img src="../../images/6.png" alt="Carro abandonado" />
                      <p style={{fontFamily: 'var(--font-retro)', fontSize: '1.2rem', textAlign: 'center'}}>Local do abandono - Veículo da vítima</p>
                    </div>
                  </div>
                )}

                {activeTab === 'pista' && (
                  <div>
                    <h2 className="document-title">PISTA DO ACOSTAMENTO</h2>
                    <div className="polaroid">
                      <img src="../../images/7.png" alt="Isqueiro M" />
                      <p style={{fontFamily: 'var(--font-retro)', fontSize: '1.2rem', textAlign: 'center'}}>Objeto encontrado com letra "M"</p>
                    </div>
                  </div>
                )}

                {activeTab === 'fechar' && (
                  <div>
                    <h2 className="document-title" style={{color: 'red'}}>ENCERRAMENTO DO INQUÉRITO</h2>
                    <p>Para indiciar o culpado real perante a vara criminal de Araçatins, decifre as pistas físicas e o erro nos álibis de internet (Data Central).</p>
                    <p><strong>QUEM ORDENOU O ASSASSINATO MASCARADO?</strong></p>
                    <br/>
                    <input 
                      type="text" 
                      placeholder="NOME OU SOBRENOME DO CULPADO" 
                      style={{padding: '10px', width: '100%', marginBottom: '10px', border: '2px inset #555'}}
                      value={secretInput}
                      onChange={(e) => setSecretInput(e.target.value)}
                    />
                    <button className="btn-retro" onClick={handleReveal}>INDICT</button>
                  </div>
                )}

                {activeTab === 'reveal-marcelo' && (
                  <div className="verdict-card verdict-error">
                    <h2>CASO ENCERRADO: ERRO DE INDICIAMENTO</h2>
                    <p><strong>Marcelo Souza</strong> foi indiciado publicamente. No entanto, o promotor arquivou o caso na mesma semana.</p>
                    <p>O advogado de defesa provou o óbvio: uma gota isolada de saliva no meio do banco do passageiro não sobrevive a uma luta de estrangulamento de 3 minutos sem estar acompanhada de gotículas de respingo ou poças de sangue decorrentes de asfixia mecânica. A evidência foi caracterizada no tribunal como <strong>"descaradamente forjada por coleta estática"</strong>.</p>
                    <p>Sem o álibi verificado do relatório de horários do hospital, a polícia agiu por impulso prendendo o alvo óbvio... enquanto o verdadeiro mandante continua livre em Araçatins, bebendo sua garrafa de vinho intacta.</p>
                    <button className="btn-retro" onClick={() => setActiveTab('fechar')} style={{marginTop: '15px'}}>REABRIR INVESTIGAÇÃO</button>
                  </div>
                )}

                {activeTab === 'reveal-lucia' && (
                  <div className="verdict-card verdict-blocked">
                    <h2>CASO ENCERRADO: FALTA DE NEXO CAUSAL</h2>
                    <p><strong>Lúcia Fernandes</strong> foi levada a julgamento. A promotoria tentou usar a confissão dela de roubo de pequenos valores da prefeitura como motivação para encobrir o crime.</p>
                    <p>O fio de cabelo no porta-malas confirmou de fato que ela andou escondida no carro naquela noite e roubou pertences essenciais da vítima... Porém, Lúcia tem 1,58m e 55kg. O laudo do obituário aponta para fratura do osso hióide de Elisa, o que requer compressão bimanual agressiva de no mínimo 40kg de força motriz.</p>
                    <p>O Ministério Público declarou <strong>"vício de conclusão material"</strong>. O Juiz absolveu Lúcia de homicídio e ela só respondeu pelo furto. A verdadeira pessoa que encomendou (e quem puxou a corda) continuam sorrindo pelas ruas de Araçatins.</p>
                    <button className="btn-retro" onClick={() => setActiveTab('fechar')} style={{marginTop: '15px'}}>REABRIR INVESTIGAÇÃO</button>
                  </div>
                )}

                {activeTab === 'reveal-graxa' && (
                  <div className="verdict-card verdict-partial">
                    <h2>CASO PARCIALMENTE ENCERRADO: O CÃO SEM O MESTRE</h2>
                    <p><strong>Beto Graxa</strong> foi preso na porta de um contêiner no Porto Seco.</p>
                    <p>Seu DNA recolhido do cigarro o colocou a exatos 4 metros da porta do carro. O assassinato cruento foi de fato executado por suas mãos calejadas de mecânico. No interrogatório policial, ele riu de todas as autoridades escarrando sangue: <em>"Vocês perdem o maior tempão das vidas de luxo de vocês caçando a sobra do prato, seus doutorzinho de bosta. Eu só recebi metade do cheque no adiantamento..."</em></p>
                    <p>Meses depois, Beto foi esfaqueado 6 vezes no pátio da penitenciária estadual, poucas horas antes de assinar a delação premiada de quem pagou a ele para matar. O mandante que subornou o hospital municipal destruiu suas próprias evidências cibernéticas a tempo de seguir a vida impunemente. <strong>Você perdeu o chefe final.</strong></p>
                    <button className="btn-retro" onClick={() => setActiveTab('fechar')} style={{marginTop: '15px'}}>TENTAR INDICIAMENTO DO MANDANTE</button>
                  </div>
                )}

                {activeTab === 'reveal-lemos' && (
                  <div className="verdict-card verdict-success">
                    <h2>MANDADO DE PRISÃO PREVENTIVA DEFERIDO</h2>
                    <p><strong>Dr. Carlos Lemos.</strong> Parabéns, Detetive.</p>
                    <p>A petição de prisão foi embasada legalmente nas provas do próprio B.O que afirmavam um blackout na internet GSS antes as 23h, impossibilitando que o médico estivesse batendo ponto na nuvem do Hospital de Maneira sincronizada no momento da morte, um detalhe crucial de soberba que derrubou seu álibi temporal forjado.</p>
                    <p>Perícia digital das impressoras da UTI validou que os logs vitais adulterados para "emendar" o desvio temporal provariam que estava forjando tempo livre, a qual o álibi se torna pó. Ao mandar matar a própria protegida pelas licitações, Lemos pecou com seu excesso de higiene local.</p>
                    <h3 style={{color: '#000080', borderTop: '1px solid currentColor', paddingTop: '10px', marginTop: '15px'}}>INSTRUÇÃO FINAL</h3>
                    <p>Acesse imediatamente o porta-arquivos das Escutas (Vozes do Caso) e insira o código <strong>"LEMOS"</strong> na chave decriptadora Master para ouvir a interceptação que fecha todo o loop criminal pela sua própria voz arruinada.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
