

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Cliente {
	public Id: number;
	public Nome: string;
}

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	clientes: Cliente[] = [];

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		this.http.get<Cliente[]>('http://localhost:49493/api/clientes/')
			.subscribe(x => {
				this.clientes = x;
			});
	}

	novo() {
		this.router.navigate(['clientes/cadastro']);
	}

	mensagens(cliente: Cliente) {
		this.router.navigate(['clientes/' + cliente.Id + '/mensagens']);
	}

	novoProduto() {
		this.router.navigate(['produtos']);		
	}

	novoPedido(){
		this.router.navigate(['pedidos']);
	}

}


