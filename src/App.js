import "./App.css";
import phone from "../src/images/smartphone.png";
import video from "../src/images/video.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul
          style={{
            width: "47%",
            display: "flex",
            position: "absolute",
            top: 26,
            alignItems: "center",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li>
            <a href="#about" className="header_link">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#cards" className="header_link">
              Benefícios
            </a>
          </li>
          <li>
            <a href="#mentoria" className="header_link">
              Conteúdo
            </a>
          </li>
          <li>
            <a href="#depoiments" className="header_link">
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#contact" className="header_link">
              Contato
            </a>
          </li>
        </ul>
        <div className="top-content">
          <h2 className="name">| Carlos Ribeiro</h2>
          <h1 className="header-title">Saia da estaca zero!</h1>
          <span className="header-subtitle">
            Alcance a sua liberdade financeira através desse conteúdo exclusivo
          </span>
          <button className="header-button">Conhecer agora</button>
        </div>

        <div className="img_banner">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Model-Man-PNG.png"
            alt="Man"
            className="header-img"
          />
        </div>
      </header>

      <div className="about_content" id="about">
        <div className="cards_column">
          <h1 className="about_title">Sobre mim</h1>

          <div className="about_card">
            <span className="card_text">
              10 anos de experiência com marketing
            </span>
          </div>

          <div className="about_card" style={{ marginLeft: 120 }}>
            <span className="card_text">Mais de 5.000 alunos cadastrados</span>
          </div>

          <div className="about_card">
            <span className="card_text">
              800 aulas registradas na plataforma
            </span>
          </div>

          <div className="about_card" style={{ marginLeft: 120 }}>
            <span className="card_text">Mais de 50 milhões faturados</span>
          </div>
        </div>

        <div className="about_img_content">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Model-Man-PNG.png"
            alt="Man"
            className="about_image"
          />
        </div>
      </div>

      <div className="cards_content" id="cards">
        <h1 className="cards_content_title">
          Essa mentoria vai te possibilitar
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="card">
            <div className="card_block" />

            <div className="center_card">
              <h2 className="card_title">Lucro rápido</h2>
              <span className="card_description">
                Lucrar seus primeiros R$ 10.000,00 com o marketing digital
              </span>
            </div>
          </div>
          <div className="card" style={{ marginBottom: 120 }}>
            <div className="card_block" />

            <div className="center_card">
              <h2 className="card_title">Qualidade de vida</h2>
              <span className="card_description">
                Dar uma vida melhor a si mesmo e as pessoas ao seu redor
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card_block" />

            <div className="center_card">
              <h2 className="card_title">Conteúdo único</h2>
              <span className="card_description">
                Ter acesso a um conteúdo exclusivo e valioso sobre negócios
                digitais
              </span>
            </div>
          </div>
          <div className="card" style={{ marginBottom: 120 }}>
            <div className="card_block" />

            <div className="center_card">
              <h2 className="card_title">Construa seu negócio</h2>
              <span className="card_description">
                Passo a passo para a construção de um negócio sólido e lucrativo
              </span>
            </div>
          </div>
        </div>

        <button className="access_button">Quero ter acesso</button>
      </div>

      <div className="infos_content" id="mentoria">
        <h1 className="info_title">O que é a mentoria?</h1>

        <div className="info_center_content">
          <img src={video} alt="Thumbnail" className="thumbnail" />

          <ul style={{ color: "#fff" }}>
            <li style={{ marginBottom: 10 }}>Vídeo-aulas</li>
            <li style={{ marginBottom: 10 }}>Ensinamentos na prática</li>
            <li style={{ marginBottom: 10 }}>Suporte 24H</li>
            <li style={{ marginBottom: 10 }}>Acesso vitalício</li>
            <li>Conteúdo exclusivo</li>
          </ul>
        </div>
      </div>

      <div className="depoiments_content" id="depoiments">
        <div className="depoiments_title_content">
          <h1 className="depoiments_title">Depoimentos de alunos</h1>
        </div>

        <div className="depoiments_column">
          <div className="depoiments_cards">
            <span className="description">
              "Já consegui lucrar meus R$ 10.000 em 15 dias de mentoria. Sou
              imensuravelmente grato!!!!"
            </span>

            <div className="name_content">
              <span>Joao Ferraz</span>
            </div>
          </div>
          <div className="depoiments_cards" style={{ marginLeft: -140 }}>
            <span className="description">
              "Larguei meu emprego e agora vivo muito bem com os lucros do meu
              negóico online."
            </span>

            <div className="name_content">
              <span>Luiz Pedroso</span>
            </div>
          </div>
          <div className="depoiments_cards">
            <span className="description">
              "Essa mentoria foi o melhor investimento que eu já fiz na vida!!
              Já indiquei para vários amigos."
            </span>

            <div className="name_content">
              <span>Laura Guimarães</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_content" id="contact">
        <div className="contact_text_content">
          <h1 className="contact_title">Entre em contato</h1>
          <span className="contact_subtitle">
            Tire suas dúvidas através do nosso WhatsApp
          </span>
          <button className="contact_button">Chamar no Whats</button>
        </div>

        <div className="contact_img_content">
          <img
            src={phone}
            alt="Smartphone"
            height={450}
            style={{ marginLeft: -45 }}
          />
        </div>
      </div>

      <footer className="footer_content">
        <div className="footer_row">
          <div className="text_footer_content">
            <h2 className="title_footer">O que é a mentoria?</h2>
            <span className="desc_footer">
              Uma série de vídeo-aulas onde você aprenderá a lucrar seus
              primeiros R$ 10.000,00 com o marketing digital
            </span>
            <button className="text_footer_button">Quero acessar</button>
          </div>
          <hr style={{ height: "38vh", backgroundColor: "#aaa" }} />
          <div className="contact_footer_content">
            <div className="contact_item">
              <div className="item_button">
                <FaWhatsapp size={30} color="#fff" />
              </div>
              <span className="icon_name">WhatsApp</span>
            </div>

            <div className="contact_item">
              <div className="item_button">
                <FaInstagram size={30} color="#fff" />
              </div>
              <span className="icon_name">Instagram</span>
            </div>

            <div className="contact_item">
              <div className="item_button">
                <FaTiktok size={30} color="#fff" />
              </div>
              <span className="icon_name">TikTok</span>
            </div>

            <div className="contact_item">
              <div className="item_button">
                <FaLinkedinIn size={30} color="#fff" />
              </div>
              <span className="icon_name">LinkedIn</span>
            </div>
          </div>
          <hr style={{ height: "38vh", backgroundColor: "#aaa" }} />
          <div className="email_footer_content">
            <h2 className="title_footer">Cadastre-se aqui</h2>
            <span className="desc_footer">
              Cadastre seu e-mail para receber atualizações sobre a mentoria
            </span>
            <input className="footer_input" placeholder="Digite aqui" />
            <button className="footer_button">Enviar</button>
          </div>
        </div>

        <div className="bottom_footer">
          <span className="bottom_text">
            © Copywrite - Todos os direitos reservados
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
