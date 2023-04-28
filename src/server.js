import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,

        models: {
            shoe: Model,
        },

        seeds(server) {
            server.create('shoe', {
                id: 1, favorite: false, cart: false, name: "Nike Air Max Dia", price: 14090, discount: 0, img: require('./assets/1.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
            server.create('shoe', {
                id: 2, favorite: false, cart: false, name: "Nike Downshifter 10", price: 28090, discount: 10, img: require('./assets/2.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
            server.create('shoe', {
                id: 3, favorite: false, cart: false, name: "Nike Squidward Tentacles", price: 56090, discount: 15, img: require('./assets/3.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
            server.create('shoe', {
                id: 4, favorite: false, cart: false, name: "Nike Epic React Flyknit 2", price: 22090, discount: 5, img: require('./assets/4.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
            server.create('shoe', {
                id: 5, favorite: false, cart: false, name: "Nike Joyride Run Flyknit", price: 12090, discount: 22, img: require('./assets/5.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
            server.create('shoe', {
                id: 6, favorite: false, cart: false, name: "Nike Air Max Dia", price: 92090, discount: 0, img: require('./assets/6.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
            });
        },
        // seeds(server) {
        //     server.create('shoe', {
        //         id: 1, favorite: true, cart: false, name: "Nike Air Max Dia", price: 14090, discount: 0, img: require('./assets/1.png'), description: "O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético"
        //     });
        // },

        routes() {
            this.namespace = 'api';

            this.get('/shoes', (schema) => {
                return schema.shoes.all();
            }, { timing: 2000 });

            // this.get('/favorites', (schema) => {
            //     return schema.shoes.all();
            // }, { timing: 2000 });
        },
    });

    return server;
}
