import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TbCodeDots } from "react-icons/tb";
import "./styles/acomodacoes.css"

export default function Acomodacoes({ tema }) {

  const Acomodacoes = [
    {
      titulo: "Solteiro Simples",
      desc: "Acomodação simples para solteiro(a).",
      img: "https://th.bing.com/th/id/OIG1.jWmUZrX3KJhX3m3acSw0?pid=ImgGn",
    },
    {
      titulo: "Solteiro Mais",
      desc: "Acomodação com garagem para solteiro(a).",
      img: "https://th.bing.com/th/id/OIG3.XfiAiOcx8Yo0QeelyFiL?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    {
      titulo: "Casal Simples",
      desc: "Acomodação simples para casal.",
      img: "https://th.bing.com/th/id/OIG2.on02srjVRbj_.KmS3yTo?pid=ImgGn",
    },
    {
      titulo: "Família Simples",
      desc: "Acomodação para família com até duas crianças.",
      img: "https://th.bing.com/th/id/OIG4.mxR8MpKB8zMrooZTAN8c?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
    },
    {
      titulo: "Família Mais",
      desc: "Acomodação para família com até cinco crianças.",
      img: "https://th.bing.com/th/id/OIG3.M45XRFlIs6INY9PU._PL?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    {
      titulo: "Família Super",
      desc: "Acomodação para até duas familias, casal e três crianças cada.",
      img: "https://th.bing.com/th/id/OIG4.ZDDIadplS.vLd7aZBEwM?pid=ImgGn",
    }
  ];

  return (
    <div>
      <h1 className="sub"> Nossas acomodações: </h1>
      <br/>
      <div class="container text-center">
      <div class="row row-cols-3">
        {Acomodacoes.map((acomodacao) => (
          <div className="col">
              <img src={acomodacao.img} alt="Imagem da acomodação" />
              <h3 className="titulo"> {acomodacao.titulo} </h3>
              <h5 className="desc"> {acomodacao.desc}</h5>
          </div>
        ))}
      </div>
    </div>
      <div className="acomodacao-container">
      </div>

    </div>
  );
}