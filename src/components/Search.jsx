import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='w-full bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto grid lg:grid-cols-3 gap-4 px-4 py-6'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Sobre o projeto</h2>
          <p className='py-4 text-justify'>
          Este website de motor de busca foi desenvolvido como parte do Projeto Integrador 3 na FATEC Santana de Parnaíba, com o propósito de proporcionar uma plataforma sem fins lucrativos que facilite a busca, troca e venda de photocards tanto para colecionadores quanto para empresas com CNPJ. 
          O objetivo central é garantir que o site possua alta capacidade de processamento para extrair informações de fontes como o X (antigo Twitter), Ebay, Shopee e Instagram, onde a demanda por photocards é significativa e contínua. Ao consolidar dados dessas plataformas, o website visa oferecer aos usuários uma experiência abrangente e eficiente, facilitando assim a localização e redirecionamento aos photocards desejados. A colaboração entre os estudantes da FATEC visa não apenas aprimorar suas habilidades técnicas, mas também contribuir para a comunidade de colecionadores e empresas, promovendo uma experiência de busca mais acessível e satisfatória.

          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 py-10'>

          <div className='flex flex-col lg:flex-row items-center text-center'>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Search;
