import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Pedido {
	public Id: number;
	public Numero: number;
}

@Component({
	selector: 'app-pedidos',
	templateUrl: './pedidos.component.html',
	styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

	pedidos: Pedido[] = [];

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		this.http.get<Pedido[]>('http://localhost:49493/api/pedidos/')
			.subscribe(x => {
				this.pedidos = x;
			});
	}

	produto(pedido: Pedido) {
		this.router.navigate(['pedidos/' + pedido.Id + '/produto']);
	}

	novoPedido() {
		this.router.navigate(['pedidos/cadastro']);		
    }
    
    clientes(){
        this.router.navigate(['clientes']);
    }

}


