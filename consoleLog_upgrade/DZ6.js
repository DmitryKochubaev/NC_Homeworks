const defaultConsole = console.log.bind(console);

console.log = (...argument) => {
    defaultConsole(new Date() + ' | ', ...argument);
};

console.log('info');