import { Perfil } from './perfil.interface';
import { Funcao } from './funcao.interface';
import { Contato } from './contato.interface';
import { Endereco } from './endereco.interface';

export interface Servico{
    id?: number;
    perfil: Perfil[]
    funcao: Funcao[];
    contato: Contato[];
    endereco: Endereco[];
}