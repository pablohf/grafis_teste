using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
/*
namespace AspNetWebApi.Controllers
{
    public class PedidosController : ApiController
    {
        public class NovoPedido
        {
            public long IdCliente { get; set; }
            public long Numero { get; set; }
            //public long ValorTotal { get; set; }
        }

        [HttpPost]
        public void Post(NovoPedido novoPedido)
        {
            using (var contexto = new Contexto())
            {
                var clienteModelo = contexto.Clientes
                    .Where(x => x.Id == novoPedido.IdCliente)
                    .Single();

                var pedidoModelo = new Models.Pedido()
                {
                    Numero = novoPedido.Numero,
                    Contato = contatoModelo,                    
                    DataHora = DateTime.Now
                };

                contexto.Pedidos.Add(pedidoModelo);
                contexto.SaveChanges();
            }
        }
    }
}
*/