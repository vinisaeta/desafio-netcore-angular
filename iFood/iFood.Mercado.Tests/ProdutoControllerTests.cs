using System;
using iFood.Mercado.API.Controllers;
using iFood.Mercado.API.DTO;
using iFood.Mercado.Domain.Produto;
using NSubstitute;
using NUnit.Framework;

namespace iFood.Mercado.Tests
{
    public class ProdutoControllerTests
    {
        private ProdutoController _sut;
        private IProdutoRepository _repository;

        public ProdutoControllerTests()
        {
            _repository = Substitute.For<IProdutoRepository>();
            _sut = new ProdutoController(_repository); 
        }

        [Test]
        public void Adicionar_um_produto()
        {
            // Given
            var dto = new ProdutoDTO
            {
                Id = Guid.NewGuid(),
                Nome = new string('*', 50),
                ValorDeVenda = 10
            };

            // When
            _sut.Adicionar(dto);

            // Then
            _repository.Received(1).Adicionar(Arg.Is<Produto>(x => 
                x.Id == dto.Id && 
                x.Nome == dto.Nome && 
                x.ValorDeVenda == dto.ValorDeVenda && 
                x.Imagem == dto.Imagem));
        }
        
        [Test]
        public void Alterar_um_produto()
        {
            // Given
            var dto = new ProdutoDTO
            {
                Id = Guid.NewGuid(),
                Nome = new string('*', 50),
                ValorDeVenda = 10
            };

            _repository.ObterPorId(dto.Id).Returns(new Produto(dto.Id, dto.Nome, dto.ValorDeVenda, dto.Imagem));

            // When
            _sut.Alterar(dto);

            // Then
            _repository.Received(1).Alterar(Arg.Is<Produto>(x => 
                x.Id == dto.Id && 
                x.Nome == dto.Nome && 
                x.ValorDeVenda == dto.ValorDeVenda && 
                x.Imagem == dto.Imagem));
        }
        
        [Test]
        public void Remover_um_produto()
        {
            // Given
            var dto = new ProdutoDTO
            {
                Id = Guid.NewGuid(),
                Nome = new string('*', 50),
                ValorDeVenda = 10
            };
            
            _repository.ObterPorId(dto.Id).Returns(new Produto(dto.Id, dto.Nome, dto.ValorDeVenda, dto.Imagem));

            // When
            _sut.Remover(dto.Id);

            // Then
            _repository.Received(1).Remover(Arg.Is<Produto>(x => 
                x.Id == dto.Id && 
                x.Nome == dto.Nome && 
                x.ValorDeVenda == dto.ValorDeVenda && 
                x.Imagem == dto.Imagem));
        }
    }
}