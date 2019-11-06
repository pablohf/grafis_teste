using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetWebApi.Controllers
{
    public class MensagensController : ApiController
    {
        public class NovaMensagem
        {
            public long IdCliente { get; set; }
            public string Descricao { get; set; }
        }

        [HttpPost]
        public void Post(NovaMensagem novaMensagem)
        {
            using (var contexto = new Contexto())
            {

                var clienteModelo = contexto.Clientes
                    .Where(x => x.Id == novaMensagem.IdCliente)
                    .Single();

                var mensagemModelo = new Models.Mensagem()
                {
                    Descricao = novaMensagem.Descricao,                    
                    Cliente = clienteModelo,
                    DataHora = DateTime.Now
                };

                contexto.Mensagens.Add(mensagemModelo);
                contexto.SaveChanges(); 
            }
        }
    }
}
