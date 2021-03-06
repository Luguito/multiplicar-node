const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
            // .then(tablas =>console.log(`Tabla listada ${tablas}`))
            // .catch(err => console.log(err));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.red))
            .catch(err => console.log(err));
        console.log('Creado');
        break;

    default:
        console.log('Comando no reconocido');

}

//console.log('limite', argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1];