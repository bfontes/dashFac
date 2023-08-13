//Esta linha define um objeto que contém as configurações do Jest.
module.exports = {
//Esta linha define o ambiente de teste para o Jest. Neste caso, está sendo usado o ambiente "jsdom", que simula um ambiente do navegador para testes de JavaScript.
    testEnvironment: 'jsdom',
    //Esta linha define as extensões de arquivos que o Jest deve procurar durante os testes.
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    //Esta linha define os arquivos de teste que devem ser executados pelo Jest.
    // Ele procura por arquivos que possuem "test" no nome e terminam com ".js" ou ".jsx" dentro da pasta "tests" ou suas subpastas.
    testMatch: ['**/__tests__/**/*.test.js?(x)'],
    //adicionar suporte ao Jest para testar estilos de componentes React criados com o pacote "styled-components
    setupFilesAfterEnv: ['jest-styled-components'],
    //está sendo utilizado o pacote "babel-jest" para transformar arquivos JavaScript e JSX em código compatível com o Jest.
    // "jest-transform-stub" para transformar arquivos de imagem ".jpg" em módulos vazios que podem ser importados nos testes sem causar erros
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',"\\.(jpg)$": "jest-transform-stub"
    },
};
    