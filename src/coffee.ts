import American from './assets/american.png'
import Arabian from './assets/arabian.png'
import Capuccino from './assets/capuccino.png'
import Latte from './assets/latte.png'
import Simple from './assets/simple.png'
import Chocolate from './assets/chocolate.png'
import Mocaccino from './assets/mocaccino.png'
import Macchiato from './assets/macchiato.png'
import Iced from './assets/iced.png'
import Cuban from './assets/cuban.png'
import Hawai from './assets/hawai.png'
import Irish from './assets/irish.png'
import Creamy from './assets/creamyEspresso.png'
import MilkCoffe from './assets/milkAndCoffee.png'
import { Coffee } from './interface'

export const coffees: Coffee[] = [
  {
    id: '4a90d31f-58d7-4050-9e54-4a7e92347e80',
    name: 'Expresso Tradicional',
    price: 9.99,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: Simple
  },
  {
    id: '10a3dc6c-366d-431a-a648-d812694c7965',
    name: 'Expresso Americano',
    price: 9.99,
    type: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: American
  },
  {
    id: '24f5ede2-dd89-4880-bdf4-ae8c43ee87bc',
    name: 'Expresso Cremoso',
    price: 9.99,
    type: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: Creamy
  },
  {
    id: 'c7a173e7-9636-45d2-bb63-ac9846810c9a',
    name: 'Expresso Gelado',
    price: 9.99,
    type: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: Iced
  },
  {
    id: '847daecf-8c2a-45b8-b019-8943c8789fc8',
    name: 'Café com Leite',
    price: 9.99,
    type: ['tradicional', 'com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: MilkCoffe
  },
  {
    id: 'ff6c218d-62f4-49fe-b79a-8d923dce6b4c',
    name: 'Latte',
    price: 9.99,
    type: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Latte
  },
  {
    id: '979b016b-c2a1-46f9-9c32-e33986462d57',
    name: 'Capuccino',
    price: 9.99,
    type: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: Capuccino
  },
  {
    id: '14f834ef-ef85-4bfe-9902-8ad34714d4c1',
    name: 'Macchiato',
    price: 9.99,
    type: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: Macchiato
  },
  {
    id: '2cb407dc-ce15-4a7d-812f-428562654f0f',
    name: 'Mocaccino',
    price: 9.99,
    type: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mocaccino
  },
  {
    id: 'e0e4ddc1-5879-447a-b76d-891dfc17227a',
    name: 'Chocolate Quente',
    price: 9.99,
    type: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: Chocolate
  },
  {
    id: 'd54e652e-2347-4ae9-8022-7f205467e901',
    name: 'Cubano',
    price: 9.99,
    type: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Cuban
  },
  {
    id: '6b8c3b24-0015-4c70-8ae2-3d2c0c640939',
    name: 'Havaiano',
    price: 9.99,
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Hawai
  },
  {
    id: '1c356616-794f-440a-9d0d-c5c5c8d0dc1a',
    name: 'Árabe',
    price: 9.99,
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Arabian
  },
  {
    id: 'bc608ba8-32e4-4bdf-aa8b-5d3a72455f00',
    name: 'Irlandês',
    price: 9.99,
    type: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Irish
  },
]