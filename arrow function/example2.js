let Script = {
    name: 'Jahid',
    libraries: ['Paython', 'Javascript', 'Vue', 'React', 'Angular'],

    printLibraries: function(){
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
}

Script.printLibraries();