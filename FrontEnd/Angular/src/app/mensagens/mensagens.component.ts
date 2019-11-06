import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PedidosComponent } from '../pedidos/pedidos.component';

class Mensagem {
	public Descricao: string;
	public DataHora: Date;
}

class Pedido {
	public Numero: number;
}

class Cliente {
	public Nome: string;
}

@Component({
	selector: 'app-mensagens',
	templateUrl: './mensagens.component.html',
	styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

	mensagens: Mensagem[] = [];

	pedidos: Pedido[] = [];
	
	cliente: Cliente = new Cliente();

	idContato: number;
	idCliente: number;

	constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
		this.idCliente = this.activatedRoute.snapshot.params['id'];
	}

	ngOnInit() {

		this.http.get<Cliente>('http://localhost:49493/api/clientes/' + this.idCliente)
			.subscribe(x => this.cliente = x);		

		this.http.get<Mensagem[]>('http://localhost:49493/api/clientes/' + this.idCliente + '/mensagens')
			.subscribe(x => this.mensagens = x);

		this.http.get<Pedido[]>('http://localhost:49493/api/pedidos/' + this.idContato + '/pedidos')
			.subscribe(x => this.pedidos = x);
	}

	novaMensagem() {
		this.router.navigate(['clientes/' + this.idCliente + '/mensagens/cadastro']);
	}

	novoPedido(){
		this.router.navigate(['clientes/' + this.idContato + '/pedidos/cadastro']);
	}

	clientes(){
		this.router.navigate(['clientes']);
	}
}


