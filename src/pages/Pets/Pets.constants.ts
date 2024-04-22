interface IFilterColumns {
    name: 'gender' | 'size' | 'type'
    title: string
    options: { value: string; text: string }[]
}

export const filterColumns: IFilterColumns[] = [
    {
        name: 'type',
        title: 'Espécie',
        options: 
        [
            {
                value: '',
                text: 'Todos',
            },
            {
                value: 'Cachorro',
                text: 'Cachorros',
            },
            {
                value: 'Gato',
                text: 'Gatos',
            },
        ],
    },
    {
        name: 'size',
        title: 'Porte',
        options: 
        [
            {
                value: '',
                text: 'Todos',
            },
            {
                value: 'Pequeno',
                text: 'Pequeno',
            },
            {
                value: 'Médio',
                text: 'Médio',
            },
            {
                value: 'Grande',
                text: 'Grande',
            },
        ],
    },
    {
        name: 'gender',
        title: 'Sexo',
        options: 
        [
            {
                value: '',
                text: 'Todos',
            },
            {
                value: 'Fêmea',
                text: 'Fêmea',
            },
            {
                value: 'Macho',
                text: 'Macho',
            },
        ],
    },
]