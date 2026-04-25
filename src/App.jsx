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
    if (secretInput.toUpperCase() === 'LEMOS') {
      setActiveTab('reveal');
    } else {
      alert("NOME INVÁLIDO. O mandante inserido não confere com nossas evidências focais.");
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

                {activeTab === 'reveal' && (
                  <div style={{background: '#ffffcc', padding: '15px', border: '1px solid #aaa'}}>
                    <h2>CASO RESOLVIDO: O ERRO DO DR. CARLOS LEMOS</h2>
                    <p>Parabéns Detetive. Você não se deixou enganar pelo isqueiro roubado nem pela saliva plantada no carro.</p>
                    <p>A prova principal da queda do hospital GSS anula o único álibi perfeito do cirurgião.</p>
                    <p>Acesse imediatamente a pasta de Vozes Escutadas (Vozes do Caso) e insira a decodificação "LEMOS" para liberar a Confissão Final do Ato 5.</p>
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
