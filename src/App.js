import React from "react";
import logo from './assets/Instagram_logo.png';
import { RiFacebookBoxFill } from "react-icons/ri";
import gplay from './assets/G-play.png';
import micrsft from './assets/microsoft.png'

function App() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex flex-col justify-center h-screen gap-3  ">
        <div className="w-96 flex flex-col border-2">

          <div className="flex justify-center p-10">
            <img src={logo} className="w-48" />
          </div>

          <div className="flex flex-col gap-4  items-center ">
            <input type="text" placeholder="  Telefone, nome de usuário ou email" name="nome" className="h-10 w-72 border-2 rounded" />
            <input type="password" placeholder=" Senha" name="senha" className="h-10 w-72 border-2 rounded" />
            <button type="submit" className="bg-blue-500 h-8 text-white rounded-lg w-72 ">Entrar</button>
          </div>

          <div className="flex flex-row justify-center gap-3 items-center p-5">
            <div> <hr className=" border-gray-300 w-32" /> </div>
            <div> <h1>OU</h1> </div>
            <div> <hr className=" border-gray-300 w-32" /> </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center flex-col">
              <div className="flex flex-row justify-center">
                <RiFacebookBoxFill size={24} className="fill-blue-900" />
                <a href="#" className="text-sm text-blue-900 font-bold">   Entrar com o Facebook</a>
              </div>
              <div className="flex justify-center p-4">
                <a href="#" className="text-xs">Esqueceu a senha?</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-2 h-16 items-center">
          <h3>Não tem uma conta? <a href="#" className="text-blue-700">Cadastre-se</a> </h3>
        </div>


        <div className="flex flex-col justify-center items-center w-96">
          <div>
            <h2>Obtenha o aplicativo.</h2>
          </div>
          <div className="flex flex-row justify-center items-center h-20 ">
            <img src={gplay} className="w-44" />
            <img src={micrsft} className="h-10" />
          </div>
        </div>
      </main>

      <footer className=" flex w-full justify-center items-center flex-col ">
        <div className="flex gap-4">
          <a href="#">Meta</a>
          <a href="#">Sobre</a>
          <a href="#">Blog</a>
          <a href="#">Carreiras
          </a>
          <a href="#">
          Ajuda</a>
          <a href="#">API</a>
      
        </div>
        <div>
          <h4>&copy; 2024 Instagram for Meta</h4>
        </div>

      </footer>
    </div>
  );
}

export default App;
