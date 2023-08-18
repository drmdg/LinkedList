function Nodo(data) {
    return {
      data: data,
      nextNodo: null
    };
  }
  
  

function LinkedList(data){
    return{
        listahead:Nodo(data),
        listatail:Nodo(data),
        append(data) {
            
            let atual=Nodo(data);
            
            if(this.listahead.nextNodo==null){
                this.listahead.nextNodo=atual;
            }
            this.listatail.nextNodo=atual;
            this.listatail=atual;

        },

        prepend(data){
            let atual=Nodo(data);
            atual.nextNodo=this.listahead;
            this.listahead=atual;

        },
        size(){
            let atual=this.listahead;
            for(i=0;atual!=null;i++){
                atual=atual.nextNodo;
            };
            return i;
        },

        head(){
            return this.listahead;
        },
        tail(){
            return this.listatail;

        },
        imprime(){
            let atual=this.listahead;
            while(atual!=null){
                console.log(atual.data);
                atual=atual.nextNodo;
            }
        },
        at(index){
            let atual=this.listahead;
            for(i=0;i<index;i++){
                atual=atual.nextNodo;
            }
            return atual;
        },
        pop(){
            let atual= this.listahead;
            if(atual==null){
                return;
            }else if(atual.nextNodo==null){
                this.listahead.data=null;
                this.listahead.nextNodo=null;
                this.listatail=this.listahead;
                return this.listahead;
            }else{
                let aux= this.listahead;
                atual=atual.nextNodo;
                while(atual.nextNodo!=null){
                    atual=atual.nextNodo;
                    aux=aux.nextNodo;
    
                }
                aux.nextNodo=null;
                this.listatail=aux;
            }
            

        },
        contains(value){
            let atual=this.listahead;
            while(atual!=null){
                if(atual.data==value){
                    return true;
                }
                atual=atual.nextNodo;
            }
            return false;

        },
        find(value){
            let atual=this.listahead;
            let index=0;
            while(atual!=null){
                if(atual.data==value){
                    return index;
                }
                index++;
                atual=atual.nextNodo;
            }
            return null;

        },
        tostring(){
            let str = "";
            let atual=this.listahead;
            if(atual==null){
                return str;
            }
            while(atual!=null){
                str=str + ` (${atual.data}) -> `
                atual=atual.nextNodo;
            }
            return str;

        }




    }
}

let x = LinkedList('15');
  x.append('20');
  x.append('25');
  x.append('38');
  x.prepend('23');
  x.imprime();
  x.tostring();
  