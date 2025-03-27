"use client"; // Necessário para usar hooks no Next.js

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa"; 

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Carregar o tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // Aplicar o tema
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Salvar a preferência no localStorage
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <header className="flex justify-between items-center p-4">
        <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Meu Portfólio</h1>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Williamsads"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/williams-am%C3%A9rico/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:seu-email@example.com"
            className={`text-2xl ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
          >
            <FaEnvelope />
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
          >
            {theme === "dark" ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Seção Sobre Mim */}
        <section id="about" className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Sobre Mim</h2>
          <div className="flex justify-center mb-4">
            {/* Sua foto */}
            <img
              src="/img/minha-foto.jpeg" // Certifique-se de que o caminho da imagem está correto
              alt="Minha foto"
              className="rounded-full w-40 h-40 object-cover border-4 border-gray-200"
              style={{ objectPosition: "top" }}
            />
          </div>
          <p className={`text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>
            Sou um analista de dados apaixonado por tecnologia, inovação e transformação digital. Com experiência em
            desenvolvimento de software e análise de dados, busco sempre melhorar minhas habilidades e aplicar
            soluções inteligentes para resolver problemas complexos.
          </p>
        </section>

        {/* Seção Tecnologias */}
        <section id="technologies" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Minhas Tecnologias</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
      
            {/* Python */}
            <div className="text-4xl">
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
              >
                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python" className="w-16 h-16 mx-auto mb-2" />
                Python
              </a>
            </div>

            {/* PostgreSQL */}
            <div className="text-4xl">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="PostgreSQL" className="w-16 h-16 mx-auto mb-2" />
                PostgreSQL
              </a>
            </div>

            {/* MySQL */}
            <div className="text-4xl">
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
              >
                <img src="https://camo.githubusercontent.com/3c3a5c5131382bd7cf36fe48618dfd2c254879588e61fcb15c61e569b373e051/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3734372f3739382f706e672d7472616e73706172656e742d6d7973716c2d6c6f676f2d6d7973716c2d64617461626173652d7765622d646576656c6f706d656e742d636f6d70757465722d736f6674776172652d646f6c7068696e2d6d6172696e652d6d616d6d616c2d616e696d616c732d746578742d7468756d626e61696c2e706e67" alt="MySQL" className="w-16 h-16 mx-auto mb-2" />
                MySQL
              </a>
            </div>

            {/* Excel */}
            <div className="text-4xl">
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/excel"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
              >
                <img src="https://static-00.iconduck.com/assets.00/ms-excel-icon-2048x2026-nws24wyy.png" alt="Excel" className="w-16 h-16 mx-auto mb-2" />
                Excel
              </a>
            </div>

            {/* Power BI */}
            <div className="text-4xl">
              <a
                href="https://powerbi.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-gray-400`}
              >
                <img src="https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" alt="Power BI" className="w-16 h-16 mx-auto mb-2" />
                Power BI
              </a>
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
<section id="projects" className="my-16">
  <h2 className={`text-3xl font-bold text-center mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>Meus Projetos</h2>

  {/* Categoria Dashboard */}
  <div className="my-8">
    <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-black" : "text-black"}`}>Dashboards</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Dashboard 1 */}
      <div className={`bg-white p-6 shadow-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-black"}`}>
        <img src="/prints/DASHBOARD VENDAS.PNG" alt="Dashboard de Vendas" className="rounded-lg mb-4" />
        <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-black" : "text-black"}`}>Dashboard de Vendas</h4>
        <p className={`mt-2 ${theme === "dark" ? "text-black" : "text-black"}`}>Um dashboard interativo para visualizar dados de vendas em tempo real, utilizando Power BI e React.</p>
        <a
          href="https://app.powerbi.com/view?r=eyJrIjoiNWZjM2NhYmUtMzg5Yy00NzI5LTg3ZTUtZWE5ZDg2YzY0YTU1IiwidCI6IjU0MWQyNjQzLWE4NmQtNGYzMC04N2Q4LWE5ZDgwZTg2YTQ5MSJ9"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white bg-blue-500 hover:bg-blue-600 hover:underline mt-2 inline-block py-2 px-4 rounded ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Ver Projeto
        </a>
      </div>

      {/* Dashboard 2 */}
      <div className={`bg-white p-6 shadow-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-black"}`}>
        <img src="/prints/DASHBOARD PRODUCAO.PNG" alt="Dashboard de Produção" className="rounded-lg mb-4" />
        <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-black" : "text-black"}`}>Dashboard de Produção</h4>
        <p className={`mt-2 ${theme === "dark" ? "text-black" : "text-black"}`}>Um dashboard interativo para acompanhar dados de produção em tempo real, utilizando Power BI.</p>
        <a
          href="https://app.powerbi.com/view?r=eyJrIjoiYjdmMzA1MjgtYTBlNi00NjRkLTk0NzktMDUzMGJlYTQxZWViIiwidCI6IjU0MWQyNjQzLWE4NmQtNGYzMC04N2Q4LWE5ZDgwZTg2YTQ5MSJ9"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white bg-blue-500 hover:bg-blue-600 hover:underline mt-2 inline-block py-2 px-4 rounded ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Ver Projeto
        </a>
      </div>

      {/* Dashboard 3 */}
      <div className={`bg-white p-6 shadow-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-black"}`}>
        <img src="/prints/DASHBOARD RH.PNG" alt="Dashboard de RH" className="rounded-lg mb-4" />
        <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-black" : "text-black"}`}>Dashboard de RH</h4>
        <p className={`mt-2 ${theme === "dark" ? "text-black" : "text-black"}`}>Dashboard para visualizar dados de Recursos Humanos, com foco em indicadores importantes do setor.</p>
        <a
          href="https://app.powerbi.com/view?r=eyJrIjoiN2MzOWMzNzItODlhMy00M2RiLWFiMGEtMzgwYjU0NjU4MWIzIiwidCI6IjU0MWQyNjQzLWE4NmQtNGYzMC04N2Q4LWE5ZDgwZTg2YTQ5MSJ9"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white bg-blue-500 hover:bg-blue-600 hover:underline mt-2 inline-block py-2 px-4 rounded ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Ver Projeto
        </a>
      </div>
    </div>
  </div>

  <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Site Web</h3>
  {/* Projeto: Site Web para ONG Naass */}
  <div className={`bg-white p-6 shadow-lg rounded-lg ${theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-black"}`}>
    <img src="/prints/site.ong.PNG" alt="Site Web para ONG Naass" className="rounded-lg mb-4" />
    <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-black" : "text-black"}`}>Site Web para ONG Naass</h3>
    <p className={`mt-2 ${theme === "dark" ? "text-black" : "text-black"}`}>Desenvolvi um site responsivo e acessível para a ONG Naass, com funcionalidades de cadastro e apoio a voluntários e doações.</p>
    <a
      href="https://nassassociacao.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white bg-blue-500 hover:bg-blue-600 hover:underline mt-2 inline-block py-2 px-4 rounded ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      Ver Projeto
    </a>
  </div>
</section>

        {/* Seção Contato */}
        <section id="contact" className="my-16 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Contato</h2>
          <p className={`text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>
            Se você tiver interesse em colaborar, aprender mais sobre meus projetos ou discutir ideias, entre em
            contato!
          </p>
          <a
            href="mailto:seu-email@example.com"
            className={`text-blue-500 hover:underline mt-4 inline-block ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Enviar um e-mail
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
